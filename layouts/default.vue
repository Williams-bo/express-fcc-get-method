<template>
    <div>
        <Nav />

        <slot />

        <Footer />

    </div>
</template>

<script setup>
import Nav from '~~/components/layout/Nav.vue';
import Footer from '~~/components/layout/Footer.vue';
</script>

<style scoped>

</style>