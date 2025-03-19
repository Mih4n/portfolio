<template>
    <Columns>
        <template #left>
            <Lines>
                <MDC :value="code" />
            </Lines>
        </template>
        <template #right v-if="addition">
            <MDC :value="addition ?? ''" />
        </template>
    </Columns>
</template>

<script lang="ts" setup>
defineProps<{
    code: string,
    addition?: string
}>()
</script>