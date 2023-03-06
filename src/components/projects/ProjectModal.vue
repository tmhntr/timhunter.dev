<script>
import feather from 'feather-icons';

export default {
	props: ['showModal', 'modal', 'project'],
	data() {
		return {
		};
	},
	mounted() {
		feather.replace();
	},
	updated() {
		feather.replace();
	},
	methods: {
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
				class="flex flex-col items-center justify-center h-full"
			>
				<transition name="fade-up-down">
					<div
						v-show="modal"
						class="modal-wrapper flex flex-col items-center justify-center max-w-4xl w-8/12 z-30" 
					>
						<div
							class="modal w-full max-h-full mx-5 my-5 bg-secondary-light dark:bg-primary-dark shadow-lg flex-row rounded-lg relative"
						>
							<div
								class="modal-header flex justify-between gap-10 p-5 border-b border-ternary-light dark:border-ternary-dark"
							>
								<h5
									class="text-primary-dark dark:text-primary-light text-xl"
								>
									Project Details
								</h5>
								<button
									class="px-4 text-primary-dark dark:text-primary-light"
									@click="showModal()"
								>
									<i data-feather="x"></i>
								</button>
							</div>
							<div class="modal-body p-5 w-full h-full">
								<h1 class="text-4xl mb-4">
									{{ project.title }}
								</h1>
								<p>
									{{ project.description }}
								</p>
								<div class="flex flex-col gap-5">
									<div class="flex flex-col gap-2">
										<h6 class="text-primary-dark dark:text-primary-light">
											Technologies Used
										</h6>
										<div class="flex flex-wrap gap-2">
											<span
												v-for="tech in project.technologies"
												:key="tech"
												class="text-xs text-primary-dark dark:text-primary-light bg-ternary-light dark:bg-ternary-dark px-2 py-1 rounded"
											>
												{{ tech }}
											</span>
										</div>
									</div>
									<div class="flex flex-col gap-2">
										<h6 class="text-primary-dark dark:text-primary-light">
											Project Link
										</h6>
										<a
											:href="project.url"
											target="_blank"
											class="text-xs text-primary-dark dark:text-primary-light bg-ternary-light dark:bg-ternary-dark px-2 py-1 rounded"
										>
											{{ project.url }}
										</a>
									</div>
								</div>
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
