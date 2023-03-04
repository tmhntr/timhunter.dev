<script>
export default {
	data: () => {
		return {
			copyrightDate: new Date().getFullYear(),
			projectName: 'TIMHUNTER.DEV',
		};
	},
};
</script>

<template>
	<div class="flex justify-center items-center text-center">
		<div
			class="font-general-regular text-lg text-ternary-dark dark:text-ternary-light"
		>
			&copy; {{ copyrightDate }}.
			<a
				href="https://github.com/realstoman/vuejs-tailwindcss-portfolio"
				target="__blank"
				class="font-general-medium hover:underline hover:text-emerald-600 dark:hover:text-emerald-300 duration-500"
			>
				{{ projectName }}
			</a>
			.
		</div>
	</div>
</template>

<style lang="scss" scoped></style>
