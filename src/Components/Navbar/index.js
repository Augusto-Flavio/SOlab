import React from "react";
import './styles.css';

export default function Home() {
  return (

    <div className='navbar'>
      <div className='logo'>
        <a href="/">SO<span>lab</span></a>
      </div>

      <div className='itens'>
        <a href='/about'>Sobre</a>
        <a href='/contact'>Contato</a>
        <a href='/login'>Login</a>
      </div>
    </div>
  )
}