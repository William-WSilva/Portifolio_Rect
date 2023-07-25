import { ThemeProvider } from 'styled-components'
import EstiloGlobal, { Container } from './styles'
import { Sidebar } from './containers/Sidebar/Sidebar'
import { Sobre } from './components/Sobre/Sobre'
import { Projetos } from './components/Projetos/Projetos'
import TemaLight from './themes/light'
import TemaDark from './themes/dark'
import { useState } from 'react'

function App() {
  const [temaDark, setTema] = useState(true)
  function trocaTema() {
    setTema(!temaDark)
  }

  return (
    <ThemeProvider theme={temaDark ? TemaDark : TemaLight}>
      <EstiloGlobal />
      <Container>
        <Sidebar trocaTema={trocaTema} />
        <main>
          <Sobre />
          <Projetos />
        </main>
      </Container>
    </ThemeProvider>
  )
}

export default App
