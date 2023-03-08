<template>
    <header class="mt-3 mx-3">
        <nav class=" bg-[#F4F2FE] rounded-t-[32px] relative w-full p-6 lg:px-24">

            <div class="flex items-center space-x-10 justify-between">

                <NuxtLink to="/">
                    <div class="flex space-x-2">
                        <img :src="centenumPropLogo" alt="logo" />
                    </div>
                </NuxtLink>

                <div
                    class="hidden w-[80%] xl:w-[70%] justify-between space-x-5 items-center md:flex md:justify-end lg:justify-between">

                    <div
                        class="hidden bg-white py-3 px-5 xl:px-20 rounded-large self-center space-x-7 md:flex cursor-pointer text-veryDarkBlue text-sm">
                        <NuxtLink @click="scroll(3)"
                            class="text-veryDarkBlue transition-all duration-300 hover:text-darkGrey">Features
                        </NuxtLink>
                        <NuxtLink @click="scroll(1)" class=" transition-all duration-300 hover:text-darkGrey">
                            Gallery
                        </NuxtLink>
                        <NuxtLink @click="scroll(6)" class=" transition-all duration-300 hover:text-darkGrey">
                            FAQs
                        </NuxtLink>
                        <NuxtLink @click="modalState.showForm = true" class=" transition-all duration-300 hover:text-darkGrey">
                            Contact us
                        </NuxtLink>
                    </div>

                    <div class="hidden items-center space-x-6 lg:flex">

                        <NuxtLink @click="scroll(1)"
                            class="text-sm cursor-pointer transition-all duration-300 hover:text-darkGrey text-veryDarkBlue">
                            Pricing
                        </NuxtLink>
                        <Button @click="setForm('Book Inspection')" text="Book inspection" design="btn bg-veryDarkBlue rounded-full text-sm" />

                    </div>

                </div>

                <div class="md:hidden ">
                    <div class="flex items-center rounded-md justify-center px-3 py-4 bg-veryDarkBlue">

                        <button id="menu-btn" @click="toggleNav"
                            class="block relative w-6 h-4  transition-all md:hidden focus:outline-none"
                            :class="(showNav) ? 'open' : ''">
                            <span class="hamburger-top rounded-full absolute top-0 left-0 h-[2px] w-6 bg-white"></span>
                            <span class="hamburger-middle rounded-full absolute top-0 left-0 h-[2px] w-6 bg-white"></span>
                            <span class="hamburger-bottom rounded-full absolute top-0 left-0 h-[2px] w-6 bg-white"></span>
                        </button>
                    </div>

                </div>


            </div>

            <Transition>
                <div class="md:hidden absolute w-full left-0 z-30" v-show="showNav">
                    <div id="menu"
                        class="w-full bg-clip-padding text-veryDarkBlue min-h-[50vh] bg-[#F4F2FE] backdrop-filter backdrop-blur-xl bg-opacity-60 flex flex-col items-start text-xl self-end space-y-10 font-bold px-6 drop-shadow-md">
                        <NuxtLink @click="toggleNav" class=" ">
                        </NuxtLink>
                        <NuxtLink @click="scroll(3)" class="">Features
                        </NuxtLink>
                        <NuxtLink @click="scroll(1)" class="">Gallery
                        </NuxtLink>
                        <NuxtLink @click="scroll(6)" class="">FAQs
                        </NuxtLink>
                        <NuxtLink @click=" modalState.showForm = true, toggleNav" class="">Contact us
                        </NuxtLink>
                    </div>
                </div>
            </Transition>

        </nav>
    </header>
</template>

<script setup>
import { ref } from 'vue';
import centenumPropLogo from '../../assets/images/icons/centenumPropLogo.svg'
const modalState = useModalState()

const setForm = (title) =>{
    modalState.value.showForm = true
    modalState.value.formTitle = title
}
let showNav = ref(false)

const toggleNav = () => showNav.value = !showNav.value

const scroll = (section) => {
    window.document.body.firstChild.children[0].children[1].children[section].scrollIntoView({ behavior: "smooth" })
}
</script>

<style scoped>
.v-enter-active,
.v-leave-active {
    transition: all 0.5s cubic-bezier(1, 0.5, 0.8, 1);
}

.v-enter-from,
.v-leave-to {
    transform: translateY(-20px);
    opacity: 0;
}

.hamburger-top,
.hamburger-middle,
.hamburger-bottom {
    transform: rotate(0);
    transition: all 0.3s;
}

.hamburger-middle {
    transform: translateY(7px);
}

.hamburger-bottom {
    transform: translateY(14px);
}

.open {
    position: relative;
    transform: rotate(90deg);
    transform: translateY(0px);
}

.open .hamburger-top {
    transform: rotate(45deg) translateY(6px) translate(6px);
}

.open .hamburger-middle {
    display: none;
}

.open .hamburger-bottom {
    transform: rotate(-45deg) translateY(6px) translate(-6px);
}
</style>