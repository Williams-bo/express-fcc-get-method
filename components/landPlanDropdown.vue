<template>
    <div class="flex flex-col space-y-2 text-left min-h-[4rem] border-b">
        <div class="flex w-full justify-between">
            <p class="font-medium text-veryDarkBlue text-base md:text-xl w-[90%] ">
                {{ name }}
            </p>

            <button name="land description" @click="showDrop" class="relative flex items-center justify-center h-8 w-8">
                <span class="absolute bg-primaryGrey h-[2px] w-4">
                </span>
                <span class="absolute transition-all duration-500 bg-primaryGrey h-[2px] w-4"
                    :style="{ transform: drop ? 'rotate(0deg)' : 'rotate(90deg)' }">
                </span>
            </button>

        </div>
        <div class="transition-[min-height] flex flex-col space-y-2 mt-0 items-start overflow-hidden h-0 duration-500"
            :style="{ minHeight: drop ? '6rem' : '0' }">
            <p class=" text-primaryGrey w-5/6 text-sm">
                {{ offer }}
            </p>
            <p class="text-[#EB6C4B] text-base md:text-xl">{{ price }}</p>
        </div>
    </div>
</template>

<script setup>
const { name, offer, price } = defineProps(['name', 'offer', 'price'])

let drop = ref(false)

const showDrop = () => drop.value = !drop.value
</script>

<style scoped></style>