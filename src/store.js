//step no.4:


//here we are importing the createStore function from redux which creates a store to store state


// Explaination for craeteStore Function ::--

//==========================================================================================================
// (alias) const createStore: StoreCreator
// import createStore
// Creates a Redux store that holds the state tree. The only way to change the data in the store is to call dispatch() on it.

// There should only be a single store in your app. To specify how different parts of the state tree respond to actions, you may combine several reducers into a single reducer function by using combineReducers.

// @template S — State object type.

// @param reducer
// A function that returns the next state tree, given the current state tree and the action to handle.

// @param preloadedState
// The initial state. You may optionally specify it to hydrate the state from the server in universal apps, or to restore a previously serialized user session. If you use combineReducers to produce the root reducer function, this must be an object with the same shape as combineReducers keys.

// @param enhancer
// The store enhancer. You may optionally specify it to enhance the store with third-party capabilities such as middleware, time travel, persistence, etc. The only store enhancer that ships with Redux is applyMiddleware().

// @returns
// A Redux store that lets you read the state, dispatch actions and subscribe to changes.
//================================================================================================================


import { createStore } from 'redux'


//here we are importing the rootReducer to pass it through the createStore function
import rootReducer from './reducers/index'

// here we are creating the store with help of createStore and passing rootReducer through it..
const store = createStore(rootReducer);

// exporting the root reducer so it could be used in other files in the projects..
export default store;