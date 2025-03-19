<template>
    <header class="bg-blue-white">
        <main class="bg-blue">
            <div class="content">
                <h3 class="logo incontsolate" href="#">Mih4n</h3>
                <div id="links">
                    <Links />
                </div>
            </div>
            <ModeSwitch class="mode" />
            <Burger v-model="opened" />
        </main>
        <div id="mobile-links" class="bg-blue-white" :class="{ 'opened': opened }">
            <div class="content" ref="content">
                <Links />
            </div>
        </div>
    </header>
</template>

<script setup lang="ts">
import ModeSwitch from './modeSwitch.vue';
import Burger from './burger.vue';
import Links from './links.vue';
const opened = ref<boolean>()

const content = useTemplateRef('content')
const headerHight = useCssVar('--header-height')
const scrollPudding = useCssVar('--scroll-pudding')

function toNumber(string: string): number {
    return parseFloat(string.slice(0, string.length - 2))
}

function toPixels(number: number): string {
    return number.toString().concat("px")
}

onMounted(() => {
    if (content.value) {
        const header = toNumber(headerHight.value || '0')
        scrollPudding.value = toPixels(header - 20 + content.value.clientHeight)
    }
})
</script>

<style lang="less">
@import "/assets/css/mobile.less";

:root {
    --header-height: 100px;
    --scroll-pudding: 100px;
    scroll-padding-top: var(--scroll-pudding);
}

header {
    height: var(--header-height);
    transition: all 0.5s cubic-bezier(1, 0, 0, 1);
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

        .content {
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

        #links {
                display: flex;
                gap: 140px;

                #break-points.width980({
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

            #break-points.width980({
                right: 0;
                position: static;
            });

            path {
                fill: var(--fg0);
            }
        }

        .burger {
            display: none;
        }

        #break-points.width980({
            .burger {
                display: flex;
            }
        })
    }

    #mobile-links {
        display: none;

        #break-points.width980({
            display: grid;
        });

        width: 100vw;

        overflow: hidden;

        top: calc(var(--header-height) - 20px);
        position: absolute;
        align-items: flex-start;
        grid-template-rows: 0fr;
        transition: all 0.5s ease-in-out;

        &.opened {
            grid-template-rows: 1fr;
        }

        .content {
            overflow: hidden;

            display: flex;
            flex-direction: column;

            .h-underline-a {
                padding-bottom: 5px;
                margin: 5px 0 0 auto;
            }

            padding-right: var(--title-pudding);
            padding-bottom: 5px;
        }
    }
}
</style>