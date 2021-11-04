import '../../styles/navBar.css'
import { BrandWidget } from './brandWidget'
import {CartWidget} from './cartWidget';
import { Link } from 'react-router-dom';
import Products from '../../products.json';

export const NavBar = () => {
    return (
        <nav className = 'navBarContainer'>
                <ul className = 'ulNavBar'>
                    <BrandWidget className = 'navBarLogo' />
                    {Products.map ((links) => (
                        <Link key={links.id} to ={`/category/${links.category}`}>
                            <li> {links.category} </li>
                        </Link>
                    ))}
                    <CartWidget/>
                </ul>
        </nav>
    )
}