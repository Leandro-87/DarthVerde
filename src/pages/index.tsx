import Layout from "../component/template/Layout"
import PostBox from '../component/template/PostBox'
import Postar from '../component/template/Postar'

import useAuth from "../component/data/hook/useAuth"

export default function Home(){

  const {usuario} = useAuth()



  return (
    <Layout title='Darth Verde é Palmeiras!'>

    <Postar/>

      

      <PostBox mid tituloMensagem='Titulo' mensagem='Tem que puxar esse texto para a pagina de post' url="/post/Titulo"/>
      <PostBox big tituloMensagem='Titulo 2' mensagem='Alguma mensagem curta' url="/post/Titulo 2"/>
      <PostBox tituloMensagem='Titulo 3' mensagem='Alguma mensagem grande para o texto ficar pequeno, os outros foram grande e medio' url="/post/Titulo 3"/>
    </Layout>
  )
}