import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faShoppingBag} from '@fortawesome/free-solid-svg-icons';
import "../../styles/cartWidget.css"

export const CartWidget = () => {
    return (
        <div className = 'iconShoppingBag' >
            <FontAwesomeIcon icon = {faShoppingBag}/>
        </div>
    )
}