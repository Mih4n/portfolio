<template>
    <div class="load-wheel-wrapper">
        <div class="load-wheel"></div>
    </div>
</template>

<script lang="ts" setup>

</script>

<style>
.load-wheel-wrapper {
    width: 100%;
    height: 100%;
}

.load-wheel {
    margin: auto;
    width: 50px;
    height: 50px;
    border-top: 5px solid var(--fg0);
    border-radius: 50%;
    animation: spin 1s cubic-bezier(1, 0, 0, 1) infinite;
}

@keyframes spin {
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
}
</style>