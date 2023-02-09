<script>
export default {
	props: ['cert'],
};
</script>

<template>
	<div class="w-full flex flex-row align-middle justify-between border border-ternary-light dark:border-ternary-dark shadow-sm rounded-lg mb-8 cursor-pointer dark:bg-secondary-light"> 
		<img
			:src="cert.img"
			:alt="cert.title"
			class="w-24 my-6 mr-24 mx-12 rounded-lg"
		/>
        <p class="my-auto mx-auto text-2xl font-bold text-ternary-dark">
            {{ cert.title }}
            <br>
            {{ cert.date }}
        </p>
	</div>
</template>

<style lang="scss" scoped></style>