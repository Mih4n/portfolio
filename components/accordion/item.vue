<template>
    <li class="accordion-item">
      <div 
        class="accordion-trigger"
        @click="open"
      >
        <slot name="trigger" :visible="visible"></slot>
      </div>
      <div 
        class="accordion-item-content-wrapper"
        :class="{ 'open': visible }"
      >
        <div class="accordion-item-content">
          <slot name="content"></slot>
        </div>
      </div>
      <slot name="footer"></slot>
    </li> 
</template>
  
  
<script lang="ts" setup>
import type { Accordion } from './types';

const accordion: Ref<Accordion>|undefined = inject("Accordion")
const index = ref(accordion ? accordion.value.count++ : 0)
const visible = computed(() => accordion && index.value == accordion.value.active)
const open = () => {
  console.log(accordion?.value)
  if(!accordion) return
  if (visible.value) {
    accordion.value.active = null;
  } else {
    accordion.value.active = index.value;
  }
}
</script>
  
<style lang="less" scoped>
.accordion-trigger {
  cursor: pointer;
}

.accordion-item {
  display: flex;
  flex-direction: column;
}

.accordion-item-content-wrapper {
  cursor: pointer;
  display: grid;
  grid-template-rows: 0fr;
  transition: grid-template-rows 0.3s ease-in-out;
}

.accordion-item-content {
  overflow: hidden;
}

.accordion-item-content-wrapper.open {
  grid-template-rows: 1fr;
}
</style>