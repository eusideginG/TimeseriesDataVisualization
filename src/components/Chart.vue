<script setup>
import Chart from "chart.js/auto";
import { onMounted, onUpdated } from "vue";
import { toggleDataStore } from "../services/state/state";
import "bootstrap";
import { dmyFormat, hmFormat } from "../services/tools/dateTimeFormater";

/**
 * a prop used to populate the chart
 * dataArray: []
 */
const props = defineProps({ dataArray: Array });

// chart declaration
let chart;

/**
 * handles the legend hover action
 */
const handleLegendHover = (evt, item, legend) => {
  document.body.style.cursor = "pointer";
};

/**
 * handles the legend leave action
 */
const handleLegendLeave = (evt, item, legend) => {
  document.body.style.cursor = "default";
};

/**
 * handles the legend click action
 */
const handleLegendClick = (evt, item, legend) => {
  // default legend click function
  const index = item.datasetIndex;
  chart.isDatasetVisible(index) ? chart.hide(index) : chart.show(index);

  // toggles the store values
  switch (index) {
    case 0:
      toggleDataStore.toggleDe();
      break;
    case 1:
      toggleDataStore.toggleGr();
      break;
    case 2:
      toggleDataStore.toggleFr();
      break;
    default:
      break;
  }
};

/**
 * triggers when an update happens
 */
onUpdated(() => {
  // re assigns the chart labels
  chart.config.data.labels = props.dataArray.map(
    (entry) => `${dmyFormat(entry.DateTime)} ${hmFormat(entry.DateTime)}`
  );

  // re assigns the chart datasets
  chart.config.data.datasets = [
    {
      label: "ENTSOE DE DAM Price",
      data: props.dataArray.map((entry) => entry.ENTSOE_DE_DAM_Price),
      borderWidth: 1,
    },
    {
      label: "ENTSOE GR DAM Price",
      data: props.dataArray.map((entry) => entry.ENTSOE_GR_DAM_Price),
      borderWidth: 1,
    },
    {
      label: "ENTSOE FR DAM Price",
      data: props.dataArray.map((entry) => entry.ENTSOE_FR_DAM_Price),
      borderWidth: 1,
    },
  ];

  // disables the animation to prevent wrong data display
  chart.options.animation = false;

  chart.update(); // updates the chart

  // hides - displays the datasets based on previous state
  toggleDataStore.isDeActive ? chart.show(0) : chart.hide(0);
  toggleDataStore.isGrActive ? chart.show(1) : chart.hide(1);
  toggleDataStore.isFrActive ? chart.show(2) : chart.hide(2);

  // re enables the animation
  chart.options.animation = true;
});

// runs after the component has been mounted 
onMounted(() => {
  /**
   * chart assignment
   * 1st param: HTMLElement to mount the chart
   * 2nd param: object{
   * type: type of the chart,
   * data: chart data,
   * options: chart option and customization
   * }
   */
  chart = new Chart(document.getElementById("chart"), {
    type: "line",
    data: {
      labels: props.dataArray.map(
        (entry) => `${dmyFormat(entry.DateTime)} ${hmFormat(entry.DateTime)}`
      ),
      datasets: [
        {
          label: "ENTSOE DE DAM Price",
          data: props.dataArray.map((entry) => entry.ENTSOE_DE_DAM_Price),
          borderWidth: 1,
        },
        {
          label: "ENTSOE GR DAM Price",
          data: props.dataArray.map((entry) => entry.ENTSOE_GR_DAM_Price),
          borderWidth: 1,
        },
        {
          label: "ENTSOE FR DAM Price",
          data: props.dataArray.map((entry) => entry.ENTSOE_FR_DAM_Price),
          borderWidth: 1,
        },
      ],
    },
    options: {
      maintainAspectRatio: false,
      plugins: {
        title: {
          display: true,
          text: `ENTSOE prices per hour line chart (${props.dataArray[0].DateTime.getDate()}/${props.dataArray[0].DateTime.getMonth()}/${props.dataArray[0].DateTime.getFullYear()} - ${props.dataArray[props.dataArray.length - 1].DateTime.getDate()}/${props.dataArray[props.dataArray.length - 1].DateTime.getMonth()}/${props.dataArray[props.dataArray.length - 1].DateTime.getFullYear()})`,
        },
        legend: {
          onHover: handleLegendHover,
          onLeave: handleLegendLeave,
          onClick: handleLegendClick,
        },
      },
      scales: {
        x: {
          title: {
            display: true,
            text: "Date - Time",
            align: "start",
            font: {
              size: 14,
            },
          },
          ticks: {
            maxTicksLimit: props.dataArray.length / 24,
          },
        },
        y: {
          title: {
            display: true,
            text: "Price",
            font: {
              size: 14,
            },
          },
        },
      },
    },
  });
});
</script>

<template>
  <div class="canvasWrapper mb-2 flex items-center justify-center rounded-md">
    <canvas id="chart" class="border border-dark"></canvas>
  </div>
</template>

<style scoped>
.canvasWrapper {
  width: 95%;
  height: 35rem;
  padding: 0.5rem;
  background-color: var(--sec-color-light);
}

canvas {
  border-radius: 0.5rem;
  padding: 1%;
}
</style>
