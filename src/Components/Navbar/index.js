import React from "react";
import './styles.css';

export default function Home() {
  return (

    <div className='navbar'>
      <div className='logo'>
        SO<span>lab</span>
      </div>

      <div className='itens'>
        <a href='/about'>Sobre</a>
        <a href='/contact'>Contato</a>
      </div>
    </div>
  )
}