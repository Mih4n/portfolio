<template>
    <Lines>
        <vue-writer>
            <pre v-html="code" />
        </vue-writer>
    </Lines>
</template>

<script setup lang="ts">
defineProps({
    code: String
})
</script>

<style lang="less" scoped>
pre {
    font-weight: 500;
    font-size: 24px;
    line-height: 32px;

    margin: 0;
}
</style>