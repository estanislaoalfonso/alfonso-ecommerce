import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faApple } from '@fortawesome/free-brands-svg-icons';
import '../../styles/brandWidget.css';

export const BrandWidget = () => {
    return (    
        <div className = 'iconBrandWidget'>
            <FontAwesomeIcon className = 'iconBrand' icon= {faApple}/>
            <h1>iCommerce</h1>
        </div>
    )
}