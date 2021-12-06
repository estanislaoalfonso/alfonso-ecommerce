import '../../styles/itemDetail.css';
import {ItemCount} from '../counter/itemCount.jsx';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useCartContext } from '../../context/CartContext';



const ItemDetail = ({productsDetail}) => {
    const [flag, setFlag] = useState (true)
    const [itemQuantity, setItemQuantity] = useState (1);
    const {cart, handleIsInCart, inCart, addItem, sumarTotales} = useCartContext ();

    useEffect (() => {
        console.log('Se ejecutó el UseEffect');
        handleIsInCart(productsDetail);
    }, [cart, handleIsInCart,productsDetail ]);

    const addToBag = () => {
        //productsDetail = Lo recibo en la función al inicio, en la linea 9, que viene como parametro asignado en el return del itemDetailContainer.
        //itemQuantity = Viene del estado, que se setea con las 2 funciones add o remove.
        const itemFinded = cart.findIndex(product => product.id === productsDetail.id);
        addItem (productsDetail, itemQuantity);
        sumarTotales(cart);
        if (itemFinded <= 0) {
            setFlag (false);
        }
    }
    // console.log (cart);

    const add = () => {
        if (itemQuantity >= productsDetail.stock) {
            alert ('No puedes comprar más del stock disponible');
        } else {
            setItemQuantity (itemQuantity + 1);
        }
    }

    const remove = () => {
        if (itemQuantity > 1) {
            setItemQuantity (itemQuantity - 1);
        } else {
            alert ('No puedes elegir menos de 1 producto para el carrito');
        }
    }

    return (
        <div className = "containerVh">
            <div className = 'itemDetailContainer'>
                <div className = 'itemDetailPhoto'>
                    <img src={productsDetail.photo} alt="Dispositivo Apple" className = "detailPhoto"/>
                </div>
                <div className = 'itemDetailDetail'>
                    <h2>{productsDetail.name}</h2>
                    <h3>$ {productsDetail.price}</h3>
                    <h4>{productsDetail.detail}</h4>
                    {inCart 
                    ? <button className = 'addToBagButton' > <Link to = "/cart"> Go to cart </Link></button>
                    :  <>
                        <div>
                            {flag && <ItemCount stock = {productsDetail.stock} itemQuantity = {itemQuantity} onAdd = {add} onRemove = {remove}/>}
                            {flag && <button onClick = {addToBag} className= 'addToBagButton' >Add to Bag</button>}
                        </div>
                        {/* <div>
                            {!flag && <button className = 'addToBagButton' > <Link to = "/cart"> Go to cart </Link></button>}
                        </div> */}
                        </>}
                </div>
            </div>
        </div>
    )
};

export default ItemDetail;