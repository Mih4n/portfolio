<template>
    <div class="carousel">
        <ul class="carousel-track">
            <slot></slot>
        </ul>
    </div>
</template>

<style lang="less">
.carousel {
    width: 100%;
    height: calc(10 * var(--code-line-height));

    display: flex;
    overflow: auto;
    animation: blink 1s steps(1, end) infinite;

    position: relative;

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
    padding: 0 20px;
    display: flex;
    height: 100%;
    & * {
        height: 100%;
        aspect-ratio: initial;
    }
    cursor: grab;
    overflow-x: hidden;

    &.dragging {
        cursor: grabbing;
    }
}
</style>