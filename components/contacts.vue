<template>
    <div class="bg-yellow flex" id="contacts" style="height: 100px; width: 100%;">
        <div class="line-title text-bg-0h contacts">
            <h3>Contacts:</h3>
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

<style lang="less" scoped>
h3 {
    color: inherit;
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
    * {
        fill: var(--bg-0h);
    }
}
.contacts {
    gap: 120px;
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
</style>