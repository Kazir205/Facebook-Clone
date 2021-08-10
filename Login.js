import React from 'react'
import './login.css'
import {Button} from '@material-ui/core';
import {auth, provider} from "./firebase"
import { useStateValue } from './Stateprovider';
import { actionTypes } from './Reducer';

function Login() {
    const [state, dispatch] = useStateValue();
    const signIn = () => {
        //sign...
        auth.signInWithPopup(provider)
        .then((result) => {
            dispatch({
                type: actionTypes.SET_USER, 
                user: result.user
            })
            console.log(
                "reached"
            )
        }).catch((error) => alert(error.message))
    }
    return (
        <div className="login">
            <div className="facebook__logo">
                <img src="https://1000logos.net/wp-content/uploads/2021/04/Facebook-logo.png" alt="" />
                <img src="https://www.logo.wine/a/logo/Facebook/Facebook-Logo.wine.svg" alt="" />
            </div>
            <Button type="submit" onClick={signIn}>Sign In</Button>
        </div>
    )
}

export default Login
