<script>
import feather from 'feather-icons';
import GetResumeModal from '../GetResumeModal.vue';

export default {
    name: "Home",
    data: () => {
        return {
			isOpen: false,
			modal: false,
            theme: "",
        };
    },
    created() {
        this.theme = localStorage.getItem("theme") || "light";
    },
    mounted() {
        feather.replace();
        this.theme = localStorage.getItem("theme") || "light";
    },
    updated() {
        feather.replace();
    },
    methods: {
        showModal(e) {
			console.log("showModal")
			console.log(e?.target)
            if (this.modal) {
                // Stop screen scrolling
                document
                    .getElementsByTagName("html")[0]
                    .classList.remove("overflow-y-hidden");
                this.modal = false;
            }
            else {
                document
                    .getElementsByTagName("html")[0]
                    .classList.add("overflow-y-hidden");
                this.modal = true;
            }
        },
    },
    components: { GetResumeModal }
};
</script>

<template>
	<section
		class="flex flex-col sm:justify-between items-center sm:flex-row mt-12 sm:mt-10"
	>
		<!-- Banner left contents -->
		<div class="w-full md:w-1/3 text-left">
			<h1
				class="font-general-semibold text-3xl md:text-3xl xl:text-4xl text-center sm:text-left text-ternary-dark dark:text-primary-light uppercase"
			>
				Hi, I'm Tim Hunter
			</h1>
			<p
				class="font-general-medium mt-2 text-lg sm:text-xl  xl:text-2xl text-center sm:text-left leading-none text-gray-400"
			>
				M.Sc. medical biophysics, data scientist, programmer.
			</p>
			<div class="flex justify-center sm:block">
				<div
					class="flex justify-center items-center w-36 sm:w-48 mt-12 mb-6 sm:mb-0 text-lg border border-emerald-200 dark:border-ternary-dark py-2.5 sm:py-3 shadow-lg rounded-lg bg-emerald-50 focus:ring-1 focus:ring-emerald-900 hover:bg-emerald-500 text-gray-500 hover:text-white duration-500"
					aria-label="Get Resume"
					@click="showModal"
				>
					<i
						data-feather="mail"
						class="ml-0 sm:ml-1 mr-2 sm:mr-3 w-5 sm:w-6 duration-100"
					></i>
					<span class="text-sm sm:text-lg font-general-medium duration-100">
						Get my resume
					</span>
				</div>
				<GetResumeModal
					:showModal="showModal"
					:modal="modal"
					aria-modal="Get Resume Modal"
				/>
			</div>
		</div>

		<!-- Banner right illustration -->
		<div class="w-full md:w-2/3 text-right float-right">
			<img
				v-if="theme === 'light'"
				src="@/assets/images/developer.svg"
				alt="Developer"
			/>
			<img
				v-else
				src="@/assets/images/developer-dark.svg"
				alt="Developer"
			/>
		</div>
	</section>
</template>

<style scoped></style>
