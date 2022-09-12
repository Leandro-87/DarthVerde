import Head from 'next/head'
import Image from 'next/image'
import Header from '../../component/template/Header'
import styles from '../styles/Home.module.css'

export default function Perfil() {

  return (
    <div className={styles.container}>
      <Head>
        <title>Cadastro - Darth Verde</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header logotipo='Palmeiras' />
      
      <main className={styles.main}>
        <h1>Perfil usuario</h1>
        <div className={styles.sidebar}>
          <h1>Sidebar</h1>
        </div>
      </main>

      
    </div>
  )
}
