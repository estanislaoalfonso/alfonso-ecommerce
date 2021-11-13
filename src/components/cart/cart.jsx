import { Link } from 'react-router-dom';
import { useCartContext } from '../../context/CartContext'
import '../../styles/cart.css'

export const Cart = () => {
    const {cart, removeItem, clear} = useCartContext();
    console.log (cart);


    //Total individual (Que se ve reflejado en el return)
    //Creo una función para sumar los totales individuales. En el return, está el total por producto.
    const sumaTotalIndividual = (product) => {
        let totalIndividual = product.price * product.quantity
        return totalIndividual
    }

    //Calcular el TOTAL GASTADO
    let totalGastado = 0;
    const sumarTotales = (product) => {
        for (product of cart) {
        let totalProducto = product.quantity * product.price;
            totalGastado = totalProducto + totalGastado;
        } 
    }
    sumarTotales(cart)
    console.log('Total Gastado', totalGastado);

    return (
        <div>
        {cart.length < 1 ? 
            <div className = 'emptyBagContainer'>
                <p>Your bag is empty.</p> 
                <button className = 'buttonEmptyBag'><Link to = '/itemListContainer' className = 'buttonEmptyBagLink'>Continue Shopping</Link></button> 
            </div>
            : cart.map ((product) => (
                <div>
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
                    </div>

                </div>
                <div className = 'checkOut'>
                    <p>Total general: $ {totalGastado}</p>
                    <button onClick = {clear} className = 'clearBagButton'> Clear bag </button>
                </div>
                </div>
            ))}
        </div>
    )
}



