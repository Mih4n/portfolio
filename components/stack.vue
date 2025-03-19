<template>
    <Code 
        :code="stack && stack[0]?.content || ''"
    />
</template>

<script lang="ts" setup>
import type { GrayMatterFile } from 'gray-matter';

const stack = (await useFetch<GrayMatterFile<string>[]>("/api/markdown/stack")).data
</script>
