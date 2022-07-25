import { Button, FormControl, Select, Typography } from "@mui/material";
import { useSelector } from "react-redux";
import { dataSelector } from "../Selector/selector";
import { MenuItem } from "@mui/material";
import { InputLabel, Box, TextField } from "@mui/material";
import { data, deleteItem } from "../Actions/actions";
import months from "./dataMonths";
import dataYear from "./dataYears";
import { useDispatch } from "react-redux";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";

function ListData() {
  const list = useSelector(dataSelector);
  const dispatch = useDispatch();
  const handleChangeMonths = (e, index) => {
    dispatch(
      data({
        id: index,
        dataMonth: e.target.value,
        checkMonth: "month",
      })
    );
  };
  const handleChangeYear = (e, index) => {
    dispatch(
      data({
        id: index,
        dataYear: e.target.value,
        checkYear: "year",
      })
    );
  };
  const handleChangeMonthNext = (e, index) => {
    dispatch(
      data({
        id: index,
        dataMonthNext: e.target.value,
        checkMonthNext: "monthnext",
      })
    );
  };
  const handleChangeYearNext = (e, index) => {
    dispatch(
      data({
        id: index,
        dataYearNext: e.target.value,
        checkYearNext: "yeartnext",
      })
    );
  };
  const handleChangeMoney = (e, index) => {
    let priceText = e.target.value;
    const isNegative = priceText.indexOf("-") === 0; // get element default 0
    priceText = priceText.substr(Number(isNegative)).replace(/\D/g, ""); // remove dau phay
    dispatch(
      data({
        id: index,
        dataMoney: priceText,
        checkMoney: "money",
      })
    );
  };
  const handleDeleteItem = (id) => {
    dispatch(deleteItem(id));
  };
  return (
    <Box sx={{ paddingTop: "75px" }}>
      {list.map((item, index) => (
        <Box
          key={index}
          sx={{
            display: "flex",
            flexWrap: "wrap",
            paddingBottom: "10px",
            justifyContent: "space-between"
          }}
        >
          <Box sx={{ display: "flex", flexWrap: "wrap" }} paddingBottom = {{ xs: "25px", sm: "0px", md: "0px", lg: "0px" }} >
            <Box sx = {{ display: "flex" }} width = {{ xs: "100%", sm: "50%", md: "50%", lg: "50%"}} justifyContent = {{ xs : "space-evenly" }} paddingBottom = {{ xs: "15px", sm: "0px", md: "0px", lg: "0px"}}  >
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <Box sx={{ padding: "0px 20px" }}>
                  <Typography>Từ</Typography>
                </Box>
              </Box>
              <Box sx={{ width: 100,}} paddingRight = {{ xs: "0px", sm:"10px", md : "10px", lg: "10px" }}  >
                <FormControl fullWidth key={index}>
                  <InputLabel id="demo-simple-select-label">Tháng</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    label="Tháng"
                    defaultValue=""
                    onChange={(e) => handleChangeMonths(e, index)}
                  >
                    {months.map((item, index) => (
                      <MenuItem key={index} value={item}>
                        {item}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Box>
              <Box sx={{ width: 100 }}>
                <FormControl fullWidth key={index}>
                  <InputLabel id="demo-simple-select-label">Năm</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    label="Năm"
                    defaultValue=""
                    onChange={(e) => handleChangeYear(e, index)}
                  >
                    {dataYear.map((item, index) => (
                      <MenuItem key={index} value={item}>
                        {item}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Box>
            </Box>
            <Box sx = {{ display: "flex" }} width = {{ xs: "100%", sm: "50%", md: "50%", lg: "50%"  }} justifyContent = {{ xs : "space-evenly" }}  >
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <Box sx={{ padding: "0px 20px" }}>
                  <Typography>Đến</Typography>
                </Box>
              </Box>
              <Box sx={{ width: 100}} paddingRight = {{ xs: "0px", sm:"10px", md : "10px", lg: "10px" }} >
                <FormControl fullWidth key={index}>
                  <InputLabel id="demo-simple-select-label">Tháng</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    label="Tháng"
                    defaultValue=""
                    onChange={(e) => handleChangeMonthNext(e, index)}
                  >
                    {months.map((item, index) => (
                      <MenuItem key={index} value={item}>
                        {item}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Box>
              <Box sx={{ width: 100 }}>
                <FormControl fullWidth key={index}>
                  <InputLabel id="demo-simple-select-label">Năm</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    label="Năm"
                    defaultValue=""
                    onChange={(e) => handleChangeYearNext(e, index)}
                  >
                    {dataYear.map((item, index) => (
                      <MenuItem key={index} value={item}>
                        {item}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Box>
            </Box>
          </Box>
          <Box
            sx={{ display: "flex", alignItems: "flex-end"}}  justifyContent = {{ xs: "space-around" }} width = {{ xs: "100%", sm:"20%", md: "auto", lg: "auto" }}
          >
            {item.options === "normal" ? (
              <Box>
                <TextField
                  type="text"
                  name="number"
                  value={Number(item.dataNew[0].money).toLocaleString()}
                  onChange={(e) => handleChangeMoney(e, index)}
                  id="standard-basic"
                  label="Mức lương đóng BHXH"
                  variant="standard"
                />
              </Box>
            ) : (
              <Box>
                <TextField
                  disabled
                  id="standard-basic"
                  label="Giai đoạn thai sản"
                  variant="standard"
                />
              </Box>
            )}
            <Box sx={{ display: "flex" }}>
              <Button
                sx={{ height: "30px", alignItems: "center" }}
                onClick={() => handleDeleteItem(index)}
              >
                <DeleteOutlineIcon />
              </Button>
            </Box>
          </Box>
        </Box>
      ))}
    </Box>
  );
}
export default ListData;
