import Aside from './Aside'
import Conteudo from './Conteudo'
import Header from './Header'
import Titulo from "./Titulo"
import style from './css/Layout.module.css'
import Head from 'next/head'


export default function Layout(props){
    return (
        <>
            <Head>
                <title>{props.title}</title>
            </Head>
            
            <Header />
            <div className={style.container}>
                <div className={style.main}>
                    <Titulo titulo={props.titulo} />
                    <Conteudo>
                        {props.children}
                    </Conteudo>
                </div>
                <aside className={style.aside}>
                    <Aside />
                </aside>
            </div>
        </>
    )
}