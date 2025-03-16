<template>
    <Header />
    <About />
    <Contacts />
    <Projects />
</template>

<script setup lang="ts">
import Prism from '~/composables/usePrism';
onMounted(() => {
	Prism.highlightAll();
})
</script>

<style>
.test {
    width: 100px;
    height: 100px;
    background-color: red;
}
</style>
