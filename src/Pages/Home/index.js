import React from "react";
import './styles.css';
import Navbar from '../../Components/Navbar/index';
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  return (
    <div>
      <Navbar />
      <div className='center'>
        <div className='conteudo'>
          <div className='title'>Laboratório de Sistemas Operacionais</div>
          <div className='subtitle'>
            SOlab é um simulador gráfico de sistemas operacionais para auxiliar estudantes
            e docentes no aprendizado da disciplina de Sistemas Operacionais.
          </div>

          <div className='subtitle'>
            Veja as simulações prontas sobre conceitos comuns em SO.
            Edite simulações e experimente suas próprias situações.
          </div>

          <div className='buttons-area'>
            <button onClick={() => navigate('/choice-simulator')}>Começar</button>
            <button>Abrir</button>
          </div>
        </div>
      </div>
    </div>
  )
}