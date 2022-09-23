<template>
  <HeaderComponent />
  <nav>
    <!--  <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> -->
  </nav>
  <router-view />
</template>

<script lang="ts">
import HeaderComponent from "@/components/Header/Header.vue";
export default {
  components: {
    HeaderComponent,
  },
};
</script>

<style>
* {
  padding: 0;
  margin: 0;
  color: white;
}
</style>
