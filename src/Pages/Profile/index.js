import React, { useEffect, useState } from "react";
import './styles.css';
import Navbar from '../../Components/Navbar/index';
import { useNavigate } from "react-router-dom";
import api from "../../Services/api";

export default function Profile() {
  // const [lista, setLista] = useState([]);
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const id = localStorage.getItem('token');
  const [novo_nome, setNovoNome] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    pegarDados();
  }, [])

  async function pegarDados(){
    await api.get('/usuarios/' + JSON.parse(id)).then(res => {
      let usuario = res.data;
      setNome(usuario['nome']);
      setEmail(usuario['email']);
      setSenha(usuario['senha']);
    });
    
  }

  async function mudarNome(){
    let data = {"id": JSON.parse(id), "nome":novo_nome, email, senha};
    await api.put('/usuarios/' + JSON.parse(id), data);
    alert('Nome modificado com sucesso');
    pegarDados();
  }
  
  function sair(){
    localStorage.removeItem('token');
    navigate('/login');
  }

  async function deletarConta(){
    //Tem certeza disso?
    await api.delete('/usuarios/' + JSON.parse(id));
    alert('Conta deletada');
    sair();
  }

  return (
    <div>
      <Navbar />
      <div className='center'>
        <div className='content'>
          <div className="col">
              <div className='nome-usuario'>{nome}</div>
              <div className="formItem">
                <label for="nome">Novo Nome</label>
                  <input className="caixa-de-texto" type="text" name="nome" placeholder="Insira o novo nome aqui" size={25} onChange={e => setNovoNome(e.target.value)}/>
              </div>
              <div className="formItem"> 
                <div className='button-area'>
                  <button onClick={() => mudarNome()}>Mudar Nome</button>
                </div>
              </div>
              <div className="formItem">
                <div className='button-area'>
                  <button onClick={() => deletarConta()}>Deletar Conta</button>
                </div>
              </div>
              <div className="formItem">
                <div className='button-area'>
                  <button onClick={() => sair()}>Sair</button>
                </div>
              </div>
          </div>
        </div>
      </div>
    </div>
  )
}