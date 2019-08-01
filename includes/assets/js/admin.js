(function ($) {

	var swatches = require('vue-swatches');
	var VueQuillEditor = require('vue-quill-editor');
	var VueSelect = require('vue-select');

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
					.on('click', function () {
						vm.closePopup()
					})

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
			updateCustomCss: function () {
				jQuery('#formCustomCSS').text(this.CSS)
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
			changeFormType: function () {

				//Sidebar
				if (this.optinType == 'sidebar') {
					this.formHeight = '400px'
					this.formWidth = '300px'
					this.singleLine = false
					return
				}

				this.formHeight = '250px'
				this.formWidth = '520px'

			},
			changeColorTheme: function () {
				var colors = this.colorTheme.split(" ")
				if (!colors.length) return;
				this.noptinFormBg = colors[0]
				this.noptinFormBorderColor = colors[2]
				this.noptinButtonColor = colors[0]
				this.noptinButtonBg = colors[1]
				this.titleColor = colors[1]
				this.descriptionColor = colors[1]
				this.noteColor = colors[1]
			},
			changeTemplate: function () {
				var templates = JSON.parse(noptinEditor.templates),
					template = this.Template

				if (templates[template]) {
					Object.keys(templates[template]).forEach(function (key) {
						vm[key] = templates[template][key]
					})
				}
				jQuery('#formCustomCSS').text(this.CSS)
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
		mounted: function () {
			jQuery('#formCustomCSS').text(this.CSS)
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

			updateCustomCss: function () {
				jQuery('#formCustomCSS').text(this.CSS)
			},
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
			changeOptinType: function (form) {

				this.optinType = form

				//Change the form size
				if (this.optinType == 'sidebar') {
					this.formHeight = '400px'
					this.formWidth = '300px'
					this.singleLine = false
				} else {
					this.formHeight = '250px'
					this.formWidth = '520px'
				}

				//Move to the next step
				this.currentStep = 'step_2'


			},
			changeColorTheme: function () {
				var colors = this.colorTheme.split(" ")
				if (!colors.length) return;
				this.noptinFormBg = colors[0]
				this.noptinFormBorderColor = colors[2]
				this.noptinButtonColor = colors[0]
				this.noptinButtonBg = colors[1]
				this.titleColor = colors[1]
				this.descriptionColor = colors[1]
				this.noteColor = colors[1]
			},
			changeTemplate: function () {
				template = this.Template

				if (noptinEditor.templates[template]) {
					Object.keys(noptinEditor.templates[template]).forEach(function (key) {
						vmQuick[key] = noptinEditor.templates[template][key]
					})
				}
				this.updateCustomCss()
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
			Template: function (Template) {
				template = this.Template

				if (noptinEditor.templates[template]) {
					Object.keys(noptinEditor.templates[template]).forEach(function (key) {
						vmQuick[key] = noptinEditor.templates[template][key]
					})
				}

				if (this.optinType == 'sidebar') {
					this.formHeight = '400px'
					this.formWidth = '300px'
				} else {
					this.formHeight = '250px'
					this.formWidth = '520px'
				}

				this.updateCustomCss()
			},
		},
		mounted: function () {
			jQuery('#formCustomCSS').text(this.CSS)
			jQuery('.noptin-form-designer-loader').hide()
			$('.noptin-tip').tooltipster();

			var ddData = []

			Object.keys(noptinEditor.templates).forEach(function (key) {
				var template = {
					text: key,
					value: key,
					imageSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2T0vbiOu-nBxPzKw4HKrrVSAgfXx_qxzYe8w81k6cm7eH8UcnCg",
					//description: "Description with Facebook",

				}
				ddData.push(template)
			})

			$('.ddslickTemplates').ddslick({
				data: ddData,
				selectText: "Select A Template",
				onSelected: function (data) {
					vmQuick.Template = data.selectedData.value;
					vmQuick.changeTemplate()
				}
			});

			var themes = []

			Object.keys(noptinEditor.color_themes).forEach(function (key) {
				var theme = {
					text: key,
					value: noptinEditor.color_themes[key],
					imageSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2T0vbiOu-nBxPzKw4HKrrVSAgfXx_qxzYe8w81k6cm7eH8UcnCg",
					//description: "Description with Facebook",

				}
				themes.push(theme)
			})

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
