<template>
    <footer class="container-bg m-3 bg-veryDarkBlue h-[15vh] md:h-[20vh] px-5 md:px-10 xl:px-20 text-white">
        <div class="h-full flex justify-between items-center">
            <div >
                <img :src="propLogoWhite" alt="Logo" class="w-16 md:w-auto">
            </div>

            <div class="flex space-x-5 lg:space-x-10 text-sm">
                <a href="mailto:hello@centenum.com">
                    <div class="flex justify-center items-center space-x-2">
                        <img :src="mail" alt="mail" class="h-5">
                        <p class="hidden md:block">hello@centenum.com</p>
                    </div>
                </a>

                <a href="tel:+234-706-052-9466">
                    <div class="flex justify-center items-center space-x-2">
                        <img :src="whatsapp" alt="whatsapp" class="h-5">
                        <p class="hidden md:block">+2347060529466</p>

                    </div>
                </a>
            </div>

            <div class="flex items-center justify-start lg:justify-center text-sm text-white space-x-5 lg:space-x-10">

                <NuxtLink target="_blank" to="https://twitter.com/centenumprop?s=21&t=0OpkTZDfbtONTwTz1OLUTg">
                    <img :src="twitter" alt="twitter" class="h-5">
                </NuxtLink>
                <NuxtLink target="_blank" to="https://instagram.com/prop.centenum?igshid=YmMyMTA2M2Y=">
                    <img :src="instagram" alt="instagram" class="h-5">
                </NuxtLink>
                <NuxtLink target="_blank" to="https://www.facebook.com/prop.centenum/">
                    <img :src="facebook" alt="facebook" class="h-5">
                </NuxtLink>
                <NuxtLink target="_blank" to="https://www.linkedin.com/company/centenum-prop/">
                    <img :src="linkedin" alt="linkedin" class="h-5">
                </NuxtLink>


            </div>
        </div>
    </footer>
</template>

<script setup>
import whatsapp from '../../assets/images/icons/whatsapp.svg'
import mail from '../../assets/images/icons/mail.svg'
import propLogoWhite from '../../assets/images/icons/propLogoWhite.svg'
import twitter from '../../assets/images/icons/twitter.svg'
import instagram from '../../assets/images/icons/instagram.svg'
import facebook from '../../assets/images/icons/facebook.svg'
import linkedin from '../../assets/images/icons/linkedin.svg'

</script>

<style scoped></style>