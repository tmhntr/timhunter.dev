<script>
import Button from '../reusable/Button.vue';
import FormInput from '../reusable/FormInput.vue';
import FormTextarea from '../reusable/FormTextarea.vue';

import emailjs from '@emailjs/browser';


export default {
	components: { Button, FormInput, FormTextarea },
	methods: {
		sendEmail() {
			emailjs.sendForm(process.env.VUE_APP_EMAILJS_SERVICE_ID, process.env.VUE_APP_EMAILJS_TEMPLATE_ID, this.$refs.form, process.env.VUE_APP_EMAILJS_PUBLIC_KEY)
				.then((result) => {
					console.log('SUCCESS!', result.text);
				}, (error) => {
					console.log('FAILED...', error.text);
				});
		}
	}
};
</script>

<template>
	<div class="max-w-xl mx-4 px-7 pb-7" >
		<form action="#" ref="form" class="font-general-regular space-y-7" @submit.prevent="sendEmail">
			<FormInput label="Full Name" inputIdentifier="from_name" />
			<FormInput label="Email" inputIdentifier="email" inputType="email" />
			<FormInput label="Subject" inputIdentifier="subject" />
			<FormTextarea label="Message" textareaIdentifier="message" />

			<div>
				<Button title="Send Message"
					class="px-4 py-2.5 text-white tracking-wider bg-emerald-500 hover:bg-emerald-600 focus:ring-1 focus:ring-emerald-900 rounded-lg duration-500"
					type="submit" aria-label="Send Message" />
				<slot template="button"></slot>
			</div>
		</form>
	</div>
</template>

<style lang="scss" scoped>

</style>
