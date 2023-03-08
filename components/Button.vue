<template>
    <div>
        <NuxtLink :to='dest'>
            <button :class="design">
                {{ text }}
            </button>
        </NuxtLink>
    </div>
</template>

<script setup>
const { text, design, dest } = defineProps(['text', 'design', 'dest'])
</script>

<style scoped>

</style>