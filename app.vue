<template>
    <Header />
    <About />
    <Contacts />
    <Stack />
    <Projects />
    <Footer />
</template>

<script setup lang="ts">
import { highlightAll } from '~/composables/usePrism';

onMounted(() => {
	highlightAll()
})
</script>
