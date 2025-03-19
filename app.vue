<template>
    <Header />
    <About />
    <Contacts />
    <Stack />
    <Projects />
</template>

<script setup lang="ts">
import Prism from '~/composables/usePrism';
onMounted(() => {
	Prism.highlightAll();
})

useSeoMeta({
    ogTitle: "Mih4n",
    ogDescription: "Mih4n's Portfolio",
    ogUrl: "https://mih4n.xyz",
    ogImage: "http://mih4n.xyz/og-big.png",
    twitterCard: 'summary',
    twitterTitle: "Mih4n",
    twitterImage: "http://mih4n.xyz/og.png",
    twitterDescription: "Mih4n's Portfolio"
})
</script>
