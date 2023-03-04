<script setup>
import { defineProps } from 'vue';

defineProps({
	cert: {
		required: true,
	},
});

</script>

<template>
	<div class="w-full flex flex-row align-middle justify-between border border-ternary-light dark:border-ternary-dark shadow-sm rounded-lg mb-8 dark:bg-secondary-light"> 
		<img
			:src="cert.img"
			:alt="cert.title"
			class="w-12 h-12 my-auto mx-4 rounded-lg"
		/>
        <p class="my-auto w-1/2 text-left text-lg font-bold border-r-2 text-ternary-dark flex-grow">
            {{ cert.title }}
        </p>
		<p class="mx-8 w-16 my-2 text-lg text-ternary-dark">
            {{ cert.date }}
        </p>
	</div>
</template>

<style lang="scss" scoped></style>