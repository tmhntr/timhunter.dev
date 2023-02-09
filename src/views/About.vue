<script>
import AboutMe from '@/components/about/AboutMe';
// import AboutCounter from '@/components/about/AboutCounter';
import AboutBanner from '@/components/about/AboutBanner';
// import AboutClients from '@/components/about/AboutClients';
import AboutCertifications from '../components/about/AboutCertifications';
import feather from 'feather-icons';

export default {
	name: 'About',
	components: {
		AboutMe,
		// AboutCounter,
		AboutBanner,
		// AboutClients,
		AboutCertifications,
	},
	data: () => {
		return {};
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

		<!-- About counter -->
		<!-- <AboutCounter /> -->

		<AboutBanner />

		<!-- About counter -->
		<!-- <div class="container mx-auto">
			<AboutClients />
		</div> -->
		<div class="container mx-auto">
			<AboutCertifications />
		</div>
	</div>
</template>

<style scoped></style>
