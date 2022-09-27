<template>
  <HeaderComponent />
  <div class="section-page">
    <SideBar />
    <router-view class="page" />
  </div>
  <nav>
    <!--  <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> -->
  </nav>
</template>

<script lang="ts">
import HeaderComponent from "@/components/Header/Header.vue";
import SideBar from "./components/SideBar/SideBar.vue";

export default {
  components: {
    HeaderComponent,
    SideBar,
  },
};
</script>

<style>
#app {
  height: 100vh;
}
body,
html {
  font-family: Roboto;
  height: 100vh;
}
* {
  padding: 0;
  margin: 0;
}

ul {
  list-style: none;
}

.section-page {
  display: flex;
  background-color: #f0f0f0;
  height: 92vh;
}

.page {
  flex-direction: column;
  width: 100%;
}
</style>
