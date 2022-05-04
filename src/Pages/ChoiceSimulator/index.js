import React from "react";
import './styles.css';
import Navbar from '../../Components/Navbar/index'
import GridComponents from "../../Components/GridComponents";

export default function ChoiceSimulator() {

  const itens = [
    {
      title: 'Processos e Threads',
      img: '',
      link: ''
    },
    {
      title: 'Sincronização e Comunicação entre processos',
      img: '',
      link: ''
    },
    {
      title: 'Gerência do Processador',
      img: '',
      link: '/processor-manager'
    },
    {
      title: 'Gerência de Memória',
      img: '',
      link: ''
    },
    {
      title: 'Sistema de Arquivos',
      img: '',
      link: ''
    },
    {
      title: 'Dispositivos de Entrada e Saída',
      img: '',
      link: ''
    }
  ];

  return (
    <div>
      <Navbar />
      <div className='center'>
        <div className='content-choice-simulator'>
          <GridComponents title="O que você deseja simular?" itens={itens} />
        </div>
      </div>
    </div>
  )
}