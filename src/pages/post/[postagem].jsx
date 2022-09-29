import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import Layout from "../../component/template/Layout"
import PostBox from '../../component/template/PostBox'
import firebase from '../../services/firebaseConnection'

export default function Post(){

  const [posts, setPosts] = useState([])
  const router = useRouter()
  const idPost = router.query.postagem


  //console.log(router)
  useEffect(() => {
    firebase.firestore().collection('posts').onSnapshot((snapshot)=>{
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
       // console.log(lista)

    })
},[router])
  
  return (
    <Layout title={idPost}>

     
        
      {posts.map((post, index)=>{
        if(post.id == idPost){  
          return(
            <PostBox mid userImage={post.userImg} userName={post.userName} key={index} post={post} tituloMensagem={post.titulo} mensagem={post.mensagem} url={`post/`[post.id]}/>
          )
        }
      })}
     
        

        
    </Layout>
  )
}
