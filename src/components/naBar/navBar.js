import './navBar.css'

export const NavBar = () => {
    return (
        <nav className='navBarContainer'>
            <div className='navBarLogo'>
                <h1> Mi NavBar Logo </h1>
            </div>
            <div className='navBarLinks'> 
                <ul className='ulNavBar'>
                    <li>Home</li>
                    <li> Carrito </li>
                    <li> Sobre Nosotros </li>
                    <li> Contacto </li>
                </ul>
            </div>
        </nav>
    )
}