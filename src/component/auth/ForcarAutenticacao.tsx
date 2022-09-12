import Head from "next/head"
import Image from "next/image"
import Router from "next/router"
import loading from '../../../public/images/loading.gif'
import useAuth from "../data/hook/useAuth"

export default function ForcarAutenticacao(props){

    const {usuario, carregando} = useAuth()

    function renderizarConteudo(){
        return (
            <>
                <Head>
                    <script
                        dangerouslySetInnerHTML={{
                            __html: `
                              if(!document.cookie?.includes("admin-template-darthVerde-auth")) {
                                window.location.href = "/autenticacao"
                              }
                            `
                        }}
                    />
                </Head>
                {props.children}
            </>
        )
    }

    function renderizarCarregando(){
        return (
            <div style={{display:'flex', width:'100vw', height:'100vh', justifyContent:'center', alignItems:"center"}}>
                <Image src={loading} />
            </div>
        )
    }

    if(!carregando && usuario?.email) {
        return renderizarConteudo()
    } else if(carregando){
        return renderizarCarregando()
    } else {
        Router.push('/autenticacao')
        return null
    }

}