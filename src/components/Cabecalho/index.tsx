import { HeaderT } from './style'

export type Props = {
  children: string
}

const Cabecalho = ({ children }: Props) => {
  return <HeaderT>{children}</HeaderT>
}

export default Cabecalho
