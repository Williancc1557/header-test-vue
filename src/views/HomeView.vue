<template>
  <div>
    <PageHeader @click="updateSection" />
    <div v-if="section == 'places'">aaaaaaa</div>
  </div>
</template>

<script lang="ts">
/* eslint-disable @typescript-eslint/no-explicit-any */
import PageHeader from "@/components/PageHeader/PageHeader.vue";
import router from "../router/";

export default {
  name: "HomeView",
  components: {
    PageHeader,
  },
  data() {
    return {
      section: "",
    };
  },
  created() {
    (this as any).section = router.currentRoute.value.params.select;
  },
  methods: {
    updateSection() {
      (this as any).section = router.currentRoute.value.params.select;
    },
  },
};
</script>
