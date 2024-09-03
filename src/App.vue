<template>
  <div id="app">
    <template v-if="route.path.startsWith('/user')">
      <router-view />
    </template>
    <basiclayout></basiclayout>
  </div>
</template>

<style>
#app {
}
</style>
<script setup lang="ts">
import Basiclayout from "@/layouts/BasicLayout.vue";
import { onMounted } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();
/**
 * 全局初始化函数，有全局单次调用的代码，都可以写在这里
 */
const doInit = () => {
  console.log("你好");
};

onMounted(() => {
  doInit();
});
</script>
