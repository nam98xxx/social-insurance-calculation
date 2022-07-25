import { Box } from "@mui/system";
import { Typography } from "@mui/material";

function Title() {
    return (
        <>
            <Box sx = {{textAlign: "center", paddingTop: "40px"}} >
                <Typography variant="h2" sx = {{fontSize: "24px", textTransform:"uppercase", paddingBottom: "10px", fontWeight: "bold"}}> Hệ thống bảo hiểm xã hội 1 lần </Typography>
                <Typography variant="subtitle" sx = {{fontStyle: "italic"}} component="div" >Cách tính bảo hiểm xã hội 1 lần đơn giản, dành cho người muốn tự tính tiền BHXH 1 lần</Typography>
            </Box>
        </>
    )
}
export default Title;