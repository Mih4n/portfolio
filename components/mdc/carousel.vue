<template>
    <div class="carousel">
        <div class="carousel-track" ref="track">
            <slot></slot>
        </div>
    </div>
</template>

<style lang="less">
.carousel {
    width: 100%;
    height: calc(10 * var(--code-line-height));

    display: flex;
    overflow: auto;
    animation: blink 1s steps(1, end) infinite;

    border-left: 3.5px solid var(--fg0);

    &::-webkit-scrollbar {
        display: none;
    }
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
    display: flex;
    height: 100%;
    & * {
        height: 100%;
    }
}
</style>