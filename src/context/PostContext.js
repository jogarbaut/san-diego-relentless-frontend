import { createContext, useEffect, useReducer, useState } from "react";
import axios from 'axios'

const PostContext = createContext({})

export const postReducer = (state, action) => {
  switch (action.type) {
    case 'SET_POSTS':
      return {
        posts: action.payload
      }
    case 'CREATE_POST':
      return {
        posts: [action.payload, ...state.workouts]
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
    case 'DELETE_POST:':
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

  // useEffect(() => {
  //   axios.get("http://localhost:8000/api/post")
  //     .then((res) => {
  //       dispatch({ type: 'SET_POSTS', payload: res.data})
  //     })
  //     .catch((err) => {
  //       console.log(err)
  //     })
  // }, [dispatch])

  useEffect(() => {
    const fetchPosts = async () => {
      setIsLoading(true)
      const res = await axios.get('https://jsonplaceholder.typicode.com/posts')
      dispatch({ type: 'SET_POSTS', payload: res.data})
      setIsLoading(false)
    }
    fetchPosts()
  }, [])

  return (
    <PostContext.Provider value={{...state, dispatch, isLoading}}>
      {children}
    </PostContext.Provider>
  )
}

export default PostContext