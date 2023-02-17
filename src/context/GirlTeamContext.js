import { createContext, useEffect, useReducer, useState } from "react";
import axios from "../api/axios";

const GirlTeamContext = createContext({})

export const girlTeamReducer = (state, action) => {
  switch (action.type) {
    case 'SET_GIRL_TEAMS':
      return {
        girlTeams: action.payload
      }
    case 'CREATE_GIRL_TEAM':
      return {
        girlTeams: [action.payload, ...state.girlTeams]
      }
    case 'UPDATE_GIRL_TEAM':
      const updatedGirlTeam = action.payload
      const updatedGirlTeams = state.girlTeams.map((girlTeam) => {
        if (girlTeam._id === updatedGirlTeam._id) {
          return updatedGirlTeam
        }
        return girlTeam
      })
      return {
        ...state,
        girlTeams: updatedGirlTeams
      }
    case 'DELETE_GIRL_TEAM':
      return {
        girlTeams: state.girlTeams.filter((girlTeam) => girlTeam._id !== action.payload._id)
      }
    default:
      return state
  }
}

export const GirlTeamProvider = ({ children }) => {
  const [state, dispatch] = useReducer(girlTeamReducer, {
    girlTeams: null
  })
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const getGirlTeams = async () => {
      try {
        setIsLoading(true)
        const response = await axios.get('/girlTeams')
        dispatch({ type: 'SET_GIRL_TEAMS', payload: response.data})
        setIsLoading(false)
      } catch (err) {
        console.log(err)
      }
    }
    getGirlTeams()
  }, [dispatch])

  return (
    <GirlTeamContext.Provider value={{...state, dispatch, isLoading}}>
      {children}
    </GirlTeamContext.Provider>
  )
}

export default GirlTeamContext