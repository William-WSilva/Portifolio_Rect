import { Titulo as TituloStyle } from './Styles'

export type Props = {
  children: string
  fontSize?: number
}

export function Titulo({ children, fontSize }: Props) {
  return <TituloStyle fontSize={14}>{children}</TituloStyle>
}
