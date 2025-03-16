<template>
    <Columns class="about">
        <template #left>
            <Lines>
                <ContentRenderer v-if="code" :value="code" />
            </Lines>
        </template>
        <template #right>
            <ContentRenderer v-if="content" :value="content" />
        </template>
    </Columns>
</template>

<script setup lang="ts">
const { data: code } = await useAsyncData('about-page', () => queryCollection("about").first())
const { data: content } = await useAsyncData('about-page', () => queryCollection("about").skip(1).first())
</script>

<style>
.about {
    height: calc(100dvh - var(--header-height));
}
</style>