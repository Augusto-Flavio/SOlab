import React, { useEffect, useState } from "react";
import './styles.css';
import Navbar from '../../Components/Navbar/index';
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function Profile() {
  const [lista, setLista] = useState([]);
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [nome, setNome] = useState('');
  const [cemail, setCemail] = useState('');
  const [csenha, setCsenha] = useState('');
  const [ccsenha, setCcsenha] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    separarDados();
  }, [])

  async function separarDados(){
    const res = await axios.get("http://192.168.1.21/api/dados.php");
    setLista(res.data.result);
    // setNome()
  }

  return (
    <div>
      <Navbar />
      <div className='center'>
        <div className='content'>
          <div className="col">
            <div className='title'>Login</div>
              <div className="formItem">
                <input type="button" value="Mudar Nome"/>
                <input type="button" value="Excluir Conta"/>
              </div>
          </div>
        </div>
      </div>
    </div>
  )
}