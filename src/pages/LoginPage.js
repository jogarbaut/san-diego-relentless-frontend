import { useEffect, useState } from "react"
import useAuth from "../hooks/useAuth"
import axios from "../api/axios"
import { Container, Form, Row, Col, Button } from "react-bootstrap"
import { useLocation, useNavigate } from "react-router-dom"

const LoginPage = () => {
  const { setAuth, persist, setPersist } = useAuth()

  const navigate = useNavigate()
  const location = useLocation()
  const from = location.state?.from?.pathname || "/dashboard"

  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [errorMessage, setErrorMessage] = useState("")

  const togglePersist = () => {
    setPersist((prevState) => !prevState)
  }

  useEffect(() => {
    localStorage.setItem("persist", persist)
  }, [persist])

  const onSubmitHandler = async (e) => {
    e.preventDefault()
    try {
      const response = await axios.post('/auth',
        JSON.stringify({ username, password }),
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        }
      )
      // console.log(JSON.stringify(response?.data))
      const accessToken = response?.data?.accessToken
      const roles = response?.data?.roles
      setAuth({ username, password, roles, accessToken })
      setUsername("")
      setPassword("")
      navigate(from, { replace: true })
    } catch (err) {
      if (!err.response) {
        setErrorMessage("Issues connecting to server.")
      } else if (err.response?.status === 400) {
        setErrorMessage("Login information is incorrect.")
      } else if (err.response?.status === 401) {
        setErrorMessage("Unauthorized request.")
      } else {
        setErrorMessage("Login failed.")
      }
    }
  }

  return (
    <div>
      <Container fluid>
        <Row className="justify-content-center">
          <Col md={9} lg={6}>
            <Form onSubmit={onSubmitHandler}>
              <Form.Group className="mb-3">
                <Form.Label htmlFor="username">Username</Form.Label>
                <Form.Control
                  name="username"
                  type="text"
                  placeholder="Enter username"
                  onChange={(e) => setUsername(e.target.value)}
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label htmlFor="password">Password</Form.Label>
                <Form.Control
                  name="password"
                  type="password"
                  placeholder="Enter Password"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </Form.Group>

              <p>{errorMessage}</p>

              <Button variant="primary" type="submit">
                Submit
              </Button>
              <div>
                <input
                  type="checkbox"
                  id="persist"
                  onChange={togglePersist}
                  checked={persist}
                />
                <label htmlFor="persist">Trust this Device</label>
              </div>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default LoginPage
