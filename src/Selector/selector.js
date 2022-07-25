import { createSelector } from "reselect";
import inflation from "../Calculate/Inflation";
const addItemSelector = (state) => state.listData;
const dataNewCalculate = (state) => state.dataNew;
const dataSelector = createSelector(addItemSelector, (addItem) => {
  return addItem;
});
const dataNewSelector = createSelector(dataNewCalculate, (calculate) => {
  let result = [];
  calculate.list.map((item, index) => {
    let rangerStage = [];
    for (
      let value = item.dataNew[0].year + 1;
      value < item.dataNew[0].yearNext;
      value++
    ) {
      let inflationValue = value < 1995 ? 5.1 : inflation[value];
      rangerStage.push({
        month: 12,
        value: value,
        inflationValue: inflationValue,
        money: item.dataNew[0].money.toLocaleString('vi', {style : 'currency', currency : 'VND'}),
        total: 12 * inflationValue * item.dataNew[0].money,
      });
    }
    if (item.dataNew[0].yearNext > item.dataNew[0].year) {
      // console.log(item.dataNew[0].yearNext,item.dataNew[0].year)
      let inflationYear =
        item.dataNew[0].year < 1995 ? 5.1 : inflation[item.dataNew[0].year];
      let inflationYearNext =
        item.dataNew[0].yearNext < 1995
          ? 5.1
          : inflation[item.dataNew[0].yearNext];
      result = [
        ...result,
        {
          month: item.dataNew[0].month,
          monthNext: item.dataNew[0].monthNext,
          year: item.dataNew[0].year,
          yearNext: item.dataNew[0].yearNext,
          stageMonth: 12 - item.dataNew[0].month + 1,
          stageYear: rangerStage,
          inflationYear: inflationYear,
          inflationYearNext: inflationYearNext,
          options: item.options,
          valueUnlineYear: item.dataNew[0].year < 2014 ? true : false,
          valueUnlineYearNext: item.dataNew[0].yearNext < 2014 ? true : false,
          money:
            item.options === "maternity"
              ? calculate.list[index - 1].dataNew[0].money.toLocaleString('vi', {style : 'currency', currency : 'VND'})
              : (item.dataNew[0].money * 1).toLocaleString('vi', {style : 'currency', currency : 'VND'}),
          totalMonth:
            item.options === "maternity"
              ? calculate.list[index - 1].dataNew[0].money *
                1 *
                inflationYear *
                (12 - item.dataNew[0].month + 1)
              : item.dataNew[0].money *
                1 *
                inflationYear *
                (12 - item.dataNew[0].month + 1),
          totalMonthNext:
            item.options === "maternity"
              ? calculate.list[index - 1].dataNew[0].money *
                1 *
                inflationYearNext *
                item.dataNew[0].monthNext
              : item.dataNew[0].money *
                inflationYearNext *
                item.dataNew[0].monthNext,
        },
      ];
    } else if (item.dataNew[0].yearNext === item.dataNew[0].year) {
      //console.log(item.dataNew[0].yearNext,item.dataNew[0].year)
      let yearNext = item.dataNew[0].yearNext;
      let inflationValue =
        item.dataNew[0].year < 1995 ? 5.1 : inflation[item.dataNew[0].year];
      result = [
        ...result,
        {
          month: item.dataNew[0].month,
          monthNext: item.dataNew[0].monthNext,
          year: item.dataNew[0].year,
          yearNext: yearNext,
          stageYear: [],
          options: item.options,
          money:
            item.options === "maternity"
              ? String(calculate.list[index - 1].dataNew[0].money).toLocaleString()
              : (item.dataNew[0].money * 1).toLocaleString('vi', {style : 'currency', currency : 'VND'}),
          stageMonth: item.dataNew[0].monthNext - item.dataNew[0].month + 1,
          iflation: inflationValue,
          totalMonth: null,
          totalMonthNext: null,
          valueEqual2014: yearNext < 2014 ? true : false,
          total:
            item.options === "maternity"
              ? calculate.list[index - 1].dataNew[0].money *
                1 *
                inflationValue *
                (item.dataNew[0].monthNext - item.dataNew[0].month + 1)
              : item.dataNew[0].money *
                1 *
                inflationValue *
                (item.dataNew[0].monthNext - item.dataNew[0].month + 1),
        },
      ];
    }
  });
  return result;
});
export { dataSelector, dataNewSelector };
