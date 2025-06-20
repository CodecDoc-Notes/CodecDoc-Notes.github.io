<template>
  <DefaultTheme.Layout v-bind="$attrs">
    <template #doc-footer-before>
      <BackToTop/>
    </template>
  </DefaultTheme.Layout>
</template>

<script setup lang="ts">
import DefaultTheme from 'vitepress/theme'
import BackToTop from "./BackToTop.vue";

</script>

<style scoped></style>