<script>
import Button from '../reusable/Button.vue';
import FormInput from '../reusable/FormInput.vue';
import FormTextarea from '../reusable/FormTextarea.vue';

import emailjs from '@emailjs/browser';


console.log(process.env);

export default {
	components: { Button, FormInput, FormTextarea },
	methods: {
		sendEmail() {
			console.log('Sending email...');
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
	<div class="w-full md:w-1/2">
		<div
			class="leading-loose max-w-xl m-4 p-7 bg-secondary-light dark:bg-secondary-dark rounded-xl shadow-xl text-left">
			<p class="font-general-medium text-primary-dark dark:text-primary-light text-2xl mb-8">
				Contact Form
			</p>
			<form ref="form" class="font-general-regular space-y-7" @submit.prevent="sendEmail">
				<FormInput label="Full Name" inputIdentifier="name" />
				<FormInput label="Email" inputIdentifier="email" inputType="email" />
				<FormInput label="Subject" inputIdentifier="subject" />
				<FormTextarea label="Message" textareaIdentifier="message" />

				<div>
					<Button title="Send Message"
						class="px-4 py-2.5 text-white tracking-wider bg-emerald-500 hover:bg-emerald-600 focus:ring-1 focus:ring-emerald-900 rounded-lg duration-500"
						type="submit" aria-label="Send Message" />
				</div>
			</form>
		</div>
	</div>
</template>

<style lang="scss" scoped>

</style>
