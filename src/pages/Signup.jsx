import React, { useRef } from 'react'
import styled from 'styled-components'
import { Button, TextField } from "@mui/material";
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import { signup } from '../store/actions';

function Signup() {
  const usernameRef = useRef()
  const passwordRef = useRef()
  const confirmPasswordRef = useRef()
  const dispatch = useDispatch()
  const navigate = useNavigate()

  function signupHandler() {
    const data = {
      username: usernameRef.current.value,
      password: passwordRef.current.value,
      confirmPassword: confirmPasswordRef.current.value
    }

    dispatch(signup(data)).then(() => navigate("/"))
  }

  function navigateFunc() {
    navigate("/")
  }

  return (
    <Wrapper>
        <SignUpStyle>
          <h1>Sign Up</h1>
          <TextField inputRef={usernameRef} style={{width: "100%"}} id="outlined-basic" label="Username" variant="outlined" />
          <TextField
            inputRef={passwordRef}
            style={{width: "100%"}}
            id="outlined-password-input"
            label="Password"
            type="password"
            autoComplete="current-password"
          />
          <TextField
            inputRef={confirmPasswordRef}
            style={{width: "100%"}}
            id="outlined-password-input"
            label="Confirm Password"
            type="password"
            autoComplete="current-password"
          />
          <Button onClick={signupHandler} style={{width: "300px"}} variant="contained">Sign Up</Button>
          <Button onClick={() => navigateFunc()} style={{width: "300px", backgroundColor: "red"}} variant="contained">Back</Button>
        </SignUpStyle>
    </Wrapper>
  )
}

export default Signup

const Wrapper = styled.div``

const SignUpStyle = styled.div `
    width: 300px;
    display: flex;
    flex-direction: column;
    gap: 12px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;

    h1 {
      margin-bottom: 20px;
    }
`