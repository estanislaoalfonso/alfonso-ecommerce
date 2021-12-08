
import Item from './item.jsx';
import '../../styles/itemListContainer.css'
import { collection, getDocs, getFirestore } from "firebase/firestore";
import { useEffect, useState } from 'react';
import Loader from '../loading/loading.jsx';

export const ItemListContainer = () => {
    const [productos, setProductos] = useState ([])
    
    useEffect (() => {
        const db = getFirestore();
        
        getDocs(collection(db,'items'))
        // console.log (snapshot.docs.map((doc) => doc.data()));
        .then ((snapshot) => {
            setProductos(
                snapshot.docs.map((doc)=> ({...doc.data(), id: doc.id})  
                ));
        });
    }, [])
    
    return (
        <div className = 'itemListContainerGeneral'>
            <div className = 'titleContainer'>
                    <h1 className = 'itemListContainerTitle'><span>Store.</span> The best way to buy the products you love.</h1>
                <div className = 'itemListContainerSpecialist'>
                    <h3>Shop one on one with a Specialist. Online or in store.</h3>
                </div>
            </div>
            <p className = 'itemListTitle'> The latest. <span>Take a look at what’s new, right now.</span></p>
            <div className='itemListContainer'>
                {productos.length ? productos.map ((productoMapeado) => (
                <Item products = {productoMapeado} key = {productoMapeado.id}/>
            )) : <Loader/>}
            </div>
        </div>
    )
};