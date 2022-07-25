import { Typography, Box } from "@mui/material";
import "../index.css";
function ExplainAverage(props) {
  let totalAverage = 0;
  let totalMonths = 0;
  let avenrageTotal = 0;
  let totalBefore2014 = 0;
  let totalAfter2014 = 0;
  let total = 0;
  let total2 = 0;
  const {
    totalMonths: {
      stage: { year, month },
    },
    data2014: {
      after2014: { yearAfter, monthAfter },
      before2014: { yearBefore, monthBefore },
      resultAfter2014,
    },
  } = props;
  const avenrage2014 = yearAfter + resultAfter2014;
  props.value.map((item) => {
    const { totalMonth, totalMonthNext } = item;
    totalMonths = year * 12 + month;
    if (totalMonths >= 12) {
      totalAverage += totalMonth;
      totalAverage += totalMonthNext;
      item.stageYear.map((item) => {
        totalAverage += item.total;
      });
      avenrageTotal = totalAverage / totalMonths;
      totalBefore2014 = avenrageTotal * yearBefore * 1.5;
      totalAfter2014 = avenrageTotal * avenrage2014 * 2;
      total = totalBefore2014 + totalAfter2014;
    } else {
      totalAverage += item.total;
      avenrageTotal = totalAverage / totalMonths;
      total2 = (22 / 100) * totalAverage;
    }
  });
  const sendTotal = () => {
    totalMonths >= 12 ? props.result(total) : props.result(total2);
  };
  sendTotal();
  return (
    <>
      <Box>
        Tổng tiền đóng BHXH là :{" "}
        <Typography variant="span" className="text-data">
          {totalAverage.toLocaleString('vi', {style : 'currency', currency : 'VND'})}
        </Typography>
      </Box>
      <Box>
        Mức bình quân tiền lương đóng bảo hiểm xã hội:{" "}
        <Typography variant="span" className="text-data">
          {avenrageTotal.toLocaleString('vi', {style : 'currency', currency : 'VND'})}
        </Typography>
      </Box>
      {totalMonths >= 12 ? (
        (monthAfter === 0 && monthBefore) !== 0 ||
        (monthAfter !== 0 && monthBefore !== 0) ? (
          <>
            <Box>
              Mức hưởng BHXH 1 lần đối với thời gian đóng BHXH trước 2014:{" "}
              <Typography variant="span" className="text-data">
                {avenrageTotal.toLocaleString('vi', {style : 'currency', currency : 'VND'})} x {yearBefore} x 1.5 ={" "}
                {totalBefore2014.toLocaleString('vi', {style : 'currency', currency : 'VND'})}
              </Typography>
            </Box>
            <Box>
              Mức hưởng BHXH 1 lần đối với thời gian đóng BHXH sau 2014:{" "}
              <Typography variant="span" className="text-data">
                {avenrageTotal.toLocaleString('vi', {style : 'currency', currency : 'VND'})} x {avenrage2014} x 2 ={" "}
                {totalAfter2014.toLocaleString('vi', {style : 'currency', currency : 'VND'})}
              </Typography>
            </Box>
          </>
        ) : monthAfter !== 0 && monthBefore === 0 ? (
          <Box>
            Mức hưởng BHXH 1 lần đối với thời gian đóng BHXH từ 2014 trở đi:
            <Typography variant="span" className="text-data">
              {avenrageTotal.toLocaleString('vi', {style : 'currency', currency : 'VND'})} x {avenrage2014} x 2 ={" "}
              {totalAfter2014.toLocaleString('vi', {style : 'currency', currency : 'VND'})}
            </Typography>
          </Box>
        ) : null
      ) : null}
      <Box
        sx={{
          textAlign: "center",
          fontSize: "17px",
          margin: "20px 0",
          fontWeight: "500",
        }}
      >
        Tổng tiền BHXH được nhận:{" "}
        <Typography variant="span" className="text-data">
          {totalMonths >= 12 ?  total.toLocaleString('vi', {style : 'currency', currency : 'VND'}) : total2.toLocaleString('vi', {style : 'currency', currency : 'VND'}) }
        </Typography>
      </Box>
    </>
  );
}
export { ExplainAverage };
