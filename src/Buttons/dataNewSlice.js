const initialState = [];
const calculateReducer = (state = initialState, action) => {
  switch (action.type) {
    case "AppInsurance/calculateValue":
      return action.payload;
    default:
      return state;
  }
};
export default calculateReducer;
