import { ThemeProvider } from 'styled-components'
import Header from './components/Cabecalho'
import Hero from './components/Hero'
import ListaVagas from './containers/ListaVagas'

import './global.css'
import Theme from './theme/theme'

function App() {
  return (
    <ThemeProvider theme={Theme}>
      <Header> EBAC Jobs </Header>
      <Hero />
      <div className="container">
        <ListaVagas />
      </div>
    </ThemeProvider>
  )
}

export default App
