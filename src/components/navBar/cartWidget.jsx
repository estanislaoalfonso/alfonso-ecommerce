import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faShoppingBag} from '@fortawesome/free-solid-svg-icons';
import "../../styles/cartWidget.css";
import { Link } from "react-router-dom";

export const CartWidget = () => {
    return (
        <Link to = {'/cart'}>
            <div className = 'iconShoppingBag' >
                <FontAwesomeIcon icon = {faShoppingBag}/>
            </div>
        </Link>
    )
}