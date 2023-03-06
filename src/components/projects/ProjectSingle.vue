<script setup>
/* eslint-disable */
import { defineProps, ref } from 'vue';
import ProjectModal from './ProjectModal.vue';

defineProps({
	project: {
		required: true,
	}
});

const modal = ref(false);

const showModal = () => {
	if (modal.value) {
		// Stop screen scrolling
		document
			.getElementsByTagName("html")[0]
			.classList.remove("overflow-y-hidden");
		modal.value = false;
	}
	else {
		document
			.getElementsByTagName("html")[0]
			.classList.add("overflow-y-hidden");
		modal.value = true;
	}
}


/* eslint-disable */
const truncate = (str, n) => {
  return (str.length > n) ? str.slice(0, n-1) + `…` : str
}

</script>

<template>
	<div
		class="cursor-pointer p-2 relative transform hover:scale-110 transition duration-500 ease-in-out group"
		aria-label="Single Project"
		@click="showModal"
	>
			<img
				:src="project.img"
				:alt="project.title"
				class="rounded-xl w-full h-full  opacity-30 group-hover:opacity-100 transition duration-500"
			/>
			<div class="absolute top-0 left-0 p-8 group-hover:p-4 w-full transition-all duration-500 ease-in-out group-hover:bg-opacity-50 dark:group-hover:bg-opacity-50 group-hover:bg-white dark:group-hover:bg-secondary-dark group-hover:text-sm">

				<h1
					class="text-left font-general-bold text-2xl transform group-hover:text-lg transition-all duration-500 ease-in-out text-ternary-dark dark:text-ternary-light font-bold"
					>
					{{ truncate(project.title, 46) }}
				</h1>
				<p
					class="transition-all duration-500 ease-in-out text-left text-2xl transform group-hover:text-base text-ternary-dark dark:text-ternary-light"
					>{{ project.category }}</p
				>
			</div>
	</div>
	<ProjectModal :showModal="showModal" :modal="modal" :project="project" aria-modal="Project Modal" />
</template>
