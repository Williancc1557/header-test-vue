<template>
  <div class="table-container">
    <EasyDataTable
      v-model:items-selected="itemsSelected"
      fixed-checkbox
      show-index
      :headers="headers"
      :items="items"
      alternating
      hide-footer
      table-class-name="customize-table"
      table-height="500"
    />
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
      headers: [
        { text: "NAME", value: "name", fixed: true, width: 180 }, // set fixed to true
        { text: "TYPE", value: "type", fixed: true, width: 80 }, // set fixed to true
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
          name: "Stephen Curry",
          type: "GSW",
          city: 30,
          country: "G",
          created: "6-2",
          updated: 185,
          owner: "Davidson",
          actions: "USA",
        },
      ] as Item[],
      itemsSelected: ref([]),
    };
  },
};
/*
const deleteItem = () => {
  console.log(itemsSelected.value[0]["player"]);
}; */
</script>
