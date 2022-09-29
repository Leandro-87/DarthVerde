import ForcarAutenticacao from "../component/auth/ForcarAutenticacao"
import Layout from "../component/template/Layout"
import { useEffect , useState } from "react"
import PostBox from '../component/template/PostBox'
import firebase from '../services/firebaseConnection'
import useAuth from "../component/data/hook/useAuth"

export default function Perfil(){

  const [posts, setPosts] = useState([])
  const {usuario} = useAuth()
  
  
  useEffect(() => {
    firebase.firestore().collection('posts').where('userId', '==', `${usuario?.uid}`).get().then(snapshot => {
      let lista = [];
        snapshot.docs.forEach(doc =>{
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
        //console.log(lista)
    })
},[usuario])

return (
  <ForcarAutenticacao>
  
    <Layout title='Perfil do usuario'>

      <p><img src={usuario?.imagemUrl} alt={usuario?.imagemUrl} title={`Usuário: ${usuario?.nome}`} /> </p>
      <p>{usuario?.nome}</p>
      <p>{usuario?.email}</p>
      <p>{usuario?.provedor}</p>
      <br />

      <h2>Suas postagens:</h2>
      {posts.map((post, index)=>{
        return(
          <PostBox mid userImage={post.userImg} userName={post.userName} key={index} post={post} tituloMensagem={post.titulo} mensagem={post.mensagem} url={`/post/${post.id}`}/>
        )
      })}

    </Layout>
    </ForcarAutenticacao>
  )
}