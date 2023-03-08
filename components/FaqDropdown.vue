<template>
    <div class="flex flex-col space-y-6  text-left pt-8"
        >
        <div class="flex w-full justify-between">
            <p class="font-medium text-darkGrey text-lg md:text-2xl w-[90%] ">
                {{ question }}
            </p>
            <img @click="showDrop" :src="dropIcon" alt="drop icon"
                class="transition-all duration-500 cursor-pointer h-8"
                :style="{ transform: drop ? 'rotate(180deg)' : 'rotate(0deg)' }">

        </div>
        <div class="transition-[min-height] overflow-hidden h-0 duration-500" :style="{ minHeight: drop ? '6rem' : '0' }">
            <p class=" text-primaryGrey w-5/6 text-base lg:text-xl">
                {{ answer }}
            </p>
        </div>
    </div>
</template>

<script setup> 
import dropIcon from '../assets/images/icons/Down.png'
const { question, answer } = defineProps(['question', 'answer'])

let drop = ref(false)

const showDrop = () => drop.value = !drop.value
</script>

<style scoped>

</style>