<template>
  <Header />
  <Columns>
    <template #left>
      <ContentDoc path="/about" />
    </template>
  </Columns>
  <Contacts />
  <Projects />
</template>

<script setup lang="ts">
import Contacts from './components/contacts.vue';
import "@/assets/scripts/prism.js";
</script>

<style>
.test {
  width: 100px;
  height: 100px;
  background-color: red;
}
/* .content {
  * {
    font-size: 24px;
    line-height: 32px;
    margin: 0;
  }
} */
</style>
