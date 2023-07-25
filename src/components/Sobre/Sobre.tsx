import { Titulo } from '../Titulo/Titulo'
import { Paragrafo } from '../Paragrafo/Paragrafo'
import { GithubSecao } from './SobreStyle'

export function Sobre() {
  return (
    <section>
      <Titulo fontSize={16}>Sobre mim</Titulo>
      <Paragrafo tipo="secundario">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolores
        placeat magnam laboriosam ullam molestias fuga velit dicta. Esse
        voluptas pariatur soluta itaque vel dicta suscipit, aperiam sunt rem
        vero eligendi!
      </Paragrafo>
      <GithubSecao>
        <img src="https://github-readme-stats.vercel.app/api?username=William-WSilva&show_icons=true&theme=dracula&include_all_commits=true&count_private=true" />
        <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=William-WSilva&layout=compact&langs_count=7&theme=dracula" />
      </GithubSecao>
    </section>
  )
}
