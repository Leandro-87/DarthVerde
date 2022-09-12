interface ConteudoProps{
    children?: any
}

export default function Conteudo(props: ConteudoProps){

    return(
       <>
        {props.children}
       </>
    )
}