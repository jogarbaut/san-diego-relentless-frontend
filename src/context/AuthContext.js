import { createContext, useEffect, useReducer } from "react"
import axios from "axios"

const AuthContext = createContext({})

export const authReducer = (state, action) => {
  switch (action.type) {
    // case "LOGIN":
    //   return { user: action.payload }
    case "SET_USER":
      return { user: action.payload }
    case "LOGOUT_USER":
      return { user: null }
    default:
      return state
  }
}

export const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, {
    user: null,
  })

  // If token is available, decode jwt to get the userId
  // useEffect(() => {
  //   axios.get("http://localhost:8000/api/get-user", { withCredentials: true })
  //     .then((res) => {
  //       dispatch({ type: 'SET_USER', payload: res.data.id })
  //     })
  //     .catch((err) => {
  //       console.log(err)
  //     })
  // }, [dispatch])

  return (
    <AuthContext.Provider value={{...state, dispatch}}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthContext