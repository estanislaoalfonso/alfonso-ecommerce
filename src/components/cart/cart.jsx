import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useCartContext } from '../../context/CartContext'
import '../../styles/cart.css'

export const Cart = () => {
    const {cart, removeItem, addMoreItems, clear, totalFinal, sumarTotales} = useCartContext();
    console.log (cart);
    
    useEffect (() => {
        sumarTotales(cart);
    }, [cart, sumarTotales])


    //Total individual (Que se ve reflejado en el return)
    //Creo una función para sumar los totales individuales. En el return, está el total por producto.
    const sumaTotalIndividual = (product) => {
        let totalIndividual = product.price * product.quantity
        return totalIndividual
    }
    
    const sendOrder = () => {
        const order = {
            buyer: {name: "nombre", phone: "11111111", email: 'a@a.com'},
            items: [cart],
            total: totalFinal
        }
    }

    return (
        <div className = 'cartVh'>
            <div className = 'cartContainerTitle'>
                        <h1>Review your bag.</h1>
                        <h4>Free delivery and free returns.</h4>
            </div>
            <div className = 'cartContainerTitleDescription'>
                    <p>Te pedimos que revises tu pedido antes de finalizar tu compra. Recuerda que puedes vaciar toda tu bag de ser necesario.</p>
            </div>
        {cart.length < 1 
            ?    <div className = 'emptyBagContainer'>
                <p>Your bag is empty.</p> 
                <button className = 'buttonEmptyBag'><Link to = '/itemListContainer' className = 'buttonEmptyBagLink'>Continue Shopping</Link></button> 
            </div>
            : <div>
                {cart.map ((product) => (
                <div key = {product.id} className = 'cartContainerALL'>
                    <div key = {product.id} className='cartContainer'>
                        <div className = 'imgContainer'>
                            <img src={product.photo} alt='Dispositivo Apple' className = 'imgCart'></img>
                        </div>
                        <div className = 'prodDescContainer'> 
                            
                            <div className = 'prodNamePriceContainer'>
                                <div className = 'productName'>
                                    <h1> {product.name} </h1>
                                </div>
                                <div className = 'productDescription'>
                                    <p className = 'prodDescPrice'> $ {product.price} </p>
                                </div>
                            </div>

                            <div className = 'prodNamePriceContainer'>
                                <div className = 'productName'>
                                    <p>Total por producto:</p>
                                </div>
                                <div className = 'productDescription'>
                                    <p>$ {sumaTotalIndividual(product)}</p>
                                </div>
                            </div>

                            <p className = 'prodDescQtty'> Quantity: {product.quantity}</p>
                            <h2>Descripción</h2>
                            <p className = 'prodDescDetail'> {product.detail} </p>
                            <button onClick = {() => removeItem(product, product.quantity)} className = 'prodDescButton'> Remove </button>
                            <button onClick = {() => addMoreItems(product, product.quantity)} className = 'prodDescButton'> Add Item </button>
                        </div>
                    </div>
                </div>
            ))}
            <div className = 'checkOut'>
                        <p>Total general: $ {totalFinal}</p>
                        <button onClick = {clear} className = 'clearBagButton'> Clear bag </button>
            </div>
            <div className = 'checkOut'>
                <button onClick = {sendOrder} className = 'clearBagButton'> Finalizar Compra </button>
            </div>
            </div>}
        </div>
    )
}



