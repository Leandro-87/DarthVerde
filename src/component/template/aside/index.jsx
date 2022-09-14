import useAppData from "../../data/hook/useAppData";
import ItemAside from "./ItemAside"
import style from './Aside.module.css'

export default function Aside(){

    const dados = useAppData()
    return (
        <aside className={style.aside}>
            <ItemAside conteudo='item 1'/>
            <ItemAside conteudo='item 2'/>
            
        </aside>
    )
}