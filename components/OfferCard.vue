<template>
    <div class="rounded-[16px] xl:rounded-[32px] bg-[#C1ECA8] flex flex-col items-center justify-evenly h-[18vh] md:h-[30vh] w-[48%] px-6">
        <img :src="icon" :alt="text" class="h-2/5">
        <p class="text-xs lg:text-xl text-center font-thin">{{ text }}</p>
    </div>
</template>

<script setup>
const { icon, text } = defineProps(['icon', 'text'])

</script>

<style scoped>

</style>