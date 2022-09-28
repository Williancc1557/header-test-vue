<template>
  <div class="table-container">
    <div class="buttons-container">
      <div class="navigation-buttons">
        <i class="fa fa-list" aria-hidden="true"></i>
        <font-awesome-icon icon="th-large" />
      </div>
      <div class="action-buttons">
        <font-awesome-icon icon="rotate-right" />
        <font-awesome-icon icon="trash" @click="del" />
      </div>
    </div>
    <EasyDataTable
      v-model:items-selected="itemsSelected"
      fixed-checkbox
      :headers="headers"
      :items="items"
      alternating
      hide-footer
      table-class-name="customize-table"
      :table-height="500"
    />
  </div>
</template>

<style src="./styles.css" scoped></style>

<script lang="ts">
/* eslint-disable @typescript-eslint/no-explicit-any */

import { ref } from "vue";
import type { Header, Item } from "vue3-easy-data-table";

interface Company {
  name: string;
  type: string;
  city: number;
  country: string;
  created: string;
  updated: number;
  owner: string;
  actions: string;
}

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
    async del() {
      const data = (this as any).itemsSelected as Array<any>;
      const object = (this as any).items as Company[];

      if (data.length == object.length) {
        return ((this as any).items = []);
      }

      data.forEach((value: any) => {
        const index = object.findIndex(
          (finded: Company) => finded.name == value.name
        );

        object.splice(index, 1);
      });

      (this as any).items = object;
      (this as any).itemsSelected = ref([]);
    },
  },
};
</script>
