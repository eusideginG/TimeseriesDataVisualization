import { reactive } from "vue";
import { getData } from "../fetchData";

// state of the data
export const dataStore = reactive({
  getData: getData(),
  filterData(from, to) {
    this.getData = getData(from, to);
  },
});

// state of the filter actions
export const toggleDataStore = reactive({
  isTableActive: false,
  isDeActive: true,
  isGrActive: true,
  isFrActive: true,
  toggleTable() {
    this.isTableActive = !this.isTableActive;
  },
  toggleDe() {
    this.isDeActive = !this.isDeActive;
  },
  toggleGr() {
    this.isGrActive = !this.isGrActive;
  },
  toggleFr() {
    this.isFrActive = !this.isFrActive;
  },
});
