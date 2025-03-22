<template>
    <div class="carousel">
        <div class="carousel-track">
            <slot></slot>
        </div>
    </div>
</template>

<script>
</script>

<style>
.carousel {
    width: 100%;
    border-left: 3.5px solid var(--fg0);
    overflow: scroll;
    animation: blink 1s steps(1, end) infinite;
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
    width: fit-content;
    display: inline-block;
}
</style>