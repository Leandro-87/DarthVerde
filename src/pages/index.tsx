import Layout from "../component/template/Layout"
import Postar from '../component/template/Postar'
import Timeline from "../component/template/Timeline"


export default function Home(props){
  return (
    <Layout title='Darth Verde é Palmeiras!'>
        <Postar/>
        <Timeline/>
    </Layout>
  )
}