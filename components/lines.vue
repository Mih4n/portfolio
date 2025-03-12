<template>
    <div class="container" ref="container">
      <div class="line-numbers">
        <span v-for="n in lineCount" :key="n">{{ n }}</span>
      </div>
      <div class="content" ref="content">
        <slot class="content"></slot>
      </div>
    </div>
</template>
  
<script lang="ts" setup>
const lineCount = ref(0);
const content = ref<HTMLElement>();
const container = ref<HTMLElement>();
const size = useElementSize(container);

const updateLineCount = () => {
    const lineHeight = 32;
    const containerHeight = content.value?.offsetHeight;
    lineCount.value = Math.floor(((containerHeight ?? 0) / lineHeight));
}
watch(size.height, () => {
  updateLineCount();
})

onMounted(updateLineCount);
</script>
  
<style lang="less" scoped>
.container {
  display: flex;
  width: 100%;
  height: 100%;
}

.line-numbers {
  padding-left: 50px;
  display: flex;
  flex-direction: column;
}

.line-numbers span {
  font-weight: 500;
  font-size: 18px;
  line-height: 32px;
  text-align: right;
  color: var(--bg0-h);
}

.content {
  padding-left: 85px;
  overflow: auto;
}
</style>
  