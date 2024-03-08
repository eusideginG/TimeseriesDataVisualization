<script setup>
import { toggleDataStore } from "../../services/state/state";
import { dmyFormat, hmFormat } from "../../services/tools/dateTimeFormater";

/**
 * a property holding the table data
 * dataArray: []
 */
const props = defineProps({
  dataArray: Array,
});
</script>

<template>
  <div class="w-full flex flex-col justify-center p-0 tableWrapper">
    <table
      v-if="toggleDataStore.isTableActive"
      class="table table-striped table-bordered border table-hover rounded self-center w-full"
    >
      <thead>
        <tr>
          <!-- formatting and displaying the table header -->
          <th
            v-for="(key, i) in Object.keys(props.dataArray[0])"
            :key="i"
            class="th"
          >
            <p v-if="key === 'DateTime'">
              {{ key.replaceAll("_", " ") }}
            </p>
            <p
              v-else-if="
                key === 'ENTSOE_DE_DAM_Price' && toggleDataStore.isDeActive
              "
            >
              {{ key.replaceAll("_", " ") }}
            </p>
            <p
              v-else-if="
                key === 'ENTSOE_GR_DAM_Price' && toggleDataStore.isGrActive
              "
            >
              {{ key.replaceAll("_", " ") }}
            </p>
            <p
              v-else-if="
                key === 'ENTSOE_FR_DAM_Price' && toggleDataStore.isFrActive
              "
            >
              {{ key.replaceAll("_", " ") }}
            </p>
          </th>
        </tr>
      </thead>
      <tbody>
        <!-- formatting and displaying the data of the table -->
        <tr v-for="(item, i) in props.dataArray" :key="i">
          <td v-for="(value, key) in item" class="td">
            <span
              v-if="key === 'DateTime'"
              class="flex flex-col justify-center items-center"
            >
              <p>
                {{ dmyFormat(value) }}
              </p>
              <p>
                {{ hmFormat(value) }}
              </p>
            </span>
            <span
              v-else-if="
                key === 'ENTSOE_DE_DAM_Price' && toggleDataStore.isDeActive
              "
            >
              {{ value }}
            </span>
            <span
              v-else-if="
                key === 'ENTSOE_GR_DAM_Price' && toggleDataStore.isGrActive
              "
            >
              {{ value }}
            </span>
            <span
              v-else-if="
                key === 'ENTSOE_FR_DAM_Price' && toggleDataStore.isFrActive
              "
            >
              {{ value }}
            </span>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style scoped>
.tableWrapper {
  width: 95%;
  padding: 0.5rem;
}

.td,
.th {
  vertical-align: middle;
  text-align: center;
}
</style>
