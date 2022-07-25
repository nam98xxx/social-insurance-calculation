const addItem = (status) => {
    return {
        type: "AppInsurance/addItem",
        payload: status
    }
}
const data = (data) => {
    return {
        type: "AppInsurance/editValue",
        payload: data
    }
}
const calculateItem = (data) => {
    return {
        type: "AppInsurance/calculateValue",
        payload: data
    }
}
const deleteItem = (id) => {
    return {
        type: "AppInsurance/deleteItem",
        payload: id
    }
}
export { addItem, data,calculateItem,deleteItem }