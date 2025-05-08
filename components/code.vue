<template>
    <Columns>
        <template #left>
            <Lines>
                <MDC 
                    :value="code" 
                    :tag="false"
                />
            </Lines>
        </template>
        <template #right v-if="addition">
            <MDC 
                :value="addition ?? ''" 
                :tag="false" 
            />
        </template>
    </Columns>
</template>

<script lang="ts" setup>
import type { VNodeRef } from 'vue';
import highlight from '~/composables/usePrism';

defineProps<{
  code: string;
  addition?: string;
}>();

const element = ref<VNodeRef>();

function unwrapVNodeRef(ref: VNodeRef): Element | null {
  if (ref && typeof ref === 'object' && 'value' in ref && ref.value) {
    const val = ref.value;
    if (val instanceof Element) return val;
    if ('$el' in val) return val.$el as Element;
  }
  return null;
}

onMounted(() => {
    if (element.value) {
        console.log(unwrapVNodeRef(element.value))
        highlight(unwrapVNodeRef(element.value)!);
    }
});
</script>