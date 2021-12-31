import React from 'react'
import './Login.css'

import LogoGoogle from './assets/images/googe.png'

import api from './api'
export default ({onReceive}) => {

  const handleFacebookLogin = async () => {
    console.log('sadf')
    let result = await api.googlePopup();
    console.log(result + ', Silas')

    if (result) {
      onReceive(result.user)
    } else {
      console.log('errou!')
    }
  }

  return (
    <div className="login">
      <button onClick={handleFacebookLogin} className="btnLogin">
        <img src={ LogoGoogle } alt="google" /> Logar com Google
      </button>
    </div>
  )
}