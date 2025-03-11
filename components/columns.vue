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

<style lang="less">
@import "/assets/css/mobile.less";
.columns {
    width: 100%;
    display: flex;
    flex-direction: row;

    #mobile.orientation({
        flex-direction: column;
    });

    height: fit-content;
    .left {
        width: 100%;
        height: 100%;
        overflow: scroll;
    }

    .right {    
        width: 100%;
        height: 100%;
    }
}
</style>