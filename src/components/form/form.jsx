import { useState } from 'react';
import { useCartContext } from '../../context/CartContext';
import {getFirestore} from '../../firebase';
import { collection,  addDoc, doc, updateDoc} from 'firebase/firestore';
import { Link } from 'react-router-dom';
import '../../styles/form.css'

export const Form = () => {
    const {cart, clear, totalFinal} = useCartContext();
    const [flag, setFlag] = useState (true);
    const [orderId, setOrderId] = useState (null);
    const [buyer, setBuyer] = useState (
        {
            name: '',
            email: '',
            phone: ''
        }
    );


    const updateItemsDB = () => {
        const db = getFirestore();
        for (let i = 0; i<cart.length; i++) {
            const itemFromDB = doc (db, "items", cart[i].id);
            updateDoc (itemFromDB, {stock: cart[i].stock});
        }
    }

    const handleChange = (e) => {
        setBuyer ({
            ...buyer,
            [e.target.name] : e.target.value
        })
        // console.log(buyer);
    }

    const sendOrder = () => {
        const order = {
            buyer,
            items: cart,
            total: totalFinal
        }

        const validEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        const validPhone = /^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/im;

        // console.log(order);
        if(buyer.name.length < 10 || !validEmail.test(buyer.email) || !validPhone.test(buyer.phone) ) {
            alert ('Completa todos los campos de forma correcta')
            return;
        } 
        //A FIRESTORE
        const db = getFirestore();
        const ordersCollection = collection(db, 'orders');

        addDoc(ordersCollection, order)
        .then(({ id }) => setOrderId (id))
        .then(setFlag(false));

        //OTRAS ACCIONES
        updateItemsDB();
        clear();
    }

    return (
        <div> 
            {flag ? 
            <div className = 'formGlobalContainer'>
            <div className = 'titleForm'>
                <p>Check out form.</p>
            </div>
            <div className = 'formContainer'>
                <p> Nombre y Apellido</p>
                <input type="text" name = "name" onChange = {handleChange}/>
                <p> Email</p>
                <input type="email" name = "email" onChange = {handleChange}/>
                <p> Telefono</p>
                <input type="text" name = "phone" onChange = {handleChange}/>
                <button onClick = {sendOrder} className = 'formButton'> Check Out</button>
            </div>
            </div>  
            :
            <div className = 'orderGlobalContainer'>
            <div className = 'orderContainer'>
                <h3>Compra confirmada !</h3>
                <h5>Ahora solo queda esperar tu producto.</h5>
                <h6> Te pasamos el código de tu compra:</h6>
                <p>{orderId}</p>
                <button onClick = {clear}> <Link to = '/'> Home </Link></button>
            </div>
            <div className = 'orderImage'></div>
            </div>
            }
        </div>
    )
}