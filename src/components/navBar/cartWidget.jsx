import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faShoppingBag} from '@fortawesome/free-solid-svg-icons';
import "../../styles/cartWidget.css";
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Dropdown, DropdownItem, DropdownMenu, DropdownToggle} from 'reactstrap'
import { useState } from "react";
import { useCartContext } from '../../context/cartContext';



export const CartWidget = () => {

    const [dropDown, setDropDown] = useState(false);
    const {cart} = useCartContext ();

    const openCloseDropDown = () => {
        setDropDown(!dropDown); 
    }

    let cantidadItemsEnCarrito = 0

    for (let i in cart) {
        cantidadItemsEnCarrito += cart[i].quantity;
    }

    return (
        <>
            {cart.length ? <Dropdown className = 'iconShoppingBag' isOpen = {dropDown} toggle = {openCloseDropDown} size= 'sm' >
            <DropdownToggle className = 'buttonDropdown'> 
                    <div className = 'iconNavBar'>
                        <FontAwesomeIcon icon = {faShoppingBag}/> <p className = 'quantNumber'>{cantidadItemsEnCarrito}</p>
                    </div>
            </DropdownToggle>
            <DropdownMenu>
                {cart.map ((product => (
                    <div key= {product.id}>
                    <DropdownItem className = 'dropDownContainer'> 
                        <div className = 'dropDownContainerIMG'> 
                            <img src={product.photo} alt='Dispositivo Apple' className = 'bagImg'></img>
                        </div>
                        <div>
                        <p className = 'prodDescName'>{product.name}</p> 
                        <p className = 'prodQuantDesc'>x{product.quantity}</p>
                        </div>
                    </DropdownItem>                    
                    <DropdownItem divider/>
                    </div>

                )))}
                <DropdownItem> <Link to = {'/cart'}> <button className = 'addToBagButton2'> Check Out </button> </Link> </DropdownItem>
                <DropdownItem divider/>
                <DropdownItem> <Link to = {'/cart'} className = 'bagWidgetAnchor'> Bag ({cantidadItemsEnCarrito}) </Link> </DropdownItem>
            </DropdownMenu>
        </Dropdown> : 
            <div className = 'iconNavBarTransparent'>
                <FontAwesomeIcon icon = {faShoppingBag}/>
            </div>}
        </>
    
    )
}