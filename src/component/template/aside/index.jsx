import useAppData from "../../data/hook/useAppData";
import ItemAside from "./ItemAside"
import style from './Aside.module.css'

export default function Aside(){

    const dados = useAppData()
    return (
        <>
            <aside className={style.aside}>
                
                <ItemAside conteudo={<a class="twitter-timeline" data-width="345" data-height="400" data-theme="light" href="https://twitter.com/Palmeiras?ref_src=twsrc%5Etfw">Tweets Palestrinos</a>}/>
                <ItemAside conteudo='item 2'/>
            </aside>
            <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
        </>
    )
}