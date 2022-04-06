import React from 'react'

// importing the incNumber and decNumber actions to specify what to do..
import {incNumber,decNumber} from './actions/index'


// here importing useSelector And useDispatch from react-redux to use the provided store by using useSelector 
// and changing the stores state tree by dispatching actions..

//======================================================================================================
//Exp for useSelector:
//==============================================
// (alias) function useSelector<TState = DefaultRootState, TSelected = unknown>(selector: (state: TState) => TSelected, equalityFn?: (left: TSelected, right: TSelected) => boolean): TSelected
// import useSelector
// A hook to access the redux store's state. This hook takes a selector function as an argument. The selector is called with the store state.

// This hook takes an optional equality comparison function as the second parameter that allows you to customize the way the selected state is compared to determine whether the component needs to be re-rendered.

// If you do not want to have to specify the root state type for whenever you use this hook with an inline selector you can use the TypedUseSelectorHook interface to create a version of this hook that is properly typed for your root state.

// @param selector — the selector function

// @param equalityFn — the function that will be used to determine equality

// @returns — the selected state

// @example

// import React from 'react'
// import { useSelector } from 'react-redux'
// import { RootState } from './store'

// export const CounterComponent = () => {
//   const counter = useSelector((state: RootState) => state.counter)
//   return <div>{counter}</div>
// }
//====================================================================================================================

//===================================================================================================================
//Exp for useDispatch:
//================================
// (alias) function useDispatch<TDispatch = Dispatch<any>>(): TDispatch (+1 overload)
// import useDispatch
// A hook to access the redux dispatch function.

// Note for redux-thunk users: the return type of the returned dispatch functions for thunks is incorrect. However, it is possible to get a correctly typed dispatch function by creating your own custom hook typed from the store's dispatch function like this: const useThunkDispatch = () => useDispatch<typeof store.dispatch>();

// @returns — redux store's dispatch function

// @example

// import React from 'react'
// import { useDispatch } from 'react-redux'

// export const CounterComponent = ({ value }) => {
//   const dispatch = useDispatch()
//   return (
//     <div>
//       <span>{value}</span>
//       <button onClick={() => dispatch({ type: 'increase-counter' })}>
//         Increase counter
//       </button>
//     </div>
//   )
// }
//===================================================================================================================


import { useSelector,useDispatch } from 'react-redux'

const App = () => {

  //getting the state of the provided  store and using the changeNumber reducer from that state..
  const myState = useSelector((state)=>state.changeNumber);

  //using the useDispatch() hook .
  const dispatch = useDispatch();
  return (
    <div>
      <div style={{display:"flex",alignItems:"center",justifyContent:"center",flexWrap:"wrap"}}>
        <h1 align="center" style={{width:"100vw"}}>Increment and Decrement counter</h1>
        <div align="center" style={{width:"100vw"}}>Using React Redux</div>
        <div align="center" style={{width:"100vw"}}>
          <div>
            {/* here we are dispatching an action by calling the decNumber function from the state.changeNumber Reducer on each click of the - button */}
            <button onClick={()=>dispatch(decNumber())}><h1>-</h1></button>
            {/* using the updated state */}
            {myState}
            {/* here we are dispatching an action by calling the incNumber function from the state.changeNumber Reducer on each click of the + button */}

            <button onClick={()=>dispatch(incNumber())}><h1>+</h1></button>
          </div>
      </div>
      </div>
    </div>
  )
}

export default App