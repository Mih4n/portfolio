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
import { useDragScroll } from '~/composables/useDragScroll';

onMounted(() => {
	highlightAll()
    useDragScroll()
})
</script>
