import '../../styles/navBar.css'
import { BrandWidget } from './brandWidget'
import {CartWidget} from './cartWidget'

export const NavBar = () => {
    return (
        <nav className = 'navBarContainer'>
                <ul className = 'ulNavBar'>
                    <BrandWidget className = 'navBarLogo'/>
                    <li> Home </li>
                    <li> Sobre Nosotros </li>
                    <li> Contacto </li>
                    <CartWidget/>
                </ul>
        </nav>
    )
}