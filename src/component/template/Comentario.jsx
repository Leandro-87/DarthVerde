import { useRouter } from "next/router"

export default function Comentario(){

    const router = useRouter()
    const pathname = router.pathname

    return(
        <>
            {pathname == '/post/[postagem]' ? (
                <div className="mv2">
                    <p>
                        Comentarios...
                    </p>
                </div>
                

            ): null}
        </>
    )
}