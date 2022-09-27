<template>
  <div>
    <PageHeader @click="updateSection" />
    <ListCompanies />
  </div>
</template>

<script lang="ts">
/* eslint-disable @typescript-eslint/no-explicit-any */
import PageHeader from "@/components/PageHeader/PageHeader.vue";
import router from "../router/";
import ListCompanies from "../components/ListCompanies/ListCompanies.vue";

export default {
  name: "HomeView",
  components: {
    PageHeader,
    ListCompanies,
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
