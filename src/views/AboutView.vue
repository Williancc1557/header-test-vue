<template>
  <div class="about">
    <button @click="changeShowModal">aaa</button>
    <NewTablePop :showModalProp="showModal" ref="newTable" />
  </div>
</template>

<script lang="ts">
import NewTablePop from "../components/NewTablePop/NewTablePop.vue";
export default {
  name: "AboutView",
  data() {
    return {
      showModal: false,
    };
  },
  methods: {
    changeShowModal() {
      (this as any).$refs.newTable.changeShowModal();
    },
  },
  components: { NewTablePop },
};
</script>
