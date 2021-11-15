
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
        <div>
            <div className = 'tileContainer'>
                    <h1 className = 'itemListContainerTitle'><span>Store.</span> The best way to buy the products you love.</h1>
                <div className = 'itemListContainerSpecialist'>
                    <h3>Shop one on one with a Specialist. Online or in store.</h3>
                </div>
            </div>
            <div className='itemListContainer'>
                {productos.length ? productos.map ((productoMapeado) => (
                <Item products = {productoMapeado} key = {productoMapeado.id}/>
            )) : <Loader/>}
            </div>
        </div>
    )
};