<template>
    <span class="icon" v-html="icon" />
</template>

<script setup lang="ts">
import email from "@/assets/icons/@.svg?raw"
import linkedIn from "@/assets/icons/linkedIn.svg?raw"
import telegram from "@/assets/icons/telegram.svg?raw"
import solar from "@/assets/icons/solar.svg?raw"
import moon from "@/assets/icons/moon.svg?raw"

const props = defineProps({
    name: String,
})
const map: Record<string, any> = {
    "email": email,
    "linkedIn": linkedIn,
    "telegram": telegram,
    "solar": solar,
    "moon": moon
}
const icon = computed(() => map[props.name ?? ""] || undefined)
</script>

<style lang="less" scoped>
.icon {
    * {
        width: 100%;
        height: 100%;
    }
}
</style>