import { createContext, useEffect, useReducer, useState } from "react";
import axios from "../api/axios";

const PostContext = createContext({})

export const postReducer = (state, action) => {
  switch (action.type) {
    case 'SET_POSTS':
      return {
        posts: action.payload
      }
    case 'CREATE_POST':
      return {
        posts: [action.payload, ...state.posts]
      }
    case 'UPDATE_POST':
      const updatedPost = action.payload
      const updatedPosts = state.posts.map((post) => {
        if (post._id === updatedPost._id) {
          return updatedPost
        }
        return post
      })
      return {
        ...state,
        posts: updatedPosts
      }
    case 'DELETE_POST':
      return {
        posts: state.posts.filter((post) => post._id !== action.payload._id)
      }
    default:
      return state
  }
}

export const PostProvider = ({ children }) => {
  const [state, dispatch] = useReducer(postReducer, {
    posts: null
  })
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const getPosts = async () => {
      try {
        setIsLoading(true)
        const response = await axios.get('/posts')
        dispatch({ type: 'SET_POSTS', payload: response.data})
        setIsLoading(false)
      } catch (err) {
        console.log(err)
      }
    }
    getPosts()
  }, [dispatch])

  return (
    <PostContext.Provider value={{...state, dispatch, isLoading}}>
      {children}
    </PostContext.Provider>
  )
}

export default PostContext