<div  <?php echo noptin_form_template_wrapper_props(); ?>>
	<form <?php echo noptin_form_template_form_props(); ?>>
		<div class="noptin-form-header" :class="image ? imagePos : 'no-image'">
			<div class="noptin-form-header-text">
				<div v-if="!hideTitle" :style="{color:titleColor}" class="noptin-form-heading" v-html="title"></div>
				<div v-if="!hideDescription" :style="{color:descriptionColor}" class="noptin-form-description"
					v-html="description"></div>
			</div>
			<div v-if="image" class="noptin-form-header-image">
				<img :src="image" />
			</div>
		</div>
		<div class="noptin-form-footer">
			<div class="noptin-form-fields">
				<div  v-for="field in fields"  :key="field.key" class="noptin-optin-field-wrapper">
					<input v-if="field.type=='Email Address'" name='email' type="email" class="noptin-form-field" :placeholder="field.label" :required="field.require" />
					<input v-if="field.type=='First Name'" name='first_name' type="text" class="noptin-form-field" :placeholder="field.label" :required="field.require" />
					<input v-if="field.type=='Last Name'" name='last_name' type="text" class="noptin-form-field" :placeholder="field.label" :required="field.require" />
					<input v-if="field.type=='Full Name'" name='name' type="text" class="noptin-form-field" :placeholder="field.label" :required="field.require" />
					<input v-if="field.type=='Text'" :name='field.name' type="text" class="noptin-form-field" :placeholder="field.label" :required="field.require" />
					<label v-if="field.type=='Checkbox'"><input :name='field.name' type="checkbox" :class="noptin-checkbox-form-field" :required="field.require" />{{field.label}}</label>
					<textarea v-if="field.type=='Textarea'" :name='noptin_email' class="noptin-form-field" :placeholder="field.label" :required="field.require"></textarea>
				</div>

				<input :value="noptinButtonLabel" type="submit"
					:style="{backgroundColor:noptinButtonBg, color: noptinButtonColor}"
					:class="singleLine ? '' : 'noptin-form-button-' + buttonPosition" class="noptin-form-submit" />
			</div>
			<p v-if="!hideNote" :style="{ color: noteColor}" class="noptin-form-note" v-html="note"></p>
			<div style="border:1px solid rgba(6, 147, 227, 0.8);display:none;padding:10px;margin-top:10px"
				class="noptin_feedback_success"></div>
			<div style="border:1px solid rgba(227, 6, 37, 0.8);display:none;padding:10px;margin-top:10px"
				class="noptin_feedback_error"></div>
		</div>
		<span v-if="!hideCloseButton && optinType=='popup'" class="noptin-form-close" :class="closeButtonPos"
		title="close"><svg enable-background="new 0 0 24 24" id="Layer_1" version="1.0" viewBox="0 0 24 24"
			xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
			<g>
				<path
					d="M12,2C6.5,2,2,6.5,2,12c0,5.5,4.5,10,10,10s10-4.5,10-10C22,6.5,17.5,2,12,2z M16.9,15.5l-1.4,1.4L12,13.4l-3.5,3.5   l-1.4-1.4l3.5-3.5L7.1,8.5l1.4-1.4l3.5,3.5l3.5-3.5l1.4,1.4L13.4,12L16.9,15.5z" />
			</g>
		</svg>
	</span>
	</form>
	<div v-if="imageMain" class="noptin-form-main-image">
		<img :src="imageMain" />
	</div>

</div>
