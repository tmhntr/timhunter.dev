<script>
import AboutMe from '@/components/about/AboutMe';
import { educations, certifications } from '@/data/about';
// import AboutCounter from '@/components/about/AboutCounter';
// import AboutBanner from '@/components/about/AboutBanner';
// import AboutClients from '@/components/about/AboutClients';
import feather from 'feather-icons';
import AboutList from '../components/about/AboutList.vue';

export default {
	name: 'About',
	components: {
    AboutMe,
    // AboutCounter,
    // AboutClients,
    AboutList
},
	data: () => {
		return {educations, certifications};
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
	<div>
		<!-- About me -->
		<div class="container mx-auto">
			<AboutMe />
		</div>

	
		<AboutList title="Education" :data="educations"/>
		<AboutList title="Certifications" :data="certifications" />
	</div>
</template>

<style scoped></style>
