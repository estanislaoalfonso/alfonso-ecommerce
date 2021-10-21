import '../../styles/navBar.css'
import {CartWidget} from './cartWidget'

export const NavBar = () => {
    return (
        <nav className = 'navBarContainer'>
                <ul className = 'ulNavBar'>
                <h1 className = 'navBarLogo'> iCommerce </h1>
                    <li> Home </li>
                    <li> Sobre Nosotros </li>
                    <li> Contacto </li>
                    <CartWidget/>
                </ul>
        </nav>
    )
}