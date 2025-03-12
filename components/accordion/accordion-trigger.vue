<template>
    <div class="a-trigger">
        <div class="line-title">
            <slot></slot>
        </div>
        <div class="arrow">
            <Icon name="arrow" />
        </div>
    </div>
</template>

<style lang="less">
.a-trigger {
    width: 100%;
    height: 75px;
    display: flex;
    .arrow {
        height: 18px;
        margin: auto 0 auto 20px;
        transition: transform 0.5s cubic-bezier(1, 0, 0, 1);
    }
    .line-title {
        width: fit-content;
        margin: auto 0 auto var(--title-pudding);
    }
}
.open {
    > .accordion-trigger 
    .a-trigger 
    .arrow {
        transform: scaleY(-1);
    }
}
</style>