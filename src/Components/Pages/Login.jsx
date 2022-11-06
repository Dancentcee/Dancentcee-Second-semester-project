import React, { useState,useContext } from 'react'
import {useNavigate, Navigate} from 'react-router-dom'
import {AuthContext} from '../Layout'

function Login() {
    const initialState = {
        email: "",
        password: "",
    }
    const [isLoggedIn, userInfo, meToggle] = useContext(AuthContext);

    const [inputs, setInputs] = useState(initialState)
    const navigate = useNavigate()
    const changeHandler = (e) => {
        // const {name, value} = e.target
        // setInputs(prev => ({...prev, [name]: value}))
        if (e.target.name === 'email') {
            setInputs(prev => ({...prev, email: e.target.value}))
        }
        if (e.target.name === 'password') {
            setInputs(prev => ({...prev, password: e.target.value}))
        }
    }

    
    const submitHandler = (e) => {
        e.preventDefault()
        console.log(inputs)
        setInputs(initialState)
        meToggle()
        navigate("/contacts")
    }

    // if (!isLoggedIn) {
    //     return <Navigate replace to="/" />
    // }

  return (
    <div>
        <form onSubmit={submitHandler}>
            <div>
                <label htmlFor='email'>email</label>
                <input name='email' type='email' id='email' onChange={changeHandler} value={inputs.email}/>
            </div>
            <div>
                <label htmlFor='password'>Password</label>
                <input name='password' type='password' id='password' onChange={changeHandler} value={inputs.password}/>
            </div>
            <button type='submit'  >Sign In</button>
        </form>
    </div>
  )
}

export default Login