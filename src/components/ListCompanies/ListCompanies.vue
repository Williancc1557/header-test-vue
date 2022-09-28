<template>
  <div class="table-container">
    <div class="buttons-container">
      <div class="navigation-buttons">
        <i></i>
      </div>
      <div class="action-buttons"></div>
    </div>
    <EasyDataTable
      v-model:items-selected="itemsSelected"
      fixed-checkbox
      show-index
      :headers="headers"
      :items="items"
      alternating
      hide-footer
      table-class-name="customize-table"
      :table-height="500"
    />
    <button @click="test">aaaaa</button>
  </div>
</template>

<style src="./styles.css" scoped></style>

<script lang="ts">
import { ref } from "vue";
import type { Header, Item } from "vue3-easy-data-table";

export default {
  name: "ListCompanies",
  data() {
    return {
      itemsSelected: ref([]),
      headers: [
        { text: "NAME", value: "name", width: 180 }, // set fixed to true
        { text: "TYPE", value: "type", width: 80 }, // set fixed to true
        { text: "CITY", value: "city", width: 80 },
        { text: "COUNTRY", value: "country", width: 100 },
        { text: "CREATED AT", value: "created", width: 80 },
        { text: "UPDATED AT", value: "updated", width: 80 },
        { text: "OWNER", value: "owner", width: 80 },
        { text: "ACTIONS", value: "actions", width: 80 },
      ] as Header[],
      items: [
        {
          name: "Stephen Curry",
          type: "GSW",
          city: 30,
          country: "G",
          created: "6-2",
          updated: 185,
          owner: "Davidson",
          actions: "USA",
        },
        {
          name: "claudia",
          type: "GSW",
          city: 30,
          country: "G",
          created: "6-2",
          updated: 185,
          owner: "Davidson",
          actions: "USA",
        },
        {
          name: "willian",
          type: "GSW",
          city: 30,
          country: "G",
          created: "6-2",
          updated: 185,
          owner: "Davidson",
          actions: "USA",
        },
        {
          name: "rita",
          type: "GSW",
          city: 30,
          country: "G",
          created: "6-2",
          updated: 185,
          owner: "Davidson",
          actions: "USA",
        },
        {
          name: "meta",
          type: "GSW",
          city: 30,
          country: "G",
          created: "6-2",
          updated: 185,
          owner: "Davidson",
          actions: "USA",
        },
        {
          name: "discord",
          type: "GSW",
          city: 30,
          country: "G",
          created: "6-2",
          updated: 185,
          owner: "Davidson",
          actions: "USA",
        },
        {
          name: "Header",
          type: "GSW",
          city: 30,
          country: "G",
          created: "6-2",
          updated: 185,
          owner: "Davidson",
          actions: "USA",
        },
        {
          name: "B2U",
          type: "GSW",
          city: 30,
          country: "G",
          created: "6-2",
          updated: 185,
          owner: "Davidson",
          actions: "USA",
        },
        {
          name: "Jala",
          type: "GSW",
          city: 30,
          country: "G",
          created: "6-2",
          updated: 185,
          owner: "Davidson",
          actions: "USA",
        },
      ] as Item[],
    };
  },
  methods: {
    test() {
      console.log((this as any).itemsSelected);
    },
  },
};
</script>
