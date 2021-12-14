import React from 'react'
import './ChatIntro.css'

import ImgIntro from '../assets/images/intro.jpg'

export default () => {
  return (
    <div className="chatIntro">
        <img src={ImgIntro} alt="" />
      
      <h1>Mantenha seu celular conectado</h1>
      <h2>
        O watsApp conecta ao seu telefone para sincronizar suas mensagens <br />
        Para reduzir o uso de dados conecte seu telefone a uma rede Wi-Fi.
      </h2>
      <h2></h2>
      <img src="./aaw" alt="" />
    </div>
  )
}
