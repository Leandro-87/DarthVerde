import router from 'next/router'

export default function Button(props){

   
    return(
        <>
            <button 
                onClick={() => router.push(props.rota)}
                style={{padding: 10, border: 0, backgroundColor: '#FFF', color: '#034631', borderRadius: 2, fontWeight: 'bold', margin: 10}}>
                {props.value}
            </button>
        </>
    )
}