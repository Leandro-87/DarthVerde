import { IconHome, IconLogin, IconLogout } from "../icons"
import MenuItem from "./MenuItem"
import style from './css/Header.module.css'
import Logo from "./Logo"
import Autenticacao from "../../pages/autenticacao"
import AvatarUsuario from "./AvatarUsuario"
import useAuth from "../data/hook/useAuth"


export default function Header(props){

    const { logout } = useAuth()

    return(
        <>
        <div className={style.header}>
            <Logo />
            <ul>
                <MenuItem url='/' texto='Home' icone={IconHome} />
                <Autenticacao icone={IconLogin} />
                <span id="hideNotLogin" className="hide">
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