import { dataNewSelector } from "../Selector/selector";
import { useSelector } from "react-redux";
import { Typography, Box } from "@mui/material";
import "../App.css";
function ExplainStage() {
  const listNewData = useSelector(dataNewSelector);
  console.log(listNewData);
  return (
    <>
      {listNewData.map((item, index) => (
        <Box key={index}>
          <Box>
            {item.yearNext > item.year ? (
              <>
                <Box>
                  Giai đoạn đóng bảo hiểm xã hội từ:{" "}
                  <Typography variant="span" className="text-data">
                    T{item.month} đến T12 năm {item.year}. Thời gian{" "}
                    {item.stageMonth} tháng
                  </Typography>{" "}
                </Box>
                <Box>
                  Mức tiền lương đóng bảo hiểm xã hội
                  <Typography variant="span" className="text-data">
                    {" "}
                    {item.money}
                  </Typography>
                </Box>
                <Box>
                  <Typography variant="span" className="text-data">
                    {item.money} x {item.inflationYear} x {item.stageMonth} ={" "}
                    {item.totalMonth.toLocaleString("vi", {
                      style: "currency",
                      currency: "VND",
                    })}
                  </Typography>
                </Box>
                {item.stageYear.map((value, index) => (
                  <Box key={index}>
                    <Box key={index}>
                      Giai đoạn đóng bảo hiểm xã hội từ:{" "}
                      <Typography className="text-data" variant="span">
                        T1 năm {value.value} đến T12 năm {value.value}. Thời
                        gian 12 tháng{" "}
                      </Typography>
                    </Box>
                    <Box>
                      Mức tiền lương đóng bảo hiểm xã hội:{" "}
                      <Typography className="text-data" variant="span">
                        {item.money.toLocaleString("vi", {
                          style: "currency",
                          currency: "VND",
                        })}
                      </Typography>
                    </Box>
                    <Box>
                      <Typography className="text-data" variant="span">
                        {value.money} x {value.inflationValue} x {value.month} ={" "}
                        {value.total.toLocaleString("vi", {
                          style: "currency",
                          currency: "VND",
                        })}
                      </Typography>
                    </Box>
                  </Box>
                ))}
                <Box>
                  {" "}
                  Giai đoạn đóng bảo hiểm xã hội từ:{" "}
                  <Typography className="text-data" variant="span">
                    T1 năm {item.yearNext} đến T{item.monthNext} năm{" "}
                    {item.yearNext}. Thời gian {item.monthNext} tháng
                  </Typography>
                </Box>
                <Box>
                  Mức tiền lương đóng bảo hiểm xã hội:{" "}
                  <Typography className="text-data" variant="span">
                    {item.money}
                  </Typography>
                </Box>
                <Box variant="span">
                  <Typography variant="span" className="text-data">
                    {item.money} x {item.inflationYearNext} x {item.monthNext} ={" "}
                    {item.totalMonthNext.toLocaleString("vi", {
                      style: "currency",
                      currency: "VND",
                    })}
                  </Typography>
                </Box>
              </>
            ) : (
              <>
                <Box>
                  {" "}
                  Giai đoạn đóng bảo hiểm xã hội từ:{" "}
                  <Typography className="text-data" variant="span">
                    T{item.month} đến T{item.monthNext} năm {item.year}. Thời
                    gian {item.stageMonth} tháng .
                  </Typography>
                  <Box>
                    Mức tiền lương đóng bảo hiểm xã hội:{" "}
                    <Typography className="text-data" variant="span">
                      {item.money}
                    </Typography>
                  </Box>
                </Box>
                <Box>
                  <Typography className="text-data" variant="span">
                    {item.money} x {item.iflation} x {item.stageMonth} ={" "}
                    {item.total.toLocaleString("vi", {
                      style: "currency",
                      currency: "VND",
                    })}
                  </Typography>
                </Box>
              </>
            )}
          </Box>
        </Box>
      ))}
    </>
  );
}
export default ExplainStage;
