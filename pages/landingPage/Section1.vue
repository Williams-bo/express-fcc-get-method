<template>
    <section class="mx-3 bg-[#F4F2FE] rounded-b-[32px] pb-16">
        <div
            class=" flex flex-col space-y-10 items-start md:items-center p-5 min-h-[85vh] md:justify-between md:space-y-0 md:space-x-10  md:p-0 md:flex-row md:px-6 lg:px-24 ">
            <div
                class="flex flex-col text-left w-fit justify-center mt-10 md:mt-0 space-y-5 lg:space-y-10 transition-all max-w-[38rem] md:text-left md:min-h-fit">

                <h1 class=" font-medium text-fadePurple text-2xl md:justify-start md:text-left lg:text-4xl">
                    Own a piece of land in one of Nigeria's most secure, beautiful, serene, and fast-growing neighborhoods
                </h1>

                <p class="text-primaryGrey text-sm lg:text-xl ">
                    CHARIS VILLE's value has grown by 43% in the last 6 months. Take advantage of this offer.
                </p>


                <div class="flex space-x-3 justify-start">
                    <Button name="Book inspection" text="Book inspection" @click="setForm('Book inspection')"
                        design="btn-xl bg-veryDarkBlue rounded-full" />
                    <Button name="Request a call" text="Request a call" @click="setForm('Request a call')"
                        design="btn-xl bg-white text-veryDarkBlue rounded-full" />
                </div>

                <div class="text-veryDarkBlue">
                    <h4 class="text-[1.2rem] lg:text-[1.4rem] font-medium  md:justify-start md:text-left">
                        Got questions?
                    </h4>

                    <p class="text-xs lg:text-sm ">
                        Get in touch with someone on our team to answer all your questions right now
                    </p>

                </div>

            </div>

            <div
                class="relative flex justify-start items-start min-h-[40vh] max-h-fit w-full md:w-[35rem] md:block md:h-fit">
                <!-- <div class="h-full relative">
                    <img :src="propsImg" alt="props" class="w-[20rem] md:w-full">
                    <button @click="playVideo"
                        class="play-btn w-[5rem] absolute overflow-hidden flex items-center bg-white rounded-large bottom-4 md:bottom-[2.6rem] left-3 md:left-[2rem]">
                        <img :src="play" alt="play" class="w-[5rem]">
                        <div class=" overflow-hidden">
                            <p class="text-darkGrey w-[8rem]">Quick view of Ire</p>
                            <p class="text-primaryGrey w-[8rem]">1:06mins</p>
                        </div>
                    </button>
                </div> -->
                <div class="absolute top-0 h-full w-full bg-[#F4F2FE] flex justify-center items-start md:items-center ">
                    <div class="bg-[#F4F2FE] flex justify-center items-center h-[70%] w-full  lg:h-full">
                        <iframe width="100%" height="100%" src="https://www.youtube.com/embed/2jPAYEOWjwI?mute=1"
                            title="Ire video" frameborder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowfullscreen>
                        </iframe>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section class="container-bg m-3 py-10 lg:py-20 ">
        <div class="flex justify-center items-center lg:pt-20 p-4 lg:p-10 space-x-10">
            <h2 class="text-2xl lg:text-6xl text-fadePurple border-r border-r-fadePurple pr-10">
                Gallery
            </h2>
            <p class="text-xs md:text-xl w-fit text-fadePurple ">
                A sneak peak into real estate goodness
            </p>
        </div>

        <div class="py-10 lg:py-20">
            <div class="overflow-hidden ">
                <div class="h-auto w-[500vw] lg:w-[150rem] img-slide1">
                    <img :src="slideImg1" alt="properties" class="h-[20vh]">
                </div>
            </div>
            <div class="mt-5 overflow-hidden">
                <div class="h-auto  w-[500vw]  lg:w-[150rem] img-slide2 ">
                    <img :src="slideImg2" alt="properties" class=" h-[17vh]">
                </div>
            </div>
        </div>

        <div class="pb-10 mr-10 lg:mr-20 flex justify-end text-veryDarkBlue text-2xl cursor-pointer">
            <NuxtLink @click="scroll(3)">
                Explore Features →
            </NuxtLink>
        </div>
    </section>

    <FormPage />
    <SuccessModal />
</template>

<script setup>
import propsImg from '../../assets/images/pictures/propsImg.png'
import slideImg1 from '../../assets/images/pictures/slideImg1.png'
import slideImg2 from '../../assets/images/pictures/slideImg2.png'
import play from '../../assets/images/icons/Player.svg'

const modalState = useModalState()
const showVideo = ref(false)

// const playVideo = () => {
//     showVideo.value = true
//     setTimeout(() => {
//         showVideo.value = false
//     }, 150000)
// }

const setForm = (title) => {
    modalState.value.showForm = true
    modalState.value.formTitle = title
}
const scroll = (section) => {
    window.document.body.firstChild.children[0].children[1].children[section].scrollIntoView({ behavior: "smooth" })
}

</script>

<style scoped>
.play-btn {
    animation: play 3s ease 1s 1 forwards;
}

.img-slide1 {
    animation: slide1 70s linear infinite;
}

.img-slide2 {
    animation: slide2 80s linear infinite;
}

@keyframes play {

    0% {
        width: 5rem;
    }

    100% {
        width: 15rem;
    }
}

@keyframes slide1 {

    0%,
    100% {
        transform: translateX(0);
    }

    50% {
        transform: translateX(-40%);
    }
}

@keyframes slide2 {

    0%,
    100% {
        transform: translateX(-40%);
    }

    50% {
        transform: translateX(0);
    }
}
</style>