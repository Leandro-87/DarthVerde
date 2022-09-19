import Link from "next/link";

export default function Logo(){
    return(
        <div style={{width:45, height:45, cursor:'pointer'}}>
            <Link href='/'>
                <img src="/images/darth-verde.png" alt="" />
            </Link>
        </div>
    )
}