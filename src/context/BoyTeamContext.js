import { createContext, useEffect, useReducer, useState } from "react";
import axios from "../api/axios";

const BoyTeamContext = createContext({})

export const boyTeamReducer = (state, action) => {
  switch (action.type) {
    case 'SET_BOY_TEAMS':
      return {
        boyTeams: action.payload
      }
    case 'CREATE_BOY_TEAM':
      return {
        boyTeams: [action.payload, ...state.boyTeams]
      }
    case 'UPDATE_BOY_TEAM':
      const updatedBoyTeam = action.payload
      const updatedBoyTeams = state.boyTeams.map((boyTeam) => {
        if (boyTeam._id === updatedBoyTeam._id) {
          return updatedBoyTeam
        }
        return boyTeam
      })
      return {
        ...state,
        boyTeams: updatedBoyTeams
      }
    case 'DELETE_BOY_TEAM':
      return {
        boyTeams: state.boyTeams.filter((boyTeam) => boyTeam._id !== action.payload._id)
      }
    default:
      return state
  }
}

export const BoyTeamProvider = ({ children }) => {
  const [state, dispatch] = useReducer(boyTeamReducer, {
    boyTeams: null
  })
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const getBoyTeams = async () => {
      try {
        setIsLoading(true)
        const response = await axios.get('/boyTeams')
        dispatch({ type: 'SET_BOY_TEAMS', payload: response.data})
        setIsLoading(false)
      } catch (err) {
        console.log(err)
      }
    }
    getBoyTeams()
  }, [dispatch])

  return (
    <BoyTeamContext.Provider value={{...state, dispatch, isLoading}}>
      {children}
    </BoyTeamContext.Provider>
  )
}

export default BoyTeamContext