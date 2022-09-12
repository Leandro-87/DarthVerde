interface TituloProps{
    titulo: string
}

export default function Titulo(props: TituloProps){

    return <h1>{props.titulo}</h1>
    
}