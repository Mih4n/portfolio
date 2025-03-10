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

<style lang="less" scoped>
.columns {
    width: 100%;
    height: fit-content;
    &:hover {
        ::-webkit-scrollbar-thumb {
            background: #665c5450;
        }
    }

    ::-webkit-scrollbar {
        width: 12px;
    }

    ::-webkit-scrollbar-track {
        background: transparent;
    }

    ::-webkit-scrollbar-thumb:hover {
        background: #665c54;
    }
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