import {
  Button,
  List,
  ListItem,
  Box,
  Typography,
  createTheme,
} from "@mui/material";
import { useDispatch } from "react-redux";
import { addItem, calculateItem } from "../Actions/actions";
import { dataSelector } from "../Selector/selector";
import { useSelector } from "react-redux";
import { useState } from "react";
import "../index";
import {
  WarningStateData,
  WarningData,
  WarningDataMaternity,
  WarningStageMaternity,
} from "../Notifycation/notifycation";
import {
  CheckDataFail,
  CheckStageYear,
  totalStage,
  checkStageMonth,
  CheckMaternity,
} from "../Calculate/Check";
import Explain from "../Explain/explain";
import { styled } from "@mui/material/styles";

const Root = styled("div")(({ theme }) => ({
  [theme.breakpoints.down("sm")]: {
    width: "100%",
  },
}));

function Buttons() {
  const [checkData, setCheckData] = useState();
  const [isOpenExplain, setOpenExplain] = useState();
  const [stageTotal, setStageTotal] = useState();
  const list = useSelector(dataSelector);
  const [openNotifyData, setOpenNotifyData] = useState(false);
  const [total, setTotal] = useState();
  const [checkTotal, setCheckTotal] = useState(false);
  const [openNotifyMaternity, setOpenNotifyMaternity] = useState(false);
  const [checkStageMaternity, setCheckStageMaternity] = useState(false);
  const dispatch = useDispatch();

  // custom component MUI

  // end
  const handleClickCheckStage = () => {
    setCheckStageMaternity(true);
  };
  const handleClickCloseCheckStage = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setCheckStageMaternity(false);
  };
  const handleClickNotifyData = () => {
    setOpenNotifyData(true);
  };
  const handleClickCloseNotifyData = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpenNotifyData(false);
  };
  const handleClickOpenNotifyMaternity = () => {
    setOpenNotifyMaternity(true);
  };
  const handleClickCloseNotifyDataMaternity = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpenNotifyMaternity(false);
  };
  const handleCalculate = (e) => {
    const result = CheckDataFail(list);
    const statusData = result.includes("error");
    if (statusData) {
      handleClickNotifyData();
    } else {
      const resultStageYear = CheckStageYear(list);
      const resultStageMonth = checkStageMonth(list);
      const resultStageMaternity = CheckMaternity(list);
      //console.log(resultStageMaternity);
      console.log(resultStageYear, resultStageMonth);
      if (!resultStageYear || !resultStageMonth || !resultStageMaternity) {
        if (!resultStageYear || !resultStageMonth) {
          handleClickNotifyData();
        } else if (!resultStageMaternity) {
          handleClickCheckStage();
        }
      } else {
        dispatch(
          calculateItem({
            list: list,
          })
        );
        const resultStageTotal = totalStage(list);
        setOpenExplain(true);
        setStageTotal(resultStageTotal);
      }
    }
    setCheckData(statusData);
  };
  const handleAdd = (e) => {
    dispatch(
      addItem({
        status: e.isTrusted,
        value: "normal",
      })
    );
  };
  const handleAddMaternity = (e) => {
    if (list[list.length - 1].options === "normal") {
      dispatch(
        addItem({
          status: e.isTrusted,
          value: "maternity",
        })
      );
    } else {
      handleClickOpenNotifyMaternity();
    }
  };
  const value = (data) => {
    setTimeout(() => {
      setTotal(data);
      setCheckTotal(true);
    }, 0);
  };
  return (
    <>
      <List>
        <Box
          sx={{ display: "flex" }}
          flexWrap={{ xs: "wrap", sm: "initial", lg: "initial", md: "initial" }}
        >
          <ListItem sx={{ justifyContent: "center" }}>
            <Root>
              <Button
                sx={{ width: "100%" }}
                onClick={handleAdd}
                variant="contained"
              >
                THÊM GIAI ĐOẠN{" "}
              </Button>
            </Root>
          </ListItem>
          <ListItem sx={{ justifyContent: "center" }}>
            <Root>
              <Button
                sx={{ width: "100%" }}
                onClick={handleAddMaternity}
                variant="outlined"
              >
                GIAI ĐOẠN THAI SẢN
              </Button>
            </Root>
          </ListItem>
          <ListItem color="success" sx={{ justifyContent: "center" }}>
            <Root>
              <Button
                onClick={handleCalculate}
                variant="contained"
                color="success"
                sx={{ width: "100%" }}
              >
                TÍNH BHXH
              </Button>
            </Root>
          </ListItem>
        </Box>
      </List>
      {checkTotal ? (
        <Box
          sx={{
            textAlign: "center",
            fontSize: "17px",
            margin: "20px 0",
            fontWeight: "500",
          }}
        >
          Tiền BHXH được nhận 1 lần là :{" "}
          <Typography className="text-data" variant="span">
            {total.toLocaleString("vi", { style: "currency", currency: "VND" })}
          </Typography>
        </Box>
      ) : null}
      {checkData ? (
        <WarningData open={openNotifyData} close={handleClickCloseNotifyData} />
      ) : (
        <WarningStateData
          open={openNotifyData}
          close={handleClickCloseNotifyData}
        />
      )}
      {checkStageMaternity ? (
        <WarningStageMaternity
          open={checkStageMaternity}
          close={handleClickCloseCheckStage}
        />
      ) : null}
      {openNotifyMaternity ? (
        <WarningDataMaternity
          open={openNotifyMaternity}
          close={handleClickCloseNotifyDataMaternity}
        />
      ) : null}
      {isOpenExplain ? <Explain stage={stageTotal} data={value} /> : null}
    </>
  );
}
export default Buttons;
