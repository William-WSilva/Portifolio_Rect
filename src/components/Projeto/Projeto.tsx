import { Paragrafo } from '../Paragrafo/Paragrafo'
import { Titulo } from '../Titulo/Titulo'

import { Card, LinkBotao } from './ProjetoStyle'

export function Projeto() {
  return (
    <Card>
      <Titulo>Projeto Lista de tarefas</Titulo>
      <Paragrafo tipo="secundario">Lista de tarefas feita com VueJS</Paragrafo>
      <LinkBotao>Visualizar</LinkBotao>
    </Card>
  )
}
