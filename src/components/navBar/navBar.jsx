import '../../styles/navBar.css'
import { BrandWidget } from './brandWidget'
import {CartWidget} from './cartWidget';
import { Link } from 'react-router-dom';

export const NavBar = () => {

    return (
        <nav className = 'navBarContainer'>
                <ul className = 'ulNavBar'>
                    <BrandWidget className = 'navBarLogo' />
                    <Link to = '/category/Mac'><li>Mac</li></Link>
                    <Link to = '/category/iPad'><li>iPad</li></Link>
                    <Link to = '/category/iPhone'><li>iPhone</li></Link>
                    <Link to = '/category/Watch'><li>Watch</li></Link>
                    <Link to = '/category/AirPods'><li>AirPods</li></Link>
                    <CartWidget/>
                </ul>
        </nav>
    )
}
