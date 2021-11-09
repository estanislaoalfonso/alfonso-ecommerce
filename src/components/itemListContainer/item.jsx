import '../../styles/itemList.css';
import { Link } from "react-router-dom";


const Item = ({products}) => {
    return (
    <div className = 'itemContainer'>
        <img src={products.photo} alt = "Dispositivo Apple" className="imageItem"/>
        <h2>{products.name}</h2>
        <h4>$ {products.price}</h4>
        <button className = "addToBagButton"><Link to = {`/itemDetailContainer/${products.id}`}> Detail </Link></button>  
    </div>
    );
};

export default Item;


