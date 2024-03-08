import data from "../../data/timeseries.json";

// data fetching from api, db or locally

/**
 * 
 * @param {number} from "from" for data filtering
 * @param {number} to "to" for data filtering
 * @returns if: no filters are applied returns all the data, esle: filtered data
 */
export function getData(
  from = 0,
  to = data.length - 1
) {

  // copy data and convert DateTime to Date obj
  const dateTimeData = data.map((v) => {
    return {
      DateTime: new Date(v.DateTime),
      ENTSOE_DE_DAM_Price: v.ENTSOE_DE_DAM_Price,
      ENTSOE_GR_DAM_Price: v.ENTSOE_GR_DAM_Price,
      ENTSOE_FR_DAM_Price: v.ENTSOE_FR_DAM_Price,
    };
  });

  
  return dateTimeData.slice(from, to + 1);
}
