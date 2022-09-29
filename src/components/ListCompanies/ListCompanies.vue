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

<script lang="ts" src="./script"></script>
