import { Avatar } from '../../components/Avatar/Avatar'
import { Paragrafo } from '../../components/Paragrafo/Paragrafo'
import { Titulo } from '../../components/Titulo/Titulo'

import { Descricao, BotaoTema, SidebarContainer } from './SidebarStyle'

export function Sidebar() {
  return (
    <aside>
      <SidebarContainer>
        <Avatar />
        <Titulo fontSize={24}>William Silva</Titulo>
        <Paragrafo tipo="secundario" fontSize={14}>
          William-WSilva
        </Paragrafo>
        <Descricao tipo="principal" fontSize={12}>
          Engenheiro Front-end
        </Descricao>
        <BotaoTema>Trocar tema</BotaoTema>
      </SidebarContainer>
    </aside>
  )
}
