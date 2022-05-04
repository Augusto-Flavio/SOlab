import React from 'react';
import { styles } from './styles.js';
import './styles.css';
import { useNavigate } from 'react-router-dom';
import { BsArrowLeftCircleFill } from 'react-icons/bs';

import { Grid } from '@mui/material';

export default function GridComponents({ itens, title }) {

  const navigate = useNavigate();

  function handleSelect(link) {
    navigate(link);
  }

  return (
    <Grid container spacing={2} justifyContent='center' style={styles.gridRoot}>
      <Grid container spacing={2} justifyContent='center' style={styles.headerOptions}>

        <Grid
          item
          onClick={() => { navigate(-1) }}
          style={{ cursor: 'pointer' }}
        >
          <BsArrowLeftCircleFill fontSize={40} />
        </Grid>

        <Grid item style={styles.titleSelectGrid} xs={10} sm={10} md={10} lg={10}>
          {title}
        </Grid>

      </Grid>

      <Grid
        container
        item
        spacing={2}
        justifyContent='center'
        xs={11} sm={11} md={11} lg={11}
      >
        {
          itens.map((item, key) => (
            <Grid
              item
              xs={12} sm={6} md={4} lg={4} xl={3}
              key={key}
              onClick={() => handleSelect(item.link)}
            >
              <div className='image'>
                <img src={item.img} alt={`Imagem sobre ${item.title}`} />
              </div>

              <div className='title-option-grid'>
                {item.title}
              </div>
            </Grid>
          ))
        }
      </Grid>
    </Grid >
  )
}