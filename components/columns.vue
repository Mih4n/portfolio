<template>
    <div class="columns">
        <div 
            v-if="showLeft"
            class="left column bg-0h" 
        >
            <slot name="left"></slot>
        </div>
        <div 
            v-if="showRight"
            class="right column bg"
        >
            <slot name="right"></slot>
        </div>
    </div>
</template>

<script setup lang="ts">
import { useSlots } from "vue";

const slots = useSlots();
const showLeft = !!slots.left;
const showRight = !!slots.right;
</script>

<style lang="less">
@import "/assets/css/mobile.less";
.columns {
    width: 100%;
    display: flex;
    flex-direction: row;

    #mobile.all({
        flex-direction: column;
    });


    .column {
        width: 100%;
        height: 100%;
        display: block;
        overflow: scroll;
    }

    .right {    
        padding: var(--three-lines) 35px;
    }
}
</style>