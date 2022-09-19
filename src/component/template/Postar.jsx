import { useState } from 'react'
import style from './css/Postar.module.css'

import firebase from '../../services/firebaseConnection'
import useAuth from '../data/hook/useAuth'
import { IconPlus, IconPostar } from '../icons'
import Button from './Button'

//import enviaPost from '../data/hook/enviaPost'

export default function Postar(props){

    const [titulo, setTitulo] = useState('')
    const [mensagem, setMensagem] = useState('')
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
        if(mensagem === '' || titulo === ''){
            alert('A mensagem ou título não pode ser vazio!')
            return;
        } 
        
        
        const doc = await firebase.firestore().collection('posts')
        .add({
            created: new Date(),
            titulo: titulo,
            mensagem: mensagem,
            userImg: usuario.imagemUrl,
            userName: usuario.nome,
            userId: usuario.uid
        })
        let data = {
            id: doc.id,
            created: new Date(),
            createdFormated: new Date().toLocaleDateString('pt-BR'),
            titulo: titulo,
            mensagem: mensagem,
            userId: usuario.uid,
            userName: usuario.nome
        };
        setTimeline([...timeline, data]);
        setMensagem('')
        setTitulo('')

     
    }   
        
    return (
        <>
            { usuario ? (
            <div className={style.card}>
                
                <div className='flexCentro'>
                    <span>Deixe seu comentário</span>
                    <button id='mostraAreaPostar' onClick={mostraTextarea} className={style.add}>{IconPlus}</button>
                </div>
                <div id='areaPostar' className={style.formPost} style={{display:'none'}}>
                    <form id='enviaPost' onSubmit={addPost}>
                        <input type="text" name='tituloMensagem' className={style.inputArea} id='tituloMensagem' placeholder='Título da sua mensagem'
                            value={titulo}
                            onChange={(e) => setTitulo(e.target.value)}
                        />
                        <textarea name="mensagem" id="mensagem" className={style.inputArea} placeholder='Sua mensagem para o verdão' cols="30" rows="10"
                            value={mensagem} 
                            onChange={(e) => setMensagem(e.target.value)}
                        />
                        <div style={{display:'flex', justifyContent: 'flex-end'}}>
                            <Button value='Postar' type='submit' id='submitPost' margin='0' padding='10' icone={IconPostar} />
                        </div>
                        {/*<button type='submit' id='submitPost' /*onClick={btnEnviaPost} //\\ >Postar</button> */}
                        
                    </form>
                </div>
            </div>
            ) : 
            <h3 className={style.deveLogar}>Você deve logar para enviar alguma mensagem</h3>
            }
            
            
                {/*timeline.map( post => (
                    <Link href={`post/${post.id}`} key={post.id}>
                        <h1>{post.mensagem}</h1>
                    </Link>
                ))*/}
            
              
        </>
    )
}