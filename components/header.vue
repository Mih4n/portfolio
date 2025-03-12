<template>
    <header class="bg-blue-white">
        <main class="bg-blue">
            <div class="content">
                <h3 class="logo incontsolate" href="#">Mih4n</h3>
                <div class="links">
                    <a class="incontsolate h-underline-a" href="#contacts">
                        <h3>
                            Contacts
                        </h3>
                    </a>
                    <a class="incontsolate h-underline-a" href="#projects">
                        <h3>
                            Projects
                        </h3>
                    </a>
                </div>
            </div>
            <ModeSwitch class="mode"/>
        </main>
    </header>
</template>

<style lang="less">
@import "/assets/css/mobile.less";
html {
    --header-height: 100px;
    scroll-padding-top: var(--header-height);
}
header {
    height: var(--header-height);
    width: 100vw;

    top: 0;
    left: 0;
    position: sticky;

    z-index: 1000;

    display: flex;
    flex-direction: column;

    filter: drop-shadow(0px 15px 25px rgba(0, 0, 0, 0.1));

    main {
        height: 100%;
        width: 100%;

        padding: 0 var(--title-pudding) 0 var(--title-pudding);
        margin-bottom: 20px;

        display: flex;
        position: relative;

        .content{
            width: 100%;
            display: flex;
            margin: auto 0;
        }
        .logo {
            margin: auto auto auto 0;

            font-style: normal;
            font-weight: 900;
            font-size: 41px;

            font-weight: 900;
        }
        .links {
            display: flex;
            gap: 140px;
            #mobile.orientation({
                display: none;
            });
            a {
                margin: auto 0;
                padding: 10px;
                position: relative;
                h3 {
                    margin: 0;
                    font-weight: 500;
                    font-size: 17px;
                    transition: all 0.5s cubic-bezier(1, 0, 0, 1);
                }
            }
        }
        .mode {
            right: -140px;
            position: absolute;
            #mobile.orientation({
                right: 0;
                position: static;
            });
            path {
                fill: var(--fg0);
            }
        }
    }
}

.h-underline-a {
    display: flex;
    position: relative;
}

.h-underline-a::after {
    content: '';
    position: absolute;
    width: 100%;
    transform: scaleX(0);
    height: 3px;
    bottom: 0;
    left: 0;
    background-color: var(--fg0);
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