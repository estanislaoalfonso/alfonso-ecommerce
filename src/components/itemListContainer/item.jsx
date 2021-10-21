import { ItemCount } from "../counter/itemCount";
import '../../styles/itemList.css';

const Item = ({products}) => {
    return (
    <div className = 'itemContainer'>
        <img src={products.photo} alt = "Macbook" className="imageItem"/>
        <h2>{products.name}</h2>
        <h4>{products.price}</h4>
        <ItemCount stock = '5' initial = '1'/>
    </div>
    );
};

export default Item;


