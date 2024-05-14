import { ADD_USER, REMOVE_USER, EDIT_USER } from "./boilerplate"

export const addUser = payload => ({
  type: ADD_USER,
  payload,
})

export const removeUser = payload => ({
  type: REMOVE_USER,
  payload,
})
 
export const editUser = payload => ({
  type: EDIT_USER,
  payload,
})