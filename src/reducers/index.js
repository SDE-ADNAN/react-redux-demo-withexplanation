// step no.3
// here we are now combining our reducers which is the best part of using redux

// here we are importing the reducer function
import changeNumber from "./upDown";

// here we are importing the combineReducers function from redux which will simply
// Turns an object whose values are different reducer functions, into a single reducer function.
// It will call every child reducer, and gather their results into a single state object,
// whose keys correspond to the keys of the passed reducer functions.
import { combineReducers } from "redux";

// here we are defining a rootReducer which will be a combo of all the added reducers and
// we are supposed to pass this reducer to the store..
const rootReducer = combineReducers({
  // changeNumber:changeNumber,
  // or u can just write the name of reducer if its same in regards to its key and value pair
  changeNumber,
  //here we can add multiple reducers as:==
  // changeTheme,
  //changeNumber,
  //changeCount,
  // like this ..
});

export default rootReducer;
