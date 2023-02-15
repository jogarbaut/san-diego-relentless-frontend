import { useState, useEffect } from "react"
import { useNavigate, useLocation } from "react-router-dom"
import useAxiosPrivate from "../hooks/useAxiosPrivate"

const UsersEditor = () => {
  const [users, setUsers] = useState()
  const axiosPrivate = useAxiosPrivate()
  const navigate = useNavigate()
  const location = useLocation()

  useEffect(() => {
    let isMounted = true
    const controller = new AbortController()

    const getUsers = async () => {
      try {
        const response = await axiosPrivate.get("/users", {
          signal: controller.signal,
        })
        isMounted && setUsers(response.data)
      } catch (err) {
        if (controller.signal.aborted) return
        console.error(err)
        navigate("/login", { state: { from: location }, replace: true })
      }
    }

    getUsers()

    return () => {
      isMounted = false
      controller.abort()
    }
  }, [])

  return (
    <article>
      <h2>Users List</h2>
      {users?.length ? (
        <ul>
          {users.map((user, i) => (
            <li key={i}>{user?.email} | {user?.username}</li>
          ))}
        </ul>
      ) : (
        <p>No users found.</p>
      )}
      <br />
    </article>
  )
}

export default UsersEditor
