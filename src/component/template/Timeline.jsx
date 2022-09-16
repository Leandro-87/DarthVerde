import PostBox from './PostBox'
import useAuth from '../data/hook/useAuth'
import firebase from '../../services/firebaseConnection'

import { useEffect, useState } from "react"

export default function Home(){

  const {usuario} = useAuth()
  const [posts, setPosts] = useState([])

    useEffect(() => {
        firebase.firestore().collection('posts').orderBy('created', 'desc').onSnapshot((snapshot)=>{
            let lista = [];
            //console.log(snapshot);
            snapshot.forEach((doc)=>{
                lista.push({
                    id: doc.id,
                    created: doc.data().created,
                    createdFormated: new Date().toLocaleDateString('pt-BR'),
                    titulo: doc.data().titulo,
                    mensagem: doc.data().mensagem,
                    userId: doc.data().userId,
                    userName: doc.data().userName,
                    userImg: doc.data().userImg
                })
            })
            setPosts(lista)
        })
    },[])

  return (
    <>
        {posts.map((post, index)=>{
            return(
                <PostBox mid userImage={post.userImg} userName={post.userName} key={index} post={post} tituloMensagem={post.titulo} mensagem={post.mensagem} url={`/post/${post.id}`}/>

            )
        })}
    </>
    
  )
}