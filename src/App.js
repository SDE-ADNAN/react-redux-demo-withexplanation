import React from 'react'
import {incNumber,decNumber} from './actions/index'

import { useSelector,useDispatch } from 'react-redux'

const App = () => {
  const myState = useSelector((state)=>state.changeNumber);
  const dispatch = useDispatch();
  return (
    <div>
      <div style={{display:"flex",alignItems:"center",justifyContent:"center",flexWrap:"wrap"}}>
        <h1 align="center" style={{width:"100vw"}}>Increment and Decrement counter</h1>
        <div align="center" style={{width:"100vw"}}>Using React Redux</div>
        <div align="center" style={{width:"100vw"}}>
          <div>
            <button onClick={()=>dispatch(decNumber())}><h1>-</h1></button>
            {myState}
            <button><h1>+</h1></button>
          </div>
      </div>
      </div>
    </div>
  )
}

export default App