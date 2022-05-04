import React from 'react';
import './styles.css';
import {
  Grid
} from '@mui/material';

import {
  BsThreeDotsVertical,
  BsFillPencilFill,
} from 'react-icons/bs';

import {
  AiFillPauseCircle,
  AiFillLeftCircle,
  AiFillRightCircle
} from 'react-icons/ai';

export default function Simulator() {

  return (
    <div className='bottom-bar'>
      <Grid
        container
        justifyContent='space-between'
        alignItems='center'
        style={{ height: '100%', backgroundColor: 'black' }}
      >

        <Grid item xs={2} sm={2} lg={2} md={2}>
          <BsThreeDotsVertical fontSize={40} />
        </Grid>

        <Grid container item spacing={3} xs={10} sm={10} lg={3} md={3} justifyContent='center'>
          <Grid item><BsFillPencilFill fontSize='3rem' /></Grid>
          <Grid item><AiFillLeftCircle fontSize='3rem' /></Grid>
          <Grid item><AiFillPauseCircle fontSize='3rem' /></Grid>
          <Grid item><AiFillRightCircle fontSize='3rem' /></Grid>
        </Grid>

        <Grid item xs={12} sm={12} lg={2} md={2}>
          <button className='export'>
            Exportar
          </button>
        </Grid>

      </Grid>
    </div>
  );
}