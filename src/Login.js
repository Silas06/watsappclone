import React from 'react'
import './Login.css'

import api from './api'
export default ({onReceive}) => {

  const handleFacebookLogin = async () => {
    let result = await api.fbPopup();

    if (result) {
      console.log(result)
      onReceive(result.user)
    } else {
      console.log('errou!')
    }
  }

  return (
    <div className="login">
      <button onClick={handleFacebookLogin}>Logar com facebook</button>
    </div>
  )
}