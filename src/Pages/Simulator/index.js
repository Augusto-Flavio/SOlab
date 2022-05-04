import React from 'react';
import ControlsSimulator from '../../Components/ControlsSimulator/';
import { getTitle, getSubtype } from './utils.js'
import {
  Grid
} from '@mui/material';
import './styles.css';
import { BsArrowLeftCircleFill } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';

export default function Simulator(props) {

  const navigate = useNavigate();

  let local = window.location.href.split('/');
  const type = local.pop();
  const globalType = local.pop();



  return (

    <>
      <Grid container justifyContent='center' style={{ marginTop: 20, color: 'white' }}>

        <Grid
          item
          style={{ cursor: 'pointer' }}
          onClick={() => { navigate(-1) }}
        >
          <BsArrowLeftCircleFill fontSize={40} />
        </Grid>

        <Grid item xs={11} sm={11} md={11} lg={11} >
          <div className='show-local'>
            <span>
              {getTitle(globalType)}
              /
            </span>
            <span>
              {getSubtype(type)}
            </span>
          </div>
        </Grid>
      </Grid>


      <ControlsSimulator />
    </>
  );
}