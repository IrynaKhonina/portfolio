
import { S } from '../header-menu_styles'
import { Menu, type MenuItem } from '@/layout'

type Props = {
  menuItems: MenuItem[]
}

export const DesktopMenu = ({ menuItems }: Props) => {
  return (
    <S.Nav>
      <Menu menuItems={menuItems} />
    </S.Nav>
  )
}
