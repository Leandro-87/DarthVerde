import { useRouter } from "next/router"

export default function Comentario(){

    const router = useRouter()
    const pathname = router.pathname

    return(
        <>
            {pathname == '/post/[postagem]' ? (
                <div className="mv2">
                    <div className="mr4">avatar | nome do cabra</div>
                    <p>
                        Comentario
                    </p>
                </div>
                

            ): null}
        </>
    )
}