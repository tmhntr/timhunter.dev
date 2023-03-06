<script>
import feather from 'feather-icons';
import ContactDetails from '@/components/contact/ContactDetails.vue';
import ContactFormContainer from '../components/contact/ContactFormContainer.vue';

export default {
	components: {
    ContactDetails,
    ContactFormContainer
},
	data: () => {
		return {
			contacts: [
				{
					id: 1,
					name: 'Montreal, Canada',
					icon: 'map-pin',
				},
				{
					id: 2,
					name: 'thunte27@uwo.ca',
					icon: 'mail',
				},
				{
					id: 3,
					name: 'tmhntr',
					icon: 'linkedin',
				},
				{
					id: 4,
					name: '@tim__hunter__',
					icon: 'instagram',
				},


			],
		};
	},
	mounted() {
		feather.replace();
	},
	updated() {
		feather.replace();
	},
	methods: {},
};
</script>

<template>
	<div
		class="container mx-auto flex flex-col-reverse md:flex-row py-5 md:py-10 md:mt-10"
	>
		<!-- Contact form -->
		<ContactFormContainer />

		<!-- Contact details -->
		<ContactDetails :contacts="contacts" />
	</div>
</template>
