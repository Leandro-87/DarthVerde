import { AppProvider } from '../component/data/context/AppContext'
import { AuthProvider } from '../component/data/context/AuthContext'
import '../styles/globals.css'
import '../styles/darthVerde.css'

function MyApp({ Component, pageProps }) {
  
  return (
    <AppProvider>
      <AuthProvider>
        <Component {...pageProps} />
      </AuthProvider>
    </AppProvider>
  )
}

export default MyApp
