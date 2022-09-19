import style from './css/Post.module.css'
import Link from 'next/link'
import Comentario from './Comentario'
import { useRouter } from 'next/router'
import { IconComent, IconLike } from '../icons'
import Button from './Button'
import { useState } from 'react'

export default function PostBox(props){

    const router = useRouter()
    const pathname = router.pathname

    const [avanti, setAvanti] = useState('0')

    function botaoAvanti(){
        setAvanti(+1)
       
    }

    function comentario(){
        alert('teste botao comentario')
    }

    function cardPost(tamanhoFont){
        return (
            
               
                    <article className={style.card}>
                        <header>
                            <img src={props.userImage}/>
                            <span>{props.userName}</span>
                            <p>{avanti} AVANTI</p>
                        </header>
                        <Link href={props.url ?? ''}>
                            <div className={style.areaMensagem}>
                                <h1>{props.tituloMensagem}</h1>
                                <p className='post' style={{fontSize: tamanhoFont }}>{props.mensagem}</p>
                                <Comentario/>
                                {pathname == '/post/[postagem]' ? (
                                    <div className='flexDireita'>
                                         <Button onClick={comentario} value='Comentar' type='submit' id='comentar' margin='0' padding='10' icone={IconComent} />
                                    </div>
                                ) : 
                                null
                                }
                            </div>
                        </Link>
                        <Button className={style.avanti} id='btAvanti' onClick={botaoAvanti}
                                icone={IconLike} value='AVANTI' margin='20' color='rgb(3, 70, 49)'
                                paddingHorizontal={22} paddingVertical={15} bg='#FFF' shadow='none' />
                        
                    </article>
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
