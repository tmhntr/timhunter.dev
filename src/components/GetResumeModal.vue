<script>
import feather from 'feather-icons';
import Button from './reusable/Button.vue';
import FormInput from './reusable/FormInput.vue';
import emailjs from '@emailjs/browser';

export default {
	props: ['showModal', 'modal'],
	components: { Button, FormInput },
	data() {
		return {
			selectOptions: ["Resume", "Curriculum Vitae"],
		};
	},
	mounted() {
		feather.replace();
	},
	updated() {
		feather.replace();
	},
	methods: {
		sendEmail(showModal) {
			console.log('Sending email...');
			emailjs.sendForm(process.env.VUE_APP_EMAILJS_SERVICE_ID, process.env.VUE_APP_EMAILJS_REQ_TEMPLATE_ID, this.$refs.form, process.env.VUE_APP_EMAILJS_PUBLIC_KEY)
				.then((result) => {
					console.log('SUCCESS!', result.text);
					showModal();
				}, (error) => {
					console.log('FAILED...', error.text);
				});

		}
	},
};
</script>

<template>
	<transition name="fade">
		<div v-show="modal" class="font-general-regular fixed inset-0 z-30">
			<!-- Modal body background as backdrop -->
			<div
				v-show="modal"
				@click="showModal()"
				class="bg-filter bg-black bg-opacity-50 fixed inset-0 w-full h-full z-20"
			></div>
			<!-- Modal content -->
			<main
				class="flex flex-col items-center justify-center h-full w-full"
			>
				<transition name="fade-up-down">
					<div
						v-show="modal"
						class="modal-wrapper flex items-center z-30"
					>
						<div
							class="modal max-w-md mx-5 md:max-w-xl bg-secondary-light dark:bg-primary-dark max-h-screen shadow-lg flex-row rounded-lg relative"
						>
							<div
								class="modal-header flex justify-between gap-10 p-5 border-b border-ternary-light dark:border-ternary-dark"
							>
								<h5
									class="text-primary-dark dark:text-primary-light text-xl"
								>
									Request my resume
								</h5>
								<button
									class="px-4 text-primary-dark dark:text-primary-light"
									@click="showModal()"
								>
									<i data-feather="x"></i>
								</button>
							</div>
							<div class="modal-body p-5 w-full h-full">
								<form ref="form" @submit.prevent="sendEmail(showModal)" class="max-w-xl m-4 text-left">
									<div class="md:flex md:items-center mb-6">
										<div class="md:w-1/3"></div>
											<label class="md:w-2/3 block text-gray-500 font-bold">
											<input class="mr-2 leading-tight" type="checkbox" id="resume" name="resume">
											<span class="text-sm">
												Resume
											</span>
										</label>
							
										<div class="md:w-1/3"></div>
											<label class="md:w-2/3 block text-gray-500 font-bold">
											<input class="mr-2 leading-tight" type="checkbox" id="cv" name="cv">
											<span class="text-sm">
												CV
											</span>
										</label>
									</div>
									<FormInput
										label="Full Name"
										inputIdentifier="from_name"
										class="mb-2"
									/>
									<FormInput
										label="Email"
										inputIdentifier="email"
										inputType="email"
									/>
									
									<div class="mb-6">
										<div class="md:w-1/3"></div>
										<label class="block text-gray-500 font-bold">
										<input class="mr-2 leading-tight" type="checkbox">
										<span class="text-sm">
											Send me your newsletter!
										</span>
										</label>
									</div>


									
									<div
									class="flex modal-footer mt-2 sm:mt-0 py-5 px-8 border-0-t text-right"
									>
										<Button
											title="Send Request"
											class="px-4 sm:px-6 py-2 sm:py-2.5 text-white bg-emerald-500 hover:bg-emerald-600 rounded-md focus:ring-1 focus:ring-emerald-900 duration-500"
											type="submit"
											aria-label="Submit Request"
										/>
										<Button
										title="Close"
										class="px-4 sm:px-6 py-2 bg-gray-600 text-primary-light hover:bg-ternary-dark dark:bg-gray-200 dark:text-secondary-dark dark:hover:bg-primary-light rounded-md focus:ring-1 focus:ring-emerald-900 duration-500"
										@click="showModal()"
										aria-label="Close Modal"
										/>
									</div>
								</form>
							</div>
						</div>
					</div>
				</transition>
			</main>
		</div>
	</transition>
</template>

<style scoped>
.modal-body {
	max-height: 570px;
}
.bg-gray-800-opacity {
	background-color: #2d374850;
}
@media screen and (max-width: 768px) {
	.modal-body {
		max-height: 400px;
	}
}
.fade-up-down-enter-active {
	transition: all 0.3s ease;
}
.fade-up-down-leave-active {
	transition: all 0.3s ease;
}
.fade-up-down-enter {
	transform: translateY(10%);
	opacity: 0;
}
.fade-up-down-leave-to {
	transform: translateY(10%);
	opacity: 0;
}

.fade-enter-active {
	-webkit-transition: opacity 2s;
	transition: opacity 0.3s;
}
.fade-leave-active {
	transition: opacity 0.3s;
}

.fade-enter,
.fade-leave-to {
	opacity: 0;
}
</style>
