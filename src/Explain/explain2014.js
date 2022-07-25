import { Typography } from "@mui/material";

function explainAfterBefore2014(props) {
  let resultStage = {
    before2014: {
      yearBefore: 0,
      monthBefore: 0,
    },
    after2014: {
      yearAfter: 0,
      monthAfter: 0,
    },
    resultAfter2014: 0,
  };
  let {
    before2014: { yearBefore, monthBefore },
    after2014: { yearAfter, monthAfter },
  } = resultStage;
  props.map((item) => {
    const { yearNext, year, stageMonth, valueUnlineYear, monthNext } = item;
    if (yearNext === year) {
      if (item.valueEqual2014) {
        resultStage = {
          ...resultStage,
          before2014: {
            yearBefore: 0,
            monthBefore: (monthBefore += stageMonth),
          },
        };
      } else {
        resultStage = {
          ...resultStage,
          after2014: {
            yearAfter: 0,
            monthAfter: (monthAfter += stageMonth),
          },
        };
      }
    } else if (yearNext > year) {
      if (valueUnlineYear) {
        resultStage = {
          ...resultStage,
          before2014: {
            yearBefore: 0,
            monthBefore: (monthBefore += stageMonth),
          },
        };
      } else {
        resultStage = {
          ...resultStage,
          after2014: {
            yearAfter: 0,
            monthAfter: (monthAfter += stageMonth),
          },
        };
      }
      if (item.valueUnlineYearNext) {
        resultStage = {
          ...resultStage,
          before2014: {
            yearBefore: 0,
            monthBefore: (monthBefore += monthNext),
          },
        };
      } else {
        resultStage = {
          ...resultStage,
          after2014: {
            yearAfter: 0,
            monthAfter: (monthAfter += monthNext),
          },
        };
      }
      item.stageYear.map((item) => {
        if (item.value < 2014) {
          resultStage = {
            ...resultStage,
            before2014: {
              yearBefore: 0,
              monthBefore: (monthBefore += 12),
            },
          };
        } else {
          resultStage = {
            ...resultStage,
            after2014: {
              yearAfter: 0,
              monthAfter: (monthAfter += 12),
            },
          };
        }
      });
    }
  });

  while (monthBefore >= 12) {
    resultStage = {
      ...resultStage,
      before2014: {
        yearBefore: (yearBefore += 1),
        monthBefore: (monthBefore -= 12),
      },
    };
  }
  while (monthAfter >= 12) {
    resultStage = {
      ...resultStage,
      after2014: {
        yearAfter: (yearAfter += 1),
        monthAfter: (monthAfter -= 12),
      },
    };
  }
  // case cả hai tháng trước và sau 2014 đều khác nhau
  const data = average2014(resultStage);
  return data;
}
function average2014(data) {
  const {
    before2014: { monthBefore },
    after2014: { monthAfter },
  } = data;
  if (monthAfter !== 0 && monthBefore !== 0) {
    let totalMonthStage = monthAfter + monthBefore;
    if (totalMonthStage >= 1 && totalMonthStage <= 6) {
      data = {
        ...data,
        resultAfter2014: 0.5,
      };
    } else {
      if (totalMonthStage >= 12) {
        let balanceMonth = totalMonthStage - 12;
        if (balanceMonth >= 1 && balanceMonth <= 6) {
          // 9 8
          data = {
            ...data,
            resultAfter2014: 1 + 0.5,
          };
        } else {
          data = {
            ...data,
            resultAfter2014: 1 + 1,
          };
        }
      } else {
        data = {
          ...data,
          resultAfter2014: 1,
        };
      }
    }
  }
  if (monthAfter === 0 && monthBefore !== 0) {
    if (monthBefore >= 1 && monthBefore <= 6) {
      data = {
        ...data,
        resultAfter2014: 0.5,
      };
    } else {
      data = {
        ...data,
        resultAfter2014: 1,
      };
    }
  }
  if (monthAfter !== 0 && monthBefore === 0) {
    if (monthAfter >= 1 && monthAfter <= 6) {
      data = {
        ...data,
        resultAfter2014: 0.5,
      };
    } else {
      data = {
        ...data,
        resultAfter2014: 1,
      };
    }
  }
  return data;
}
export default explainAfterBefore2014;
