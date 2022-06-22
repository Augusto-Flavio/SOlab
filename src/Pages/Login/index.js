import React, { useEffect, useState } from "react";
import './styles.css';
import Navbar from '../../Components/Navbar/index';
import { useNavigate } from "react-router-dom";
import api from "../../Services/api";

export default function Login() {
  const [lista, setLista] = useState([]);
  const [login_email, setLoginEmail] = useState('');
  const [login_senha, setLoginSenha] = useState('');
  const [id, setId] = useState('');
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [csenha, setCsenha] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    listarDados();
    gerarId();
  }, [])

  async function listarDados(){
    await api.get('/usuarios').then(res => {
      setLista(res.data);
    });
  }

  async function gerarId(){
    await api.get('/usuarios/count').then(res => {
      setId(JSON.stringify(res.data["count"] + 1));
    });
  }

  function validarLogin(){    
    if (lista.some(i => i['email'] === login_email && i['senha'] === login_senha)){
      // navigate('/profile');
      alert('logado');
    } else if (lista.some(i => i['email'] === login_email && i['senha'] !== login_senha)){
      alert('Senha incorreta.');
    } else{
      alert('Endereço de e-mail não cadastrado.');
    }
  }

  async function validarCadastro(){
    if (nome === '' || email === '' || senha === '' || csenha === ''){
      alert("Não deixe campos vazios.");
    } else if (lista.some(i => i['email'] === email)){
      alert("Este endereço de e-mail já está cadastrado.");
    } else if (csenha.length < 8){
      alert("A senha precisa possuir no mínimo 8 caracteres.");
    } else if (senha !== csenha){
      alert("As senhas não coincidem.");
    } else{
      let data = {id, nome, email, senha};
      await api.post('/usuarios', data);
      gerarId();
      await api.get('/usuarios').then(res => {
        console.log(res.data);
      });
    }
  }

  return (
    <div>
      <Navbar />
      <div className='center'>
        <div className='content'>
          <div className="col">
            <div className='titulo'>Login</div>
            <form name="login">
              <div className="formItem">
                <label for="email">E-mail</label>
                <input className="caixa-de-texto" type="email" name="email" size={30} onChange={e => setLoginEmail(e.target.value)} required/>
              </div>
              <div className="formItem">
                <label for="senha">Senha</label>
                <input className="caixa-de-texto" type="password" name="senha" minLength={8} size={30} onChange={e => setLoginSenha(e.target.value)} required/>
              </div>
              <div className='button-area'>
                <button onClick={() => validarLogin()}>Entrar</button>
              </div>
            </form>
          </div>
          <div className="col">
            <div className='titulo'>Cadastro</div>
            <div className="form" name="cadastro">
              <div className="formItem">
                <label for="nome">Nome Completo</label>
                <input className="caixa-de-texto" type="text" name="nome" size={30} onChange={e => setNome(e.target.value)} required/>
              </div>
              <div className="formItem">
                <label for="email">E-mail</label>
                <input className="caixa-de-texto" type="email" name="email" size={30} onChange={e => setEmail(e.target.value)} required/>
              </div>
              <div className="formItem">
                <label for="senha">Senha</label>
                <input className="caixa-de-texto" type="password" name="senha" minLength={8} size={30} onChange={e => setSenha(e.target.value)} required/>
              </div>
              <div className="formItem">
                <label for="csenha">Confirmar Senha</label>
                <input className="caixa-de-texto" type="password" name="csenha" minLength={8} size={30} onChange={e => setCsenha(e.target.value)} required/>
              </div>
              <div className='button-area'>
                <button onClick={() => validarCadastro()}>Cadastrar</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}