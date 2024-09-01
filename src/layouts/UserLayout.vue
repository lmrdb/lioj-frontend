<template>
  <div id="userLayout">
    <a-layout style="min-height: 100vh">
      <a-layout-header class="-header">
        <a-space>
          <img src="../assets/oj-logo.png" class="logo" />
          厉 OJ
        </a-space>
      </a-layout-header>
      <a-layout-content class="-content">
        <router-view />
      </a-layout-content>
      <a-layout-footer class="-footer">编程导航</a-layout-footer>
    </a-layout>
  </div>
</template>

<style>
#userLayout {
  text-align: center;
}

#userLayout .logo {
  width: 64px;
  height: 64px;
}

#userLayout .-header {
  margin-top: 16px;
}

#userLayout .-content {
  background: url("../assets/background.png") 0% 0% / 100% 100% no-repeat;
  margin-bottom: 16px;
  padding: 20px;
}

#userLayout .-footer {
  padding: 16px;
  position: sticky;
  bottom: 0;
  left: 0;
  right: 0;
  text-align: center;
}
</style>
<script setup lang="ts"></script>
