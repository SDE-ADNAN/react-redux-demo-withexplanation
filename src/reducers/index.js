import changeNumber from "./upDown";

import { combineReducers } from "redux";

const rootReducer = combineReducers({
    // changeNumber:changeNumber,
    // or u can just write the name of reducer if its same in regards to its key and value pair
    changeNumber,
})


export default rootReducer;