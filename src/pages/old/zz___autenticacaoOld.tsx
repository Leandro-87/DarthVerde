import Head from 'next/head'
import Image from 'next/image'
import Button from '../../component/template/Button'
import Header from '../../component/template/Header'
import styles from '../styles/Home.module.css'
import AuthInput from '../../component/auth/AuthInput'
import { useState } from 'react'
import useAuth from '../../component/data/hook/useAuth'

export default function Autenticacao() {

  const {usuario, loginGoogle} = useAuth()

  const [erro, setErro] = useState(null)
  const [modo, setModo] = useState<'login' | 'cadastro'>('login')
  const [email, setEmail] = useState('')
  const [senha, setSenha] = useState('')

  function exibirErro(msg, tempo = 5){
    setErro(msg)
    setTimeout(() => setErro(null), tempo * 1000)
  }

  function submeter(){
    if(modo === 'login'){
      console.log('Login')
      exibirErro('Algo deu errado!')
    } else {
      console.log('Cadastro')
      exibirErro('Algo deu errado em seu cadastro!')
    }
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Darth Verde - Idéias para o Palmeiras</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header logotipo='Logo' />
      
      <main className={styles.main}>
        <div className='flex flex-col'>
          <h1>{
            modo === 'login' ? 'Entrar' : 'Cadastre-se'}
          </h1>
          {erro ? (

            <div className='bg-red-500 text-white py-3 px-5 my-3 text-center rounded-lg' >
              {erro}
            </div>
          ) : false}

          <AuthInput label='Email' tipo='email' valor={email} valorMudou={setEmail} obrigatorio /> 
          <AuthInput label='Senha' tipo='password' valor={senha} valorMudou={setSenha} obrigatorio /> 
          <button onClick={submeter} className={``}>
            {modo === 'login' ? 'ENTRAR' : 'CADASTRAR'}
          </button>
          <button onClick={loginGoogle} className={``}>
            Entrar com Google
          </button>
          {modo === 'login' ?
            <p>Não tem cadastro? <a onClick={() => setModo('cadastro')}>Cadastrar com google</a></p>
          : <p>Já tenho cadastro <a onClick={() => setModo('login')}>Logar</a></p>

          }
          <hr />
        </div>
      </main>

      
    </div>
  )
}