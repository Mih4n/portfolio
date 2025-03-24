<template>
    <div class="carousel" ref="carousel">
        <div class="carousel-track">
            <slot></slot>
        </div>
    </div>
</template>

<script setup lang="ts">
function setHeightMultiple(div: HTMLElement, step: number) {
    console.log("here")
    let height = div.clientHeight;
    let remainder = height % step;
    console.log("remainder: " + remainder + " height: " + height + " step: " + step)
    if (remainder !== 0) {
        console.log((height - remainder + step) + "px")
        div.style.height = (height - remainder + step) + "px"; // Округление вверх
    }
}
const carousel = ref<HTMLElement>();
onMounted(() =>  {
    if(!carousel.value) return
    setHeightMultiple(carousel.value, 32);
})
</script>

<style scoped lang="less">
.carousel {
    width: 100%;
    height: fit-content;

    display: flex;
    overflow: scroll;
    animation: blink 1s steps(1, end) infinite;

    border-left: 3.5px solid var(--fg0);
}

@keyframes blink {
    0% {
        border-color: var(--fg0);
    }

    50% {
        border-color: transparent;
    }
}

.carousel-track {
    gap: 10px;
    display: flex !important;
    width: fit-content;
    display: inline-block;
}
</style>