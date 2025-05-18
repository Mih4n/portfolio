<template>
    <div class="bg-yellow flex" id="contacts" style="height: 100px; width: 100%;">
        <div class="line-title contacts">
            <h3 class="text-bg-0h">Contacts:</h3>
            <a 
                class="link h-underline-a" 
                href="https://github.com/mih4n"
                aria-label="my github profile"
            >
                <Icon name="github" />
            </a>
            <a 
                class="link h-underline-a" 
                href="https://linkedin.com/in/mih4n"
                aria-label="my linkedin profile"
            >
                <Icon name="linkedIn" />
            </a>
            <a 
                class="link h-underline-a" 
                href="https://t.me/lmih4nl"
                aria-label="my telegram profile"
            >
                <Icon name="telegram" />
            </a>
            <a 
                class="link h-underline-a" 
                href="mailto:selfish@mih4n.xyz"
                aria-label="my email address"
            >
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
        width: 30px;
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