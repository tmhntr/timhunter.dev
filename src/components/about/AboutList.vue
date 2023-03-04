<script>
	// import AboutClientSingle from '@/components/about/AboutClientSingle';
	import AboutCertificationSingle from '@/components/about/AboutCertificationSingle';
	import AboutBanner from '@/components/about/AboutBanner';


	export default {
		components: { AboutCertificationSingle, AboutBanner },
		props: {
			title: {
				type: String,
				default: 'Education',
			},
			data: {
				type: Array,
				default: () => [],
			}
		},
	};

</script>

<template>
    <div class="">
		<AboutBanner>
			{{ title }}
		</AboutBanner>
		<div class="flex flex-col w-full mt-10 gap-2">
			<AboutCertificationSingle
				v-for="d in data"
				:key="d.id"
				:cert="d"
			/>
		</div>
	</div>
</template>