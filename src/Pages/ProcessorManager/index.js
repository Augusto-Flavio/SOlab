import React from "react";
import './styles.css';
import Navbar from '../../Components/Navbar/index'
import GridComponents from "../../Components/GridComponents";

export default function ProcesssorManager() {

  const itens = [
    {
      title: 'First-in-Fist-Out',
      img: '',
      link: '/simulator/processor-manager/fifo'
    },
    {
      title: 'Shorted-Job-First',
      img: '',
      link: ''
    },
    {
      title: 'Cooperativo',
      img: '',
      link: ''
    },
    {
      title: 'Circular',
      img: '',
      link: ''
    },
    {
      title: 'Por Prioridades',
      img: '',
      link: ''
    },
    {
      title: 'Múltiplas Filas',
      img: '',
      link: ''
    }
  ];

  return (
    <div>
      <Navbar />
      <div className='center'>
        <div className='content-choice-type-processor-manager'>
          <GridComponents title="Gerência do Processador" itens={itens} />
        </div>
      </div>
    </div>
  )
}