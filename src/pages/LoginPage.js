import { useContext, useState } from "react"
import AuthContext from "../context/AuthContext"
import axios from "axios"
import { Container, Form, Row, Col, Button } from "react-bootstrap"

const LoginPage = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const { dispatch } = useContext(AuthContext)

  const onSubmitHandler = (e) => { 
    e.preventDefault()
    axios.post("http://localhost:8000/api/login", {
      email,
      password,
    }, { withCredentials: true })
    // axios.get("http://localhost:8000/api/get-user", { withCredentials: true })
    // .then((res) => {
    //   console.log('tried to set user')
    //   dispatch({ type: 'SET_USER', payload: res.data.id })
    // })
    // .catch((err) => {
    //   console.log(err)
    // })
  }



  return (
    <div>
      <Container fluid>
        <Row className="justify-content-center">
          <Col md={9} lg={6}>
            <Form onSubmit={onSubmitHandler}>
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

              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default LoginPage
