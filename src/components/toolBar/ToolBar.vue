<script setup>
import { getData } from "../../services/fetchData";
import Slider from "primevue/slider";
import { dataStore } from "../../services/state/state";
import { ref } from "vue";
import ButtonTableToggle from "../toolBar/ButtonTableToggle.vue";
import { dmyFormat } from "../../services/tools/dateTimeFormater";


const sliderMin = 0; // slider's min value
const sliderMax = getData().length - 1; // slider's max value

const rangeValues = ref([sliderMin, sliderMax]); // reactive array of the slider model-value

/**
 * params: val {array}
 * handles slider thumb position and filters the data for the chart and table
 */
const onSliderValueChange = (val) => {
  if (val[0] < val[1]) {
    rangeValues.value[0] = val[0];
    rangeValues.value[1] = val[1];

    dataStore.filterData(rangeValues.value[0], rangeValues.value[1]);
  }
};
</script>

<template>
  <div class="toolWrapper flex justify-between mb-2">
    <!-- a slider with a legend displaying it's values -->
    <div class="self-start">
      <span>
        {{ dmyFormat(dataStore.getData[0].DateTime) }} -
        {{ dmyFormat(dataStore.getData[dataStore.getData.length - 1].DateTime) }}
      </span>
      <Slider
        :min="sliderMin"
        :max="sliderMax"
        :step="24"
        v-on:change="onSliderValueChange"
        :model-value="rangeValues"
        range
        class="slider w-40 mt-2 ms-2"
        :pt="{
          range: $style.slider
        }"
      />
    </div>
    <ButtonTableToggle />
  </div>
</template>

<style scoped>
.toolWrapper {
  width: 95%;
  padding: 0.5rem;
}
</style>

<style module>
.slider {
  padding: .2rem;
  background-color: var(--sec-color-light);
}
</style>
