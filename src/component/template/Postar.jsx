import { useState } from 'react'
import style from './css/Postar.module.css'
import Link from 'next/link'

import firebase from '../../services/firebaseConnection'
import useAuth from '../data/hook/useAuth'
import {format} from 'date-fns'

//import enviaPost from '../data/hook/enviaPost'

export default function Postar(props){

    const [tituloInput, setTituloInput] = useState('')
    const [input, setInput] = useState('')
    const [timeline, setTimeline] = useState([])

    const {usuario} = useAuth()
    
    function mostraTextarea(){
        const areaPost = document.getElementById('areaPostar')
        if(areaPost.style.display === 'flex'){
            areaPost.style.display = 'none';
        } else {
            areaPost.style.display = 'flex'
        }
         
    }

    async function addPost(e){
        e.preventDefault()
        if(input === '' || tituloInput === ''){
            alert('A mensagem ou título não pode ser vazio!')
            return;
        } 
        
        await firebase.firestore().collection('posts')
        .add({
            created: new Date(),
            titulo: tituloInput,
            mensagem: input,
            userImg: usuario.imagemUrl,
            userName: usuario.nome,
            userId: usuario.uid
        })
        .then((doc)=>{
            console.log('CADASTRAAAAAAADOOOO');
            let data = {
                id: doc.id,
                created: new Date(),
                createdFormated: format(new Date(), 'dd MMMM yyyy'),
                titulo: tituloInput,
                mensagem: input,
                userId: usuario.uid,
                userName: usuario.nome
            };

        setTimeline([...timeline, data]);
        setInput('')
        setTituloInput('')

        })
        .catch((err)=>{
            console.log('Deu algum b.o', err)
        })
        
    }

        /*   -------------------------------AQUI ERA PRA FUNCIONAR O FEED COM TODAS AS MENSAGENS ENVIADAS MAS NAO VAI ----------------------------------- */ 

        const feed = firebase.firestore().collection('posts').orderBy('created', 'asc' ).get(); 
        
        /*

           --------------------------------------- ESTE BLOCO A BAIXO ERA PRA MOSTRAR AS POSTAGENS QUE ESTÃO NO BANCO -----------------------------------
                                                                mas da erro se descomentar, pode ver

        const data = JSON.stringify(feed.docs.map( u => {
            return {
                id: u.id,
                createdFormated: format(u.data().created.toDate(), 'dd MMMM yyyy'),
                ...u.data(),
            }
        }))*/
       
    
        
    return (
        <>
            <div className={style.card}>
                
                <div>
                    <span>Deixe seu comentário</span>
                    <button id='mostraAreaPostar' onClick={mostraTextarea} className={style.add}>+</button>
                </div>
                <div id='areaPostar' className={style.formPost} style={{display:'none'}}>
                    <form id='enviaPost' onSubmit={addPost}>
                        <input type="text" name='tituloMensagem' className={style.inputArea} id='tituloMensagem' placeholder='Título da sua mensagem'
                            value={tituloInput}
                            onChange={(e) => setTituloInput(e.target.value)}
                        />
                        <textarea name="mensagem" id="mensagem" className={style.inputArea} placeholder='Sua mensagem para o verdão' cols="30" rows="10"
                            value={input} 
                            onChange={(e) => setInput(e.target.value)}
                        />
                        <button type='submit' id='submitPost' /*onClick={btnEnviaPost}*/>Postar</button>
                    </form>
                </div>
            </div>
            {/*
            
                {timeline.map( post => (
                    <Link href={`post/${post.id}`}>
                        <h1>{post.mensagem}</h1>
                    </Link>
                ))}
            
               */}
        </>
    )
}