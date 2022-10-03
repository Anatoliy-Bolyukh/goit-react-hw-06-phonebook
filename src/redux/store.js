import { configureStore } from '@reduxjs/toolkit'
import { combineReducers } from 'redux'
import contactsReduser from './contactsSlice'


const rootReducer = combineReducers({
  contacts: contactsReduser,
})

export const store = configureStore({
  reducer: rootReducer
})




// import { configureStore } from '@reduxjs/toolkit'
// import usersReducer from './usersReducer'
// import postsReducer from './postsReducer'

// const store = configureStore({
//   reducer: {
//     users: usersReducer,
//     posts: postsReducer,
//   },
// })
