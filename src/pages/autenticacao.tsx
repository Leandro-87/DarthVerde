import { useState } from 'react'
import useAuth from '../component/data/hook/useAuth'
import style from '../component/template/css/MenuItem.module.css'


interface autenticacaoProps{
  icone?: any
  estilo?: any
}

export default function Autenticacao( props: autenticacaoProps) {

  const {usuario, loginGoogle} = useAuth()

  const [erro, setErro] = useState(null)
  const [modo, setModo] = useState<'login' | 'cadastro'>('login')


  function exibirErro(msg, tempo = 5){
    setErro(msg)
    setTimeout(() => setErro(null), tempo * 1000)
  }

  function submeter(){
    if(modo === 'login'){
      exibirErro('Algo deu errado!')
    } else {
      exibirErro('Algo deu errado em seu cadastro!')
    }
  }

  return (

        <>
        
          {erro ? (

            <div>
              {erro}
            </div>
          ) : false}

          <li id='btnLogin'>
            <button onClick={loginGoogle} className={style.a} style={props.estilo}>
              {props.icone} <span>Entrar com Google</span>
            </button>
          </li>

      </>

  )
}
