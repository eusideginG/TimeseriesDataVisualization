<script setup>
import dash from "../../assets/dash.svg";
import arrowDown from "../../assets/arrow-down.svg";
import { toggleDataStore } from "../../services/state/state";

</script>

<!-- a toggle button for opening and closing the table -->
<template>
  <div
    class="btn-light btn w-fit flex justify-center items-center flex-row p-1 cursor-pointer border-solid border-2 border-dark min-w-32"
    @click="toggleDataStore.toggleTable()"
  >
    <p v-if="toggleDataStore.isTableActive" class="font-bold m-0 text-sm">Hide table</p>
    <p v-else class="font-bold m-0 text-sm">Show table</p>
    <img v-if="toggleDataStore.isTableActive" class="w-5 h-6 mx-1" :src="dash" alt="Minimize" />
    <img v-else class="w-5 h-6 mx-1" :src="arrowDown" alt="Expand" />
  </div>
</template>

<style scoped>
</style>
