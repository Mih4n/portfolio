<template>
    <Code 
        :code="stack?.content.left?.content"
    />
</template>

<script lang="ts" setup>
import type Project from '../types/project';

const stack = (await useFetch<Project>("/api/projects/stack")).data
</script>
