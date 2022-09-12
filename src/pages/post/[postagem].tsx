import { useRouter } from "next/router"
import Layout from "../../component/template/Layout"
import PostBox from '../../component/template/PostBox'

export default function Post(){

  const router = useRouter()
  const tituloMensagem = router.query.postagem

  //console.log(router)

  return (
    <Layout title={tituloMensagem}>


      {/*<PostBox big
        tituloMensagem={tituloMensagem}
        mensagem={props.mensagem}
        url={tituloMensagem}
  />*/}

      <PostBox big
        tituloMensagem={tituloMensagem}
        mensagem='Mensagem pagina interna'
        url={tituloMensagem}
      />
        
    </Layout>
  )
}
