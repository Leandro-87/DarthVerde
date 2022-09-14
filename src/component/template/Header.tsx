import { IconHome, IconLogin, IconLogout } from "../icons"
import MenuItem from "./MenuItem"
import style from './css/Header.module.css'
import Logo from "./Logo"
import Autenticacao from "../../pages/autenticacao"
import AvatarUsuario from "./AvatarUsuario"
import useAuth from "../data/hook/useAuth"
import { useEffect } from "react"


export default function Header(props){

    const {usuario} = useAuth()

    useEffect(() => {
        if(usuario){
            
            document.getElementById('btnLogin').style.display = 'none'
            document.getElementById('hideNotLogin').style.display = 'flex'
            
        } else {
            document.getElementById('btnLogin').style.display = 'flex'
            document.getElementById('hideNotLogin').style.display = 'none'

        }
    }, [usuario])

    const { logout } = useAuth()

    return(
        <>
        <div className={style.header}>
            <Logo />
            <ul>
                <MenuItem url='/' texto='Home' icone={IconHome} />
                <Autenticacao icone={IconLogin} />
                <span id="hideNotLogin">
                    <AvatarUsuario/>
                    <MenuItem 
                        url="/" 
                        onClick={logout} 
                        texto='Sair'
                        icone={IconLogout}
                        estilo={{background:'transparent', color:'#FFF'}}
                    />
                </span>
            </ul>
        </div>
        
        </>
       
    )
}