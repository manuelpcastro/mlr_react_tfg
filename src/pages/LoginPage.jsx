import React, { useState } from "react"
import { useSelector, useDispatch } from "react-redux"
import { Redirect } from "react-router-dom"
import {
  Button, Card, CardBody, Container, Input, Row,
} from "reactstrap"
import { login } from "../components/login/LoginActions"

const LoginPage = () => {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")

  const dispatch = useDispatch()

  const { isAuthenticated } = useSelector(state => state.auth)

  if (isAuthenticated) {
    return <Redirect to="/dashboard" />
  }

  const handleUsernameChange = e => setUsername(e.target.value)
  const handlePasswordChange = e => setPassword(e.target.value)

  const userLogin = () => {
    dispatch(login({ username, password }))
  }

  const handleOnKeyDown = e => {
    if (e.key === "Enter" && username && password) {
      userLogin()
    }
  }

  return (
    <Container className="mt-4">
      <Card>
        <CardBody>
          <Row className="mb-4 mx-2">
            Username
            <Input
              id="username"
              name="username"
              placeholder="Username"
              type="text"
              value={username}
              onChange={handleUsernameChange}
              onKeyDown={handleOnKeyDown}
            />
          </Row>
          <Row className="mb-4 mx-2">
            Password
            <Input
              id="password"
              name="password"
              placeholder="Password"
              type="password"
              value={password}
              onChange={handlePasswordChange}
              onKeyDown={handleOnKeyDown}
            />
          </Row>
          <Row className="mx-2">
            <Button color="primary" onClick={userLogin}>
              Login
            </Button>
          </Row>
        </CardBody>
      </Card>
    </Container>
  )
}

export default LoginPage
