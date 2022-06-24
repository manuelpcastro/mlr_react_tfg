import React, { useEffect, useState } from "react"
import { useSelector, useDispatch } from "react-redux"

import { useHistory } from "react-router-dom"
import {
  Button, Card, CardBody, Container, Input, Row, Spinner,
} from "reactstrap"
import { useGetAccessTokenMutation } from "../services/auth/api"
import { updateAccessToken } from "../services/auth/slice"
import FrontPage from "./frontpage/FrontPage"

const LoginPage = () => {
  const { push } = useHistory()
  const dispatch = useDispatch()

  const { authToken } = useSelector(state => state.auth)

  const [getAccessToken, {
    data, isLoading, isSuccess, isError,
  }] = useGetAccessTokenMutation()

  const [form, setForm] = useState({ username: "", password: "" })

  const userLogin = () => {
    getAccessToken(form)
  }

  const handleUsernameChange = e => {
    setForm({ ...form, username: e.target.value })
  }

  const handlePasswordChange = e => {
    setForm({ ...form, password: e.target.value })
  }

  const handleOnKeyDown = e => {
    if (e.key === "Enter" && form.username && form.password) {
      userLogin()
    }
  }

  useEffect(() => {
    if (authToken) {
      push("/dashboard")
    }

    if (isSuccess) {
      dispatch(updateAccessToken(data.auth_token))
    }
  }, [authToken, data])

  if (isLoading) {
    return (
      <Container className="mt-4">
        <Card>
          <CardBody className="text-center">
            <Spinner size="xxl" />
          </CardBody>
        </Card>
      </Container>
    )
  }

  return (
    <FrontPage>
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
                value={form.username}
                onChange={handleUsernameChange}
                onKeyDown={handleOnKeyDown}
                invalid={isError}
              />
            </Row>
            <Row className="mb-4 mx-2">
              Password
              <Input
                id="password"
                name="password"
                placeholder="Password"
                type="password"
                value={form.password}
                onChange={handlePasswordChange}
                onKeyDown={handleOnKeyDown}
                invalid={isError}
              />
            </Row>
            {isError && <p className="text-danger px-2">Your username or your password is not correct.</p>}
            <Row className="mx-2">
              <Button
                className="text-white"
                color="secondary"
                onClick={userLogin}
              >
                Login
              </Button>
            </Row>
          </CardBody>
        </Card>
      </Container>
    </FrontPage>
  )
}

export default LoginPage
