import EstiloGlobal, { Container } from './styles'
import { Sidebar } from './containers/Sidebar/Sidebar'
import { Sobre } from './components/Sobre/Sobre'
import { Projetos } from './components/Projetos/Projetos'

function App() {
  return (
    <>
      <EstiloGlobal />
      <Container>
        <Sidebar />
        <main>
          <Sobre />
          <Projetos />
        </main>
      </Container>
    </>
  )
}

export default App
