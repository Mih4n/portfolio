<template>
    <div 
        class="mode-switch"
        :class="{ 'light': !mode, 'dark': mode }"
        @click="toggleDark()"
    >
        <div class="icon-wrapper">
            <Icon name="solar" class="solar" />
            <Icon name="moon" class="moon"/>
        </div>
    </div>
</template>

<script setup lang="ts"> 
const mode = useDark({ disableTransition: false })
const toggleDark = useToggle(mode)
</script>

<style lang="less" scoped>
.mode-switch {
    min-width: 33px;
    height: 100%;
    display: flex;
    margin: auto 0;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    overflow: hidden;
    position: relative;
}
.icon-wrapper {
    height: 33px;
}
.moon, .solar {
  position: absolute;
  width: 33px;
  height: 33px;
  top: 50%;
  left: 0;
  transform: translateY(200%);
  transition: transform 0.5s cubic-bezier(1, 0, 0, 1);
}
.mode-switch.dark {
    .solar {
        transform: translateY(-50%);
    }
}
.mode-switch.light {
    .moon {
        transform: translateY(-50%);
    }
}
</style>