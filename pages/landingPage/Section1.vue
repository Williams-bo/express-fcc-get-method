<template>
    <section class="mx-3 bg-[#F4F2FE] rounded-b-[32px] pb-16">
        <div
            class=" flex flex-col space-y-10 items-start md:items-center p-5 min-h-[85vh] md:justify-between md:space-y-0 md:space-x-10  md:p-0 md:flex-row md:px-6 lg:px-24 ">
            <div
                class="flex flex-col text-left w-fit justify-center mt-10 space-y-5 transition-all max-w-[38rem] md:text-left md:min-h-fit">

                <h1 class=" font-medium text-fadePurple text-4xl md:justify-start md:text-left lg:text-6xl">
                    Welcome to Ire
                </h1>

                <p class="text-primaryGrey text-sm lg:text-2xl ">
                    Powered by nature and technology, but created with you in mind
                </p>


                <div class="flex space-x-3 justify-start">
                    <Button name="Book inspection" text="Book inspection" @click="setForm('Book inspection')"
                        design="btn-xl bg-veryDarkBlue rounded-full" />
                    <Button name="Request a call" text="Request a call" @click="setForm('Request a call')"
                        design="btn-xl bg-white text-veryDarkBlue rounded-full" />
                </div>

            </div>

            <div
                class="relative flex justify-start items-start min-h-[40vh] max-h-fit w-full md:w-[35rem] md:block md:h-fit">
                <div class="relative">
                    <img :src="propsImg" alt="props" class="w-[20rem] md:w-full">
                    <button @click="playVideo"
                        class="play-btn absolute overflow-hidden flex items-center bg-white rounded-large bottom-4 md:bottom-[2.6rem] left-3 md:left-[2rem]">
                        <img :src="play" alt="play" class="w-[5rem]">
                        <div class=" overflow-hidden">
                            <p class="text-darkGrey w-[8rem]">Quick view of Ire</p>
                            <p class="text-primaryGrey w-[8rem]">1:06mins</p>
                        </div>
                    </button>
                </div>
                <div v-show="showVideo" class="absolute top-0 h-full bg-[#F4F2FE] flex justify-center items-center">
                    <video :src="ireVideo" controls class=""></video>
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
                    <img :src="slideImg1" alt="properties" class="h-[20vh]" >
                </div>
            </div>
            <div class="mt-5 overflow-hidden">
                <div class="h-auto  w-[500vw]  lg:w-[150rem] img-slide2 ">
                    <img :src="slideImg2" alt="properties" class=" h-[17vh]" >
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
</template>

<script setup>
import propsImg from '../../assets/images/pictures/propsImg.png'
import slideImg1 from '../../assets/images/pictures/slideImg1.png'
import slideImg2 from '../../assets/images/pictures/slideImg2.png'
import play from '../../assets/images/icons/Player.svg'
import ireVideo from '../../assets/video/ireVideo.mp4'
const modalState = useModalState()
const showVideo = ref(false)

const playVideo = () => {
    showVideo.value = true
    setTimeout(() => {
        showVideo.value = false
    }, 100000)
}

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
    animation: play 3s ease .5s 1 forwards;
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
}</style>