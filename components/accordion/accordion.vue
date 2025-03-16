<template>
    <ul ref="obj" class="accordion">
        <slot></slot>
    </ul>
</template>
  
<script lang="ts" setup>
import type { Accordion } from './types';

const obj = ref<HTMLElement>();
const accordion = ref<Accordion>({
    count: 0,
    active: null
})
provide("Accordion", accordion);
</script>
  
<style lang="less" scoped>
.accordion {
    list-style: none;
    margin: 0;
    padding: 0;
}
</style>