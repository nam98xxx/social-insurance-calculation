import { List, ListItem } from "@mui/material"

function Serial(){
    return (
        <List sx = {{display: "flex", borderBottom: "1px solid #ccc", paddingTop: "50px"}} >
            <ListItem sx = {{ fontWeight: 600 }} >STT</ListItem>
            <ListItem sx = {{ fontWeight: 600 }} >Giai đoạn nộp BHXH</ListItem>
            <ListItem sx = {{justifyContent:"center", fontWeight: 600  }} >Mức lương đóng BHXH</ListItem>
        </List>
    )
}
export default Serial;