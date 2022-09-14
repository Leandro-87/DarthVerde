import style from './css/Post.module.css'
import Link from 'next/link'
import Comentario from './Comentario'
import { useRouter } from 'next/router'

export default function PostBox(props){

    const router = useRouter()
    const pathname = router.pathname

    function cardPost(tamanhoFont){
        return (
            <Link href={props.url ?? ''}>
               
                    <article className={style.card}>
                        <header>
                            <img src={props.userImage}/>
                            <span>{props.userName}</span>
                        </header>
                        <div>
                            <h1>{props.tituloMensagem}</h1>
                            <p className='post' style={{fontSize: tamanhoFont }}>{props.mensagem}</p>
                            <Comentario/>
                            {pathname == '/post/[postagem]' ? (
                                <div className='flexDireita'>
                                    <button className='button'>Comentar</button>
                                </div>
                            ) : 
                            <div className='flexDireita mt2'>
                                <small>206 comentários</small>
                            </div>
                            }
                        </div>
                    </article>
            </Link>
            )
        
    }

    if(props.big){
        return cardPost(30)
    } else if (props.mid){
        return cardPost(22)
    }  else {
        return cardPost()
    }
}
