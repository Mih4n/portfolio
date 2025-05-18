<template>
    <Code 
        v-if="about"
        :code="about.content.left?.content"
        :addition="about.content.right?.content"
        class="about"
    />
</template>

<script setup lang="ts">
import type Project from '../types/project';

const about = ref<Project | undefined>(undefined)

useFetch<Project>("/api/projects/about")
    .then(response => about.value = response.data.value ?? undefined)
</script>