<script>
import certifications from '@/data/certifications.js';
// import AboutClientSingle from '@/components/about/AboutClientSingle';
import AboutCertificationSingle from '@/components/about/AboutCertificationSingle';

const certificationsHeading = 'Education and Certifications';

export default {
    components: {AboutCertificationSingle},
    data() {
        return {
            certificationsHeading,
            certifications,
        };
    },
};
</script>

<template>
    <div class="mt-10 sm:mt-20">
		<p
			class="font-general-medium text-2xl sm:text-3xl text-primary-dark dark:text-primary-light"
		>
			{{ certificationsHeading }}
		</p>
		<div class="flex flex-col w-full mt-10 gap-2">
			<AboutCertificationSingle
				v-for="certification in certifications"
				:key="certification.id"
				:cert="certification"
			/>
		</div>
	</div>
</template>