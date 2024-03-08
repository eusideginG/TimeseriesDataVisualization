<script setup>
import "bootstrap/dist/css/bootstrap.min.css";
import Chart from "./components/Chart.vue";
import ToolBar from "./components/toolBar/ToolBar.vue";
import DataTable from "./components/table/DataTable.vue";
import { dataStore } from "./services/state/state";


</script>

<template>
  <div id="appWrapper" class="flex items-center justify-center flex-col">
    <h1 class="m-2">ENTSOE Data</h1>
    <Chart :data-array="dataStore.getData" />
    <ToolBar /> 
    <DataTable :data-array="dataStore.getData" />
  </div>
</template>

<style scoped></style>
