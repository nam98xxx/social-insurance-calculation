import { combineReducers } from "redux";
import addItemReducer from "../Buttons/buttonaddSlide";
import calculateReducer from "../Buttons/dataNewSlice"
const rootReducer = combineReducers({
    listData: addItemReducer,
    dataNew: calculateReducer
})
export default rootReducer