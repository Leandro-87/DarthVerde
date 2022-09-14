import Layout from "../component/template/Layout"
import PostBox from '../component/template/PostBox'
import Postar from '../component/template/Postar'

import useAuth from "../component/data/hook/useAuth"
import firebase from '../services/firebaseConnection'

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
    <Layout title='Darth Verde é Palmeiras!'>

    <Postar/>

      
        {posts.map((post, index)=>{
            return(
                <PostBox userImage={post.userImg} userName={post.userName} mid key={index} post={post} tituloMensagem={post.titulo} mensagem={post.mensagem} url={`/post/${post.id}`}/>

            )
        })}

    </Layout>
  )
}