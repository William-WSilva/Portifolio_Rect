import { Projeto } from '../Projeto/Projeto'
import { Titulo } from '../Titulo/Titulo'
import { Lista } from './ProjetosStyle'

export function Projetos() {
  return (
    <section>
      <Titulo fontSize={16}>Projetos</Titulo>
      <Lista>
        <li>
          <Projeto />
        </li>
        <li>
          <Projeto />
        </li>
        <li>
          <Projeto />
        </li>
        <li>
          <Projeto />
        </li>
        <li>
          <Projeto />
        </li>
        <li>
          <Projeto />
        </li>
        <li>
          <Projeto />
        </li>
        <li>
          <Projeto />
        </li>
      </Lista>
    </section>
  )
}
