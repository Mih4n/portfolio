<template>
    <Header />
    <About />
    <Contacts />
    <Stack />
    <Projects />
    <Footer />
</template>

<script setup lang="ts">
import highlightAll from '~/composables/usePrism';
onMounted(() => {
	highlightAll()
}, this)

useSeoMeta({
    ogTitle: "Mih4n",
    ogDescription: "Mih4n's Portfolio",
    ogUrl: "https://mih4n.xyz",
    ogImage: "https://mih4n.xyz/og-big.png",
    twitterCard: 'summary',
    twitterTitle: "Mih4n",
    twitterImage: "https://mih4n.xyz/og.png",
    twitterDescription: "Mih4n's Portfolio"
})
</script>
