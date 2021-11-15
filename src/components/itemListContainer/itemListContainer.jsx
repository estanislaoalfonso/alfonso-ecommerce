
import Item from './item.jsx';
import '../../styles/itemListContainer.css'
import { collection, getDocs, getFirestore } from "firebase/firestore";
import { useEffect, useState } from 'react';
import Loader from '../loading/loading.jsx';

export const ItemListContainer = () => {
    const [productos, setProductos] = useState ([])
    
    useEffect (() => {
        const db = getFirestore();

        getDocs(collection(db,'items')).then( (snapshot) => {
            // console.log (snapshot.docs.map((doc) => doc.data()));
            setProductos (snapshot.docs.map((doc) => doc.data()));
        })
    }, [])
    
    return (
        <div className='itemListContainer'>
            {productos.length ? productos.map ((productoMapeado) => (
            <Item products = {productoMapeado} key = {productoMapeado.id}/>
        )) : <Loader/>}
        </div>
    )
};