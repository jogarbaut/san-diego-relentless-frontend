import { createContext, useEffect, useReducer, useState } from "react";
import axios from "../api/axios";

const FeaturedPostContext = createContext({})

export const featuredPostReducer = (state, action) => {
  switch (action.type) {
    case 'SET_FEATURED_POSTS':
      return {
        featuredPosts: action.payload
      }
    case 'CREATE_FEATURED_POST':
      return {
        featuredPosts: [action.payload, ...state.featuredPosts]
      }
    case 'UPDATE_FEATURED_POST':
      const updatedFeaturedPost = action.payload
      const updatedFeaturedPosts = state.featuredPosts.map((featuredPost) => {
        if (featuredPost._id === updatedFeaturedPost._id) {
          return updatedFeaturedPost
        }
        return featuredPost
      })
      return {
        ...state,
        featuredPosts: updatedFeaturedPosts
      }
    case 'DELETE_FEATURED_POST':
      return {
        featuredPosts: state.featuredPosts.filter((featuredPost) => featuredPost._id !== action.payload._id)
      }
    default:
      return state
  }
}

export const FeaturedPostProvider = ({ children }) => {
  const [state, dispatch] = useReducer(featuredPostReducer, {
    featuredPosts: null
  })
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const getFeaturedPosts = async () => {
      try {
        setIsLoading(true)
        const response = await axios.get('/featuredPosts')
        dispatch({ type: 'SET_FEATURED_POSTS', payload: response.data})
        setIsLoading(false)
      } catch (err) {
        console.log(err)
      }
    }
    getFeaturedPosts()
  }, [dispatch])

  return (
    <FeaturedPostContext.Provider value={{...state, dispatch, isLoading}}>
      {children}
    </FeaturedPostContext.Provider>
  )
}

export default FeaturedPostContext