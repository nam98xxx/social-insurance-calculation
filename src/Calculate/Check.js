function CheckDataFail(datas) {
  const result = datas.map((item, index) => {
    const { month, year, monthNext, yearNext, money } = item.dataNew[0];
    if ((month && year && monthNext && yearNext && money) === "") {
      return "error";
    } else {
      return "success";
    }
  });
  return result;
}
function CheckMaternity(datas) {
  let kq = true;
  for (let i = 0; i < datas.length; i++) {
    const { options } = datas[i];
    if(options === "maternity") {
      const { month, monthNext, year, yearNext } = datas[i].dataNew[0];
      const checkYear = yearNext - year;
      const totalMonth = 12 - month  +  1;
      const checkMonth = totalMonth + monthNext;
      if(yearNext !== year) {
        if(checkYear > 1 || checkMonth > 6 || checkMonth < 4 ) {
          kq = false;
          return kq;
        } else {
          kq = true;
        }
      } else {
        if(checkMonth < 4 ) {
          kq = false;
          return kq;
        } else {
          kq = true;
        }
      }
    }
  }
  return kq;
}

function CheckStageYear(datas) {
  let check = -1;
  let kq;
  for (let i = 0; i < datas.length; i++) {
    const { year, yearNext } = datas[i].dataNew[0];
    if (year >= check) {
      if (yearNext >= year) {
        check = yearNext;
        kq = true;
      } else {
        kq = false;
        return kq;
      }
    } else {
      kq = false;
      return kq;
    }
  }
  return kq;
}
function checkStageMonth(datas) {
  let kq;
  let value = -1;
  let check = true;
  for (let i = 0; i < datas.length; i++) {
    const { year, yearNext, month, monthNext } = datas[i].dataNew[0];
    if (year === yearNext) {
      if (check) {
        if (monthNext > month) {
          if (month > value) {
            value = monthNext;
            kq = true;
          } else {
            kq = false;
            return kq;
          }
        } else {
          kq = false;
          return kq;
        }
      } else {
        if (year === datas[i - 1].dataNew[0].yearNext) {
          if (month <= datas[i - 1].dataNew[0].monthNext) {
            kq = false;
            return kq;
          } else {
            kq = true;
          }
        }
        if (monthNext > month) {
          kq = true;
        } else {
          kq = false;
          return kq;
        }
      }
    } else if (year !== yearNext) {
      check = false;
      if (datas.length > 1 && i >= 1) {
        if (year === datas[i - 1].dataNew[0].yearNext) {
          if (month <= datas[i - 1].dataNew[0].monthNext) {
            kq = false;
            return kq;
          } else {
            kq = true;
          }
        }
      } else {
        kq = true;
      }
    }
  }
  return kq;
}
function totalStage(datas) {
  const allDateofYear = 12;
  const stage = {
    year: 0,
    month: 0,
  };
  datas.map((item) => {
    const { yearNext, year, month, monthNext } = item.dataNew[0];
    if (yearNext === year) {
      stage.month += monthNext - month + 1;
      if (stage.month === allDateofYear) {
        stage.year += 1;
        stage.month = 0;
      }
    }
    if (yearNext !== year) {
      stage.month += allDateofYear - month + 1;
      stage.month += monthNext;
      stage.year += yearNext - year - 1;
    }
    while (stage.month >= allDateofYear) {
      stage.year++;
      stage.month -= allDateofYear;
    }
  });
  return stage;
}

export { CheckDataFail, CheckStageYear, totalStage, checkStageMonth, CheckMaternity };
