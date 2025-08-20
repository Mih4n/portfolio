<template>
    <div class="columns-wrapper">
        <div 
            ref="left"
            v-dragscroll="!isMobile"
            v-if="showLeft"
            class="left column-wrapper bg-0h" 
            :class="{ 'overflow': leftOverflow, 'only': !showRight }"
        >
            <slot name="left"></slot>
        </div>
        <div 
            ref="right"
            v-dragscroll="!isMobile"
            v-if="showRight"
            class="right column-wrapper-wrapper bg"
            :class="{ 'overflow': rightOverflow, 'only': !showLeft }"
        >
            <slot name="right"></slot>
        </div>

    </div>
</template>

<script setup lang="ts">
import { useSlots } from "vue";

const { isMobile } = useDevice();

const left = ref<HTMLElement>();
const right = ref<HTMLElement>();

const slots = useSlots();
const showLeft = !!slots.left;
const showRight = !!slots.right;

const leftOverflow = computed(() => (left.value?.scrollWidth ?? 0) > (left.value?.clientWidth ?? 0));
const rightOverflow = computed(() => (right.value?.scrollWidth ?? 0) > (right.value?.clientWidth ?? 0));
</script>

<style lang="less">
@import "/assets/css/mobile.less";
.columns-wrapper {
    width: 100%;
    display: flex;
    flex-direction: row;

    #mobile.all({
        flex-direction: column;
    });


    .column-wrapper {
        min-width: 50%;
        min-height: 100%;

        display: block;
        overflow: overlay;

        &.only {
            min-width: 100%;
            max-width: 100vw;
        }

        &.overflow {
            cursor: grab;

            &:active {
                cursor: grabbing;
            }
        }
    }

    .right {    
        padding: var(--three-lines) 35px;
    }
}
</style>