import { TextField, Button } from '@mui/material'
import React, { useEffect, useRef } from 'react'
import styled from 'styled-components'
import { useDispatch, useSelector } from "react-redux"
import { login } from '../store/actions'
import { useNavigate } from "react-router-dom"

function Login() {
  const usernameRef = useRef()
  const passwordRef = useRef()
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { auth } = useSelector(store => store)
  
  useEffect(() => {
    if (auth) navigate("/")
  }, [auth, navigate])

  function loginHandler() {
    const data = {
      username: usernameRef.current.value, 
      password: passwordRef.current.value
    }
    dispatch(login(data)).then(() => navigate("/"))
    console.log(usernameRef.current.value);
  }

  return (
    <Wrapper>
      <h1>Log In</h1>
      <TextField inputRef={usernameRef} style={{width: "100%"}} id="outlined-basic" label="Login" variant="outlined" />
      <TextField inputRef={passwordRef} style={{width: "100%"}} id="outlined-basic" label="Password" variant="outlined" />
      <Button onClick={loginHandler} style={{width: "300px"}} variant="contained">Log In</Button>
    </Wrapper>
  )
}

export default Login

const Wrapper = styled.div `
  width: 300px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  h1 {
    margin-bottom: 20px;
    text-align: center;
  }
`