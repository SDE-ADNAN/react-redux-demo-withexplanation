// step no.2 now we will make the reducer function for specifying the store to what to do while 
// dispatching any actions from any component
// here we had created a changeNumber reducer which will take the previous State and the action 
// and then it will perform some tasks then return the new state
// here we are returning the state +1 in case of INCREMENT and state -1 in case of DECREMENT

// this tells about the initial state
const initialState = 0;

// this is the reducer taking previous state and  action and searches for the action.type 
// which we provide while passing the arguments as we pass an object as an argument which is like this
// const action ={type:"INCREMENT"} and thats why we use  action.type in the switch case evaluation...
 const changeNumber =(state = initialState,action)=>{
    switch(action.type){
        case "INCREMENT" : return state +1;
        case "DECREMENT" : return state -1;
        default:return state;

    }
}



export default changeNumber;