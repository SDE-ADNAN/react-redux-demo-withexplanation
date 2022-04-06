// this is the first step in using redux (defining action )


//  here we are defining two functions named incNumber and decNumber
// both of these functions return simple strings particularly
// "INCREMENT" and "DECREMENT" which will be useful for dispatching actions
// while using usedispatch in the component where the redeux store will be used..



export const incNumber = () =>{
    return {
        type:"INCREMENT"
    }
}


export const decNumber = () =>{
    return {
        type:"DECREMENT"
    }
}