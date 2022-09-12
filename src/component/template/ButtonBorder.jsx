import router from 'next/router'

export default function ButtonBorder(props){

    return(
        <>
            <button 
                onClick={() => router.push(props.rota)}
                style={{padding: 10, backgroundColor: 'transparent', color: '#FFF', borderRadius: 2, fontWeight: 'bold', margin: 10, borderWidth: 1, borderColor: "#FFF", borderStyle: 'solid'}}>
                {props.value}
            </button>
        </>
    )
}