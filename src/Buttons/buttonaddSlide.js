
const initialState = [
  {
    status: true,
    options: "normal",
    dataNew: [
      {
        month: "",
        year: "",
        monthNext: "",
        yearNext: "",
        money: "",
        calculate: ""
      }
    ],
  },
];

const addItemReducer = (state = initialState, action) => {

  switch (action.type) {
    case "AppInsurance/addItem":
      return [
        ...state,
        {
          status: action.payload.status,
          options: action.payload.value,
          dataNew: [
            {
              month: "",
              year: "",
              monthNext: "",
              yearNext: "",
              money: action.payload.value === "normal" ? "" : 0
            }
          ],
        },
      ];
    case "AppInsurance/editValue":      
      return state.map((item, index) =>
        index === action.payload.id
          ? {
              ...item,
              dataNew:
                item.dataNew.length === 0
                  ? [
                      ...item.dataNew,
                      {
                        month: action.payload.dataMonth,
                        year: action.payload.dataYear,
                        monthNext: action.payload.dataMonthNext,
                        yearNext: action.payload.dataYearNext,
                        money: action.payload.dataMoney
                      }
                    ]
                  : item.dataNew.length > 0
                  ? item.dataNew.map((value) => {
                      if ( "month" === action.payload.checkMonth) {
                        return { ...value, month: action.payload.dataMonth };
                      } else if("year" === action.payload.checkYear) {
                        return { ...value, year: action.payload.dataYear };
                      } else if ("monthnext" === action.payload.checkMonthNext){
                        return { ...value, monthNext: action.payload.dataMonthNext };
                      } else if ("yeartnext" === action.payload.checkYearNext) {
                        return { ...value, yearNext: action.payload.dataYearNext };
                      } else if ("money" === action.payload.checkMoney) {
                        return { ...value, money: action.payload.dataMoney };
                      }
                    })
                  : 0,
            }
          : item
      );
    case "AppInsurance/deleteItem":
      return state.filter((item,index) => action.payload !== index);
    default:
      return state;
  }
};
export default addItemReducer;

