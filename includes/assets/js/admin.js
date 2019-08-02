(function ($) {

	var swatches = require('vue-swatches');
	var VueQuillEditor = require('vue-quill-editor');
	var VueSelect = require('vue-select');
	var dragula = require('dragula');
console.log(dragula)
	//Color swatches
	Vue.component('noptin-swatch', swatches.default);

	//Select
	Vue.component('noptin-select', VueSelect.default);

	//Quill Editor
	Vue.use(VueQuillEditor)

	//Use divs instead of paragraphs
	var Block = VueQuillEditor.Quill.import('blots/block');
	Block.tagName = 'DIV';
	VueQuillEditor.Quill.register(Block, true);

	//helper functions
	var noptin = {
		templateData: function (key) {

			var data = {}

			if (noptinEditor.templates[key]) {
				var template = noptinEditor.templates[key]['data']

				Object.keys(template).forEach(function (key) {
					data[key] = template[key]
				})

			}
			return data
		},

		applyTemplate: function (template, instance) {

			Object.keys(template).forEach(function (key) {
				instance[key] = template[key]
			})

			noptin.updateFormSizes(instance)

		},

		updateFormSizes: function (instance) {

			if (instance.optinType == 'sidebar') {
				instance.formHeight = '400px'
				instance.formWidth = '300px'
				return;
			}

			if( instance.optinType == 'popup' ){
				instance.formWidth = '600px'
				instance.formHeight = '320px'
				return;
			}

			instance.formHeight = '250px'
			instance.formWidth = '520px'

		},

		updateCustomCss: function (css) {
			$('#formCustomCSS').text(css)
		},

		getColorThemeOptions: function () {
			var themes = []

			Object.keys(noptinEditor.color_themes).forEach(function (key) {
				var theme = {
					text: key,
					value: noptinEditor.color_themes[key],
					imageSrc: noptin_params.icon,
					//description: "Description with Facebook",

				}
				themes.push(theme)
			})

			return themes
		},

		getColorTheme: function (instance) {
			return instance.colorTheme.split(" ")
		},

		changeColorTheme: function ( instance ) {

			var colors = noptin.getColorTheme(instance)

			if (colors.length) {
				instance.noptinFormBg = colors[0]
				instance.noptinFormBorderColor = colors[2]
				instance.noptinButtonColor = colors[0]
				instance.noptinButtonBg = colors[1]
				instance.titleColor = colors[1]
				instance.descriptionColor = colors[1]
				instance.noteColor = colors[1]
			}


		},
	}

	//Register dragula directive
	Vue.directive('noptin-dragula', {
		inserted: function( container, binding ) {

			var list =  binding.value
			var self = this;
			var dragIndex;
			var dragElm;
			this.drake = dragula([container], {
			  revertOnSpill: true
			});

			this.drake.on('drag', function(el, source) {
			  dragElm = el;
			  dragIndex = domIndexOf(el, source);
			});

			this.drake.on('drop', function(dropElm, target, source) {
			  if (!target) return;
			  var dropIndex = domIndexOf(dropElm, target);
			  if (target === container) {
				list.splice(dropIndex, 0, list.splice(dragIndex, 1)[0]);
			  }
			  refreshModel();

			})

			this.drake.on('cancel', refreshModel)
			this.drake.on('remove', refreshModel)

			function refreshModel() {
				// trigger rerendering of the v-for items to keep the dom elements under vue's control
				//self.vm[self.expression] = JSON.parse(JSON.stringify(self.vm[self.expression]))
			}

			function domIndexOf(child, parent) {
			  return Array.prototype.indexOf.call(parent.children, child);
			}

		  },
		  unbind: function() {
			  this.drake.destroy()
		  }
	})


	Vue.component('field-editor', {
		props: ['fields'],
		template: '#noptinFieldEditorTemplate',
		data: function () {
			return {
				fieldTypes: [ 'Email Address', 'First Name', 'Last Name', 'Full Name', 'Text', 'Textarea', 'Checkbox' ]
			}
		},
		methods: {
			addField: function () {
				var total = this.fields.length
				var rand  = Math.random() + total
				var key   = 'key-' + rand.toString(36).replace(/[^a-z]+/g, '')
				this.fields.push(
					{
						name: 'name',
						type: 'Text',
						label: 'Text',
						require: false,
						key: key,
					}
				)

				this.collapseAll()
				this.expandField(key)
			},
			removeField: function (item) {
				this.fields.splice(item,1)
			},
			hasCustomName: function( type ) {
				return ['Email Address','First Name','Last Name','Full Name'].indexOf( type ) == -1
			},
			expandField: function( id ) {
				var el = $( '#' + id)

				//toggle arrows
				$(el).find('.dashicons-arrow-up-alt2').show()
				$(el).find('.dashicons-arrow-down-alt2').hide()

				//slide down the body
				$(el).find('.noptin-field-editor-body').slideDown()
			},
			collapseField: function( id ) {
				var el = $( '#' + id)

				//toggle arrows
				$(el).find('.dashicons-arrow-up-alt2').hide()
				$(el).find('.dashicons-arrow-down-alt2').show()

				//slide up the body
				$(el).find('.noptin-field-editor-body').slideUp()
			},
			collapseAll: function( id ) {
				var that = this

				$.each(this.fields, function( index, value ) {
					that.collapseField(value.key)
				});
			}
		},
	})

	Vue.component('noptinform', {
		props: noptinEditor.design_props,
		template: '#noptinFormTemplate',
		data: function () {
			return {}
		},
		computed: {
			showingFullName: function () {
				return this.showNameField && !this.firstLastName
			},
			showingSingleName: function () {
				return this.showNameField && this.firstLastName
			},
		},
	})

	var editorInstances = {}
	Vue.component('noptineditor', {
		props: ['value', 'id'],
		template: '<textarea><slot></slot></textarea>',
		mounted: function () {
			var vmEditor = this
			var el = jQuery(this.$el)
			var editor = wp.codeEditor.initialize(el)
			editor.codemirror.on('change', function (cm, change) {
				vmEditor.$emit('input', cm.getValue())
			})
			editorInstances[this.id] = editor
			editorInstances[this.id].codemirror.getDoc().setValue(this.value);
		},
		watch: {
			value: function (value) {
				if (editorInstances[this.id]) {
					//editorInstances[this.id].codemirror.getDoc().setValue(value);
				}
			},
		}
	})

	//List filter
	$(document).ready(function () {
		$(".noptin-list-filter input").on("keyup", function () {
			var value = $(this).val().toLowerCase();
			$('.noptin-list-table tbody tr').filter(function () {
				$(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
			});
		});

	});

	var vm = new Vue({
		el: '#noptin-form-editor',
		data: jQuery.extend(true, {}, noptinEditor.data),
		computed: {
			showingFullName: function () {
				return this.showNameField && !this.firstLastName
			},
			showingSingleName: function () {
				return this.showNameField && this.firstLastName
			},
			_onlyShowOn: function () {
				return this.onlyShowOn && this.onlyShowOn.length > 0
			}
		},
		methods: {
			togglePanel: function (id) {

				var noptinPanel = $("#noptinPanel" + id).find('.noptin-popup-editor-panel-body')

				var panelHeight = 0;

				if (!this[id]) {
					var previousCss = $(noptinPanel).attr("style");

					$(noptinPanel).css({
						position: 'absolute',
						visibility: 'hidden',
						display: 'block',
						height: 'auto'
					});

					var panelHeight = $(noptinPanel).height();

					$(noptinPanel).attr("style", previousCss ? previousCss : "");
				}

				var that = this
				$(noptinPanel).animate({
					height: panelHeight,
				}, 600, function () {
					that[id] = !that[id]
					if (that[id]) {
						$(noptinPanel).css({
							height: 'auto'
						});
					}
				});

			},
			previewPopup: function () {
				this.isPreviewShowing = true
				var _html = jQuery('.noptin-popup-wrapper').html()
				jQuery("#noptin-popup-preview")
					.html(_html)
					.addClass('noptin-preview-showing')
					.find('.noptin-popup-close')
					.show()

				//Hide popup when user clicks outside
				jQuery("#noptin-popup-preview")
					.off('noptin-popup')
					.on('click', function (e) {
						var container = jQuery(this).find(".noptin-popup-form-wrapper");

						// if the target of the click isn't the container nor a descendant of the container
						if (!container.is(e.target) && container.has(e.target).length === 0) {
							vm.closePopup()
						}
					});
			},
			closePopup: function () {
				this.isPreviewShowing = false
				jQuery("#noptin-popup-preview").removeClass('noptin-preview-showing').html('')
			},
			saveAsTemplate: function () {
				var saveText = this.saveAsTemplateText
				this.saveAsTemplateText = this.savingTemplateText;
				var that = this

				jQuery.post(noptinEditor.ajaxurl, {
					_ajax_nonce: noptinEditor.nonce,
					action: "noptin_save_optin_form_as_template",
					state: vm.$data
				})
					.done(function () {
						that.showSuccess(that.savingTemplateSuccess)
						that.saveAsTemplateText = saveText
					})
					.fail(function () {
						that.showError(that.savingTemplateError)
						that.saveAsTemplateText = saveText
					})

			},

			upload_image: function (key) {
				var image = wp.media({
					title: 'Upload Image',
					multiple: false
				})
					.open()
					.on('select', function (e) {
						var uploaded_image = image.state().get('selection').first();
						vm[key] = uploaded_image.toJSON().sizes.thumbnail.url;
					})
			},
			showSuccess: function (msg) {
				this.hasSuccess = true;
				this.Success = msg;

				setTimeout(function () {
					vm.hasSuccess = false;
					vm.Success = '';
				}, 5000)
			},
			showError: function (msg) {
				this.hasError = true;
				this.Error = msg;

				setTimeout(function () {
					vm.hasError = false;
					vm.Error = '';
				}, 5000)
			},
			save: function () {
				var saveText = this.saveText
				this.saveText = this.savingText;
				var that = this

				jQuery.post(noptinEditor.ajaxurl, {
					_ajax_nonce: noptinEditor.nonce,
					action: "noptin_save_optin_form",
					state: vm.$data,
					html: jQuery('.noptin-popup-wrapper').html()
				})
					.done(function () {
						that.showSuccess(that.savingSuccess)
						that.saveText = saveText
					})
					.fail(function () {
						that.showError(that.savingError)
						that.saveText = saveText
					})

			}
		},

		watch: {
			Template: function () {
				var template = noptin.templateData(this.Template)
				noptin.applyTemplate(template, this)
			},
			CSS: function () {
				noptin.updateCustomCss(this.CSS)
			},
			optinType: function () {
				noptin.updateFormSizes(this)
			},
			colorTheme: function() {
				noptin.changeColorTheme( this )
			}
		},

		mounted: function () {
			noptin.updateCustomCss(this.CSS)
			jQuery('.noptin-form-designer-loader').hide()
		},
	})

	var vmQuick = new Vue({
		el: '#noptin-quick-form-editor',
		data: jQuery.extend(true, {}, noptinEditor.data),
		computed: {
			showingFullName: function () {
				return this.showNameField && !this.firstLastName
			},
			showingSingleName: function () {
				return this.showNameField && this.firstLastName
			},
			_onlyShowOn: function () {
				return this.onlyShowOn && this.onlyShowOn.length > 0
			},
			titleEditorOptions: function () {
				return {
					theme: 'snow',
					modules: {
						toolbar: [
							['bold', 'italic', 'underline', 'strike'],
							[{ 'color': [] }, { 'background': [] }],
							[{ 'size': ['small', false, 'large', 'huge'] }],
							[{ 'align': [] }],
						]
					},
				}
			},
			descriptionEditorOptions: function () {
				return {
					theme: 'snow',
					modules: {
						toolbar: [
							['bold', 'italic', 'underline', 'strike'],
							[{ 'color': [] }, { 'background': [] }],
							[{ 'list': 'ordered' }, { 'list': 'bullet' }],
							[{ 'size': ['small', false, 'large', 'huge'] }],
							[{ 'align': [] }],
						]
					},
				}
			}
		},
		methods: {

			upload_image: function (key) {
				var image = wp.media({
					title: 'Upload Image',
					multiple: false
				})
					.open()
					.on('select', function (e) {
						var uploaded_image = image.state().get('selection').first();
						vmQuick[key] = uploaded_image.toJSON().sizes.thumbnail.url;
					})
			},
			showSuccess: function (msg) {
				this.hasSuccess = true;
				this.Success = msg;

				setTimeout(function () {
					vmQuick.hasSuccess = false;
					vmQuick.Success = '';
				}, 5000)
			},
			showError: function (msg) {
				this.hasError = true;
				this.Error = msg;

				setTimeout(function () {
					vmQuick.hasError = false;
					vmQuick.Error = '';
				}, 5000)
			},
			finalize: function () {
				this.currentStep = 'step_7'

				jQuery.post(noptinEditor.ajaxurl, {
					_ajax_nonce: noptinEditor.nonce,
					action: "noptin_save_optin_form",
					state: vmQuick.$data,
					html: jQuery('.noptin-popup-wrapper').html()
				})

			}
		},
		watch: {
			Template: function () {
				var template = noptin.templateData(this.Template)
				noptin.applyTemplate(template, this)
			},
			CSS: function () {
				noptin.updateCustomCss(this.CSS)
			},
			optinType: function () {
				noptin.updateFormSizes(this)
			},
			colorTheme: function() {
				noptin.changeColorTheme( this )
			}
		},
		mounted: function () {
			noptin.updateCustomCss(this.CSS)

			jQuery('#formCustomCSS').text(this.CSS)
			jQuery('.noptin-form-designer-loader').hide()
			$('.noptin-tip').tooltipster();

			var ddData = []

			Object.keys(noptinEditor.templates).forEach(function (key) {
				var template = {
					text: noptinEditor.templates[key]['title'],
					value: key,
					imageSrc: noptin_params.icon,
					//description: "Description with Facebook",

				}
				ddData.push(template)
			})

			$('.ddslickTemplates').ddslick({
				data: ddData,
				selectText: "Select A Template",
				onSelected: function (data) {
					vmQuick.Template = data.selectedData.value;
				}
			});

			var themes = noptin.getColorThemeOptions()

			$('.ddslickThemes').ddslick({
				data: themes,
				selectText: "Apply a theme",
				onSelected: function (data) {
					vmQuick.colorTheme = data.selectedData.value;
					vmQuick.changeColorTheme()
				}
			});

		},
	})

})(jQuery);
