import { dataNewSelector } from "../Selector/selector";
import explainAfterBefore2014 from "./explain2014";
import ExplainStage from "./explainStage";
import "../index.css";
import { ExplainAverage } from "./explainAverage";
import { useSelector } from "react-redux";
import { Box } from "@mui/system";
import { Typography } from "@mui/material";
function Explain(props) {
  const {
    stage: { year, month },
  } = props;
  const listNewData = useSelector(dataNewSelector);
  const result2014 = explainAfterBefore2014(listNewData);
  const {
    before2014: { yearBefore, monthBefore },
    after2014: { yearAfter, monthAfter },
  } = result2014;
  const callbackF = (data) => {
    return props.data(data);
  };
  return (
    <Box
      sx={{
        marginTop: "20px",
        maxHeight: "300px",
        overflow: "auto",
        boxShadow: "0 1px 8px 0 rgb(0 0 0 / 16%)",
      }}
    >
      <Box sx={{ padding: "20px" }}>
        <Typography
          variant="h6"
          sx={{ fontWeight: "bold", marginBottom: "3px", color: "#4c2727" }}
        >
          Diễn giải cách tính BHXH 1 lần
        </Typography>
        <Box sx={{ paddingBottom: "5px" }}>
          <Box>
            Thời gian tham gia BHXH 1 lần:{" "}
            <Typography variant="span" className="text-data">
              {year} năm {month} tháng{" "}
            </Typography>
          </Box>
          <Box>
            Thời gian tham gia BHXH sau năm 2014:{" "}
            <Typography variant="span" className="text-data">
              {yearAfter} năm {monthAfter} tháng
            </Typography>
          </Box>
          <Box>
            Thời gian tham gia BHXH trước năm 2014:{" "}
            <Typography variant="span" className="text-data">
              {yearBefore} năm {monthBefore} tháng
            </Typography>
          </Box>
        </Box>
        <Box
          sx={{
            borderTop: "1px solid #ccc",
            borderBottom: "1px solid #ccc",
            padding: "5px 0",
          }}
        >
          <ExplainStage />
        </Box>
        <Box sx = {{paddingTop: "5px"}} >
          <ExplainAverage
            value={listNewData}
            data2014={result2014}
            totalMonths={props}
            result={callbackF}
          />
        </Box>
      </Box>
    </Box>
  );
}
export default Explain;
