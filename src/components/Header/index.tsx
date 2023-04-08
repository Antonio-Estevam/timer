import { HeaderConteiner } from './styles'
import { Scroll, Timer } from 'phosphor-react'

import igniteLogo from '../../assets/Ignite-logo.svg'
import { NavLink } from 'react-router-dom'

export function Header() {
  return (
    <HeaderConteiner>
      <img src={igniteLogo} alt="" title="Timer" />
      <nav>
        <NavLink to="/" title="Timer">
          <Timer size={24} />
        </NavLink>
        <NavLink to="history" title="Histórico">
          <Scroll size={24} />
        </NavLink>
      </nav>
    </HeaderConteiner>
  )
}
