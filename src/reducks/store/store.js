import {
  createStore as reduxCreateStore,
  combineReducers
} from "redux";

import {UsersReducer} from "../user/reducers.js";

export default function createStore() {
  return reduxCreateStore(
    combineReducers({
      users: UsersReducer
    })
  )
}