export default function Button(props){
   
return(
    <>
    <button 
        type={props.type}
        onClick={props.onClick}
        id={props.id}
        className={props.className}
        style={{backgroundColor: props.bg || '#034631', color: props.color || '#FFF', borderRadius: props.radius || 2,
                margin: props.margin || 10, paddingBlock: props.paddingVertical || 10, paddingInline: props.paddingHorizontal || 10, boxShadow: props.shadow || 'rgb(0 0 0 / 50%) 0px 1px 3px'}}
    >
        <div className='flexCentro'>
            <div style={{height: 22, width: 22, marginRight: 5}}>{props.icone}</div>
            {props.value}

        </div>
    </button>
    </>
)
}