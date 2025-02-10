<template>
    <div class="columns">
        <div class="left bg-0h">
            <slot name="left"></slot>
        </div>
        <div class="right">
            <slot name="right"></slot>
        </div>
    </div>
</template>

<style scoped>
.columns {
    width: 100%;
    height: 800px;
}

.left {
    width: 50%;
    height: 100%;
    overflow: scroll;
}

.right {    
    width: 50%;
    height: 100%;
}
</style>