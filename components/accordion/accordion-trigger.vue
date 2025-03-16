<template>
    <div class="a-trigger">
        <div class="line-title">
            <slot></slot>
        </div>
        <div class="arrow">
            <div class="line" />
            <div class="line" />
        </div>
    </div>
</template>

<style lang="less">
.a-trigger {
    width: 100%;
    height: 75px;
    display: flex;
    .arrow {
        width: 24px;
        height: 14px;
        margin: auto 0 auto 20px;
        --arrow-line-height: 3.5px;

        position: relative;
        .line {
            width: 76%;
            height: var(--arrow-line-height);

            position: absolute;

            border-radius: var(--arrow-line-height);
            background-color: var(--fg0);

            transition: all 0.5s cubic-bezier(1, 0, 0, 1);
        }

        .line:nth-child(1) {
            top: calc(100% - var(--arrow-line-height) / 2);
            left: 0;
            transform-origin: right center;
 	        transform: translateX(-30%) rotate(45deg);
        }

        .line:nth-child(2) {
            top: calc(100% - var(--arrow-line-height) / 2);
            right: 0;
            transform-origin: left center;
            transform: translateX(30%) rotate(-45deg);
        }
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
        .line:nth-child(1) {
            top: calc(-0.5 * var(--arrow-line-height));
            transform: translateX(-30%) rotate(-45deg);
        }
        .line:nth-child(2) {
            top: calc(-0.5 * var(--arrow-line-height));
            transform: translateX(30%) rotate(45deg);
        }
    }
}
</style>