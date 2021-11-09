import '../../styles/itemDetail.css';
import {ItemCount} from '../counter/itemCount.jsx';
import { useState } from 'react';
import { Link } from 'react-router-dom';



const ItemDetail = ({productsDetail}) => {
    const [flag, setFlag] = useState (true)
    const [itemQuantity, setItemQuantity] = useState (0);

    const onAdd = (itemQuantity) => {
        setItemQuantity (itemQuantity);
    }

    const addToBag = () => {
        setFlag (false);
    }

    


    return (
        <div className = 'itemDetailContainer'>
            <div className = 'itemDetailPhoto'>
                <img src={productsDetail.photo} alt="Dispositivo Apple" className = "detailPhoto"/>
            </div>
            <div className = 'itemDetailDetail'>
                <h2>{productsDetail.name}</h2>
                <h3>$ {productsDetail.price}</h3>
                <h4>{productsDetail.detail}</h4>
                <div>
                    {flag && <ItemCount stock = {productsDetail.stock} initial = '1' onAdd = {() => onAdd (itemQuantity)}/> }
                    {flag && <button onClick = {() => addToBag()} className= 'addToBagButton' >Add to Bag</button>}
                </div>
                <div>
                    {!flag && <button className = 'addToBagButton' > <Link to = "/cart"> Go to cart </Link></button>}
                </div>
            </div>
        </div>
    )
};

export default ItemDetail;