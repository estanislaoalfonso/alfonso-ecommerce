import '../../styles/home.css';
import { Link } from 'react-router-dom';

export const Home = () => {
    return (
        <div className = 'homeApple'>
            <p>Welcome.</p>
            <button className="addToBagButton"> <Link to = "/itemListContainer"> Show all products </Link></button>
        </div>
    )
}