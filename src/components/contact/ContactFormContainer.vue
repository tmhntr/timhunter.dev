<script>
import ContactForm from './ContactForm.vue';


export default {
	components: { ContactForm }
};
</script>

<template>
	<div class="w-full md:w-1/2">
		<div
			class="bg-secondary-light dark:bg-secondary-dark rounded-xl shadow-xl">
			<p class="m-4 text-center p-7 leading-loose font-general-medium text-primary-dark dark:text-primary-light text-2xl mb-8">
				Contact
			</p>
			<ContactForm />
		</div>
	</div>
</template>

<style lang="scss" scoped>

</style>
