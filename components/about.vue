<template>
    <Code 
        v-if="about !== null && about"
        :code="about && about[0]?.content || ''"
        :addition="about && about[1]?.content || ''"
        class="about"
    />
</template>

<script setup lang="ts">
import type { GrayMatterFile } from 'gray-matter';

const about = (await useFetch<GrayMatterFile<string>[]>("/api/markdown/about")).data
</script>

<style>
.about {
    height: calc(100dvh - var(--header-height));
}
</style>