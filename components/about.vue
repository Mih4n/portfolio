<template>
    <Code 
        v-if="about.length >= 2"
        :code="about && about[0]?.content || ''"
        :addition="about && about[1]?.content || ''"
        class="about"
    />
</template>

<script setup lang="ts">
import type { GrayMatterFile } from 'gray-matter';

const about = ref<GrayMatterFile<string>[]>([])

useFetch<GrayMatterFile<string>[]>("/api/markdown/about")
    .then(response => about.value = response.data.value ?? [])
</script>