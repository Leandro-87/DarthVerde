import Link from "next/link"
import useAuth from "../data/hook/useAuth"

interface AvatarUsuarioProps {
    className?: string
    
}

export default function AvatarUsuario(props:AvatarUsuarioProps){

    const {usuario} = useAuth()

    return (
       <li style={{cursor:'pointer'}}>
            <Link href='/perfil'>
                <img src={usuario?.imagemUrl ?? '/images/user.png'} 
                alt="Avatar"
                style={{width:40, height:40, borderRadius:100}}
                className={props.className} />
            </Link>
        
        </li>
        
    )
}