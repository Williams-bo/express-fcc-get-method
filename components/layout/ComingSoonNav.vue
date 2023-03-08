<template>
    <header>
        <!-- <nav class="relative w-full bg-black p-6 lg:px-24">

            <div class="flex items-center space-x-10 justify-between">
                <div class="flex space-x-2">
                    <img :src="centenumLogo" alt="logo" />
                    <h1 class="font-bold text-white text-xl">Centenum</h1>
                </div>
                <div class="hidden lg:flex text-sm text-white space-x-20">

                    <NuxtLink target="_blank" to="https://www.facebook.com/TheCentenum/">
                        Facebook
                    </NuxtLink>
                    <NuxtLink target="_blank" to="https://instagram.com/thecentenum?igshid=YmMyMTA2M2Y=">
                        Instagram Us
                    </NuxtLink>
                    <NuxtLink target="_blank" to="https://www.linkedin.com/company/centenum/">
                        LinkedIn
                    </NuxtLink>
                    <NuxtLink target="_blank" to="https://twitter.com/thecentenum">
                        Twitter
                    </NuxtLink>

                </div>

                <div class="md:hidden  z-[100] ">
                    <div class="flex items-center rounded-md justify-center px-3 py-4 bg-[#1C1C1C]"
                        :style="{ backgroundColor: (showNav) ? 'transparent' : '' }">

                        <button id="menu-btn" @click="toggleNav"
                            class="block relative w-6 h-4  transition-all md:hidden focus:outline-none"
                            :class="(showNav) ? 'open' : ''">
                            <span class="hamburger-top nav-tile"
                                :style="{ backgroundColor: (showNav) ? '#6E6E73' : '' }"></span>
                            <span class="hamburger-middle nav-tile"></span>
                            <span class="hamburger-bottom nav-tile"
                                :style="{ backgroundColor: (showNav) ? '#6E6E73' : '' }"></span>
                        </button>
                    </div>

                </div>


            </div>
            <Transition>
                <div class="md:hidden absolute w-1/2 top-11 right-5 z-30" v-show="showNav">
                    <div id="menu"
                        class="w-full bg-black text-white flex flex-col rounded-[16px] items-center text-base self-end py-10 space-y-10 font-bold p-6 drop-shadow-md">

                        <NuxtLink target="_blank" to="https://www.facebook.com/TheCentenum/">
                            Facebook
                        </NuxtLink>
                        <NuxtLink target="_blank" to="https://instagram.com/thecentenum?igshid=YmMyMTA2M2Y=">
                            Instagram Us
                        </NuxtLink>
                        <NuxtLink target="_blank" to="https://www.linkedin.com/company/centenum/">
                            LinkedIn
                        </NuxtLink>
                        <NuxtLink target="_blank" to="https://twitter.com/thecentenum">
                            Twitter
                        </NuxtLink>
                    </div>
                </div>
            </Transition>


        </nav> -->
    </header>
</template>

<script setup>
import centenumPropLogo from '../../assets/images/icons/centenumPropLogo.svg'

const emit = defineEmits(['close'])
let showNav = ref(false)

const toggleNav = () => showNav.value = !showNav.value
</script>

<style  scoped>
.v-enter-active,
.v-leave-active {
    transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
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