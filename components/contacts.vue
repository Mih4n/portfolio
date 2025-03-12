<template>
    <div class="bg-yellow flex" id="contacts" style="height: 100px; width: 100%;">
        <div class="line-title contacts">
            <h3 class="text-bg-0h">Contacts:</h3>
            <a class="link h-underline-a">
                <Icon name="linkedIn" />
            </a>
            <a class="link h-underline-a">
                <Icon name="telegram" />
            </a>
            <a class="link h-underline-a">
                <Icon name="email" />
            </a>
        </div>
    </div>
</template>

<style lang="less">
@import "/assets/css/mobile.less";
#contacts {
    h3 {
        margin: auto 0;
    }
    .link {
        height: 46px;
        width: 40px;
        display: flex;
        justify-content: center;
        align-items: center;

        cursor: pointer;
        position: relative;
    }
    .icon {
        path {
            fill: var(--bg-0h);
        }
    }
    .contacts {
        gap: 120px;
        #mobile.orientation({
            gap: 0;
            justify-content: space-between;
        });
    }
    .line-title {
        margin: auto var(--title-pudding) auto var(--title-pudding);
    }


    .h-underline-a::after {
        content: '';
        position: absolute;
        width: 100%;
        transform: scaleX(0);
        height: 3px;
        bottom: 0;
        left: 0;
        background-color: var(--bg-0h);
        transform-origin: bottom right;
        transition: transform 0.5s cubic-bezier(1, 0, 0, 1);
    }

    .h-underline-a:hover::after {
        transform: scaleX(1);
    }

    .h-underline-a::after {
        transform-origin: bottom right;
    }

    .h-underline-a:hover::after {
        transform-origin: bottom left;
    }
}
</style>