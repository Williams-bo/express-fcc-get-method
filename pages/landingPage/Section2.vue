<template>
    <section class='container-bg m-3 bg-[#FFFBF5] flex flex-col items-center'>
        <div class=" lg:w-[70%] flex justify-center items-center py-10 p-3 lg:p-10 space-x-10">
            <h2 class="text-xl lg:text-5xl whitespace-nowrap text-fadePurple border-r border-r-fadePurple pr-10">
                Did you know
            </h2>
            <p class="text-xs md:text-lg lg:text-xl text-fadePurple  ">
                Ire is a word in the Yoruba language that means “Goodness” when translated to English.
            </p>
        </div>

        <div
            class="relative container-bg m-3 flex flex-col xl:flex-row items-start overflow-hidden  bg-[#DBF7CB] h-[80vh] md:w-[70%] px-4 lg:px-10 ">
            <div class="xl:absolute mt-10 flex flex-col text-left justify-center  space-y-5 transition-all md:text-left">

                <div class="">
                    <p
                        class="flex items-center font-medium text-fadePurple text-xl md:justify-start md:text-left lg:text-4xl">
                        Some of the <img :src="sqwiggle" alt="arrow">
                    </p>

                    <p class="text-fadePurple text-lg lg:text-4xl ">
                        Features we offer
                    </p>
                </div>

                <div class="flex space-x-3 justify-start">
                    <Button @click="setForm('Get Started')" text="Get Started →"
                        design="btn-xl bg-veryDarkBlue text-xs md:text-sm rounded-full" />

                    <a href="https://drive.google.com/u/0/uc?id=10cYRLWCzworrQHs3juKl7MEOwR6zM5Lw&export=download"> 
                        <Button text="Download brochure ↓"
                        design="btn-xl bg-white text-veryDarkBlue text-xs md:text-sm  rounded-full" />
                    </a>
                </div>

            </div>

            <div class="flex flex-col w-full xl:items-end h-[80vh] overflow-scroll remove-scrollbar mt-10 xl:mt-0 pb-20">
                <p class="py-10 font-thin lg:text-2xl xl:w-1/2">
                    Live your best life with the facilities provided in the Estate - all created with your possible
                    needs in mind
                </p>

                <div class="flex justify-between xl:w-1/2 gap-y-5 flex-wrap lg:pt-10 ">
                    <OfferCard :icon="stars" text="Appropriate land title" />
                    <OfferCard :icon="laptop" text="Smart Co-working arena" />
                    <OfferCard :icon="camera" text="Smart Security Systems" />
                    <OfferCard :icon="building" text="Sustainable Architecture" />
                    <OfferCard :icon="houses" text="State-of-the-art Buidings" />
                    <OfferCard :icon="tennis" text="Furnished Sporting Facilities" />
                    <div
                        class="w-full rounded-[16px] xl:rounded-[32px] bg-[#C1ECA8] flex justify-start items-center space-x-5 lg:space-x-10 px-2 lg:p-5">
                        <img :src="safe" alt="" class="h-[60%]">
                        <p class="text-sm md:text-xl w-1/2">Efficient Estate Management</p>
                    </div>
                </div>
            </div>

        </div>
    </section>

    <section class="container-bg m-3 bg-[#F2FAEF] p-10 xl:p-20">

        <div class="pt-20 flex flex-col items-center">
            <h2 class="text-darkGrey text-3xl lg:text-5xl text-center">
                Choose the plan that fits your need
            </h2>
            <p class="text-sm text-primaryGrey text-center py-5">
                Pay outrightly, or spread payment across 3 months, 6 months or 12 months.
            </p>
            <NuxtLink>
                <button @click="setForm('Book Inspection')" class="btn rounded-large bg-[#FA4119] flex items-center">
                    Book Inspection <img :src="buttonArrow" alt="arrow" class="ml-3 h-5">
                </button>
            </NuxtLink>
        </div>

        <div class="w-full h-fit lg:h-[60vh] flex flex-col lg:flex-row justify-center items-center mt-5 lg:space-x-10">
            <div class=" flex flex-col justify-evenly  min-h-[50vh]">
                <LandPlanDropdown name="300 SQM (Half Plot)"
                    offer="You'll also get a Receipt, Contract of Sale and Global C of O." price="₦5,000,000" />
                <LandPlanDropdown name="450 SQM (3 Quarter Plot)"
                    offer="You'll also get a Receipt, Contract of Sale and Global C of O." price="₦7,500,000" />
                <LandPlanDropdown name="600 SQM (Full Plot)"
                    offer="You'll also get a Receipt, Contract of Sale and Global C of O." price="₦9,000,000" />
            </div>

            <div class="h-[20rem] lg:h-[50vh]">
                <img :src="irePoster" alt="bill board" class="h-full">
            </div>


        </div>

    </section>
</template>

<script setup>
import sqwiggle from '../../assets/images/icons/sqwiggle.svg'
import stars from '../../assets/images/icons/stars.svg'
import laptop from '../../assets/images/icons/laptop.svg'
import camera from '../../assets/images/icons/camera.svg'
import building from '../../assets/images/icons/building.svg'
import houses from '../../assets/images/icons/houses.svg'
import tennis from '../../assets/images/icons/tennis.svg'
import safe from '../../assets/images/icons/safe.svg'
import buttonArrow from '../../assets/images/icons/buttonArrow.svg'
import irePoster from '../../assets/images/pictures/irePoster.png'

const modalState = useModalState()


const setForm = (title) => {
    modalState.value.showForm = true
    modalState.value.formTitle = title
}

</script>

<style  scoped>.remove-scrollbar::-webkit-scrollbar {
    display: none;
}</style>