import Link from "next/link"
import style from './css/MenuItem.module.css'

interface MenuItemProps {
    url?: string
    texto: string
    icone: any
    estilo?: any
    show?: any
    onClick?: (evento: any) => void
    className?: string
}

export default function MenuItem(props: MenuItemProps){
    function renderizarLink(){
        return(
            <a onClick={props.onClick} className={style.a} style={props.estilo}>
                    {props.icone}
                    <span>
                        {props.texto}
                    </span>
                </a>
            )
        }
    return (
        <li className={props.className}>
            {props.url ? (
                <Link href={props.url}>
                    {renderizarLink()}
                </Link>
            ) : (
                renderizarLink()
            )}
        </li>
    )
}