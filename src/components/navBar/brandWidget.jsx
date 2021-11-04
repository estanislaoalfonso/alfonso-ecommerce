import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faApple } from '@fortawesome/free-brands-svg-icons';
import '../../styles/brandWidget.css';
import {Link} from 'react-router-dom';

export const BrandWidget = () => {
    return (    
        <Link to= {`/`} style={{ textDecoration: 'none' }} className='linkVisited'>
        <div className = 'iconBrandWidget'>
            <FontAwesomeIcon className = 'iconBrand' icon= {faApple}/>
            <h1>iCommerce</h1>
        </div>
        </Link>
    )
}