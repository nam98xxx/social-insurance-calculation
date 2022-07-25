import Stack from "@mui/material/Stack";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import { forwardRef } from "react";
const Alert = forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});
function WarningStateData(props) {
  return (
    <Stack spacing={2} sx={{ width: "100%" }}>
      <Snackbar open={props.open} autoHideDuration={1500} onClose={props.close}>
        <Alert onClose={props.close} severity="warning" sx={{ width: "100%" }}>
          Vui lòng nhập đúng giai đoạn !
        </Alert>
      </Snackbar>
    </Stack>
  );
}
function WarningData(props) {
  return (
    <Stack spacing={2} sx={{ width: "100%" }}>
      <Snackbar open={props.open} autoHideDuration={1000} onClose={props.close}>
        <Alert onClose={props.close} severity="warning" sx={{ width: "100%" }}>
            Bạn vui lòng cung cấp đủ dữ liệu !
        </Alert>
      </Snackbar>
    </Stack>
  );
}
function WarningDataMaternity(props) {
  return (
    <Stack spacing={2} sx={{ width: "100%" }}>
      <Snackbar open={props.open} autoHideDuration={1000} onClose={props.close}>
        <Alert onClose={props.close} severity="warning" sx={{ width: "100%" }}>
            Bạn vui lòng thêm giai đoạn BHXH !
        </Alert>
      </Snackbar>
    </Stack>
  );
}
function WarningStageMaternity(props) {
  return (
    <Stack spacing={2} sx={{ width: "100%" }}>
      <Snackbar open={props.open} autoHideDuration={1000} onClose={props.close}>
        <Alert onClose={props.close} severity="warning" sx={{ width: "100%" }}>
            Không được nghỉ quá 6 tháng và nghỉ ít hơn 3 tháng !
        </Alert>
      </Snackbar>
    </Stack>
  );
}

export { WarningStateData, WarningData,WarningDataMaternity,WarningStageMaternity};
