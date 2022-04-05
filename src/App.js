import React from 'react'

const App = () => {
  return (
    <div>
      <div style={{display:"flex",alignItems:"center",justifyContent:"center",flexWrap:"wrap"}}>
        <h1 align="center" style={{width:"100vw"}}>Increment and Decrement counter</h1>
        <div align="center" style={{width:"100vw"}}>Using React Redux</div>
        <div align="center" style={{width:"100vw"}}>
          <div>
            <button><h1>-</h1></button>
            count
            <button><h1>+</h1></button>
          </div>
      </div>
      </div>
    </div>
  )
}

export default App