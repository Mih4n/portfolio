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
        #mobile.all({
            gap: 0;
            justify-content: space-between;
        });
    }
    .line-title {
        margin: auto var(--title-pudding) auto var(--title-pudding);
    }


    .h-underline-a::after {
        background-color: var(--bg-0h);
    }
}
</style>