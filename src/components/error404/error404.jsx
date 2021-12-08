import '../../styles/error404.css';
import { Link } from "react-router-dom"


export const Error404 = () => {
    return (
        <div className = 'errorContainer'>
            <h1>Ups ! Te perdiste !</h1>
            <h3>Vuelve al home para intentarlo de nuevo.</h3>
            <button> <Link to = '/'> Home </Link></button> 
        </div>
    )
}