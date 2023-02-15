import { useContext, useState } from "react"
import AuthContext from "../context/AuthContext"
import axios from "../api/axios"
import { Container, Form, Row, Col, Button } from "react-bootstrap"

const RegisterPage = () => {
  const [username, setUsername] = useState("")
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const [errMsg, setErrMsg] = useState("")
  const [success, setSuccess] = useState(false)

  const onSubmitHandler = async (e) => {
    e.preventDefault()
    try {
      const response = await axios.post('/register',
        JSON.stringify({ username, firstName, lastName, email, password }),
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        }
      )
      console.log(JSON.stringify(response?.data))
      setSuccess(true);
      setUsername("")
      setFirstName("")
      setLastName("")
      setEmail("")
      setPassword("")
    } catch (err) {
      if (!err?.response) {
        setErrMsg("No Server Response")
      } else if (err.response?.status === 409) {
        setErrMsg("Username Taken")
      } else {
        setErrMsg("Registration Failed")
      }
    }
  }

  return (
    <section>
      <Container fluid>
        {success ? (
          <>
            <h1>Success!</h1>
            <p>
              <a href="#">Sign In</a>
            </p>
          </>
        ) : (
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
                  <Form.Label htmlFor="firstName">First Name</Form.Label>
                  <Form.Control
                    name="firstName"
                    type="text"
                    placeholder="Enter first name"
                    onChange={(e) => setFirstName(e.target.value)}
                  />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label htmlFor="lastName">Last Name</Form.Label>
                  <Form.Control
                    name="lastName"
                    type="text"
                    placeholder="Enter last name"
                    onChange={(e) => setLastName(e.target.value)}
                  />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label htmlFor="email">Email address</Form.Label>
                  <Form.Control
                    name="email"
                    type="email"
                    placeholder="Enter email"
                    onChange={(e) => setEmail(e.target.value)}
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

                {/* <Form.Group className="mb-3">
                  <Form.Label htmlFor="confirmPassword">Confirm Password</Form.Label>
                  <Form.Control
                    name="confirmPassword"
                    type="password"
                    placeholder="Enter Password"
                    onChange={(e) => setConfirmPassword(e.target.value)}
                  />
                </Form.Group> */}

                <Button variant="primary" type="submit">
                  Register
                </Button>
              </Form>
            </Col>
          </Row>
        )}
      </Container>
    </section>
  )
}

export default RegisterPage
