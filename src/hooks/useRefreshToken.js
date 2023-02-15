import axios from "../api/axios"
import useAuth from "./useAuth"

const useRefreshToken = () => {
  const { setAuth } = useAuth()

  const refresh = async () => {
    const response = await axios.get("/refresh", { withCredentials: true })
    setAuth((prevState) => {
      console.log(JSON.stringify(prevState))
      console.log(response.data.accessToken)
      return { 
        ...prevState,
        roles: response.data.roles,
        accessToken: response.data.accessToken 
      }
    })
    return response.data.accessToken
  }

  return refresh
}

export default useRefreshToken
