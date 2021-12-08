import { useEffect, useState} from "react";
import Item from './item.jsx';
// import Products from '../../products.json'
import Loader from '../loading/loading.jsx';
import { useParams } from "react-router";
import { collection, getDocs, getFirestore, query, where } from "firebase/firestore";
import '../../styles/itemList.css'


 const ItemList = () => {
    //seteo un estado de productos y lo arranco como un array vacío.
    const [productos, setProductos] = useState ([]);
    const {categoryId} = useParams ();
    
    useEffect (() => {
        const db = getFirestore();
        const q = query (collection (db, 'items'),where ('category', '==', categoryId));

        getDocs(q).then((snapshot) => {
            setProductos(
                snapshot.docs.map((doc)=> ({...doc.data(), id: doc.id})  
                ));
        });
    }, [categoryId, productos])


    return (
        //Retorno un map, que recorre los productos seteados en el Seter y crea los items a partir del componente Item.jsx . Mientras el array de productos este vacío, me dirá "cargando...".
        <div className = 'itemCategoryContainerGeneral'>
        <div className = 'itemListTitles'>
            <h1>The best products.</h1>
            <h2>Here in <span>iCommerce</span> by Apple.</h2>
            <div className='itemListTitlesP'>
                <p>Te recordamos que importamos los mejores productos de Apple. Todos en caja cerrada, con su film protector. Contamos con un año de garantía original. Somos resellers y nos interesa que vos tengas tu propio dispositivo Apple.</p>
            </div>
        </div>
        <p className ='titleHere'><span>Here.</span> All our {categoryId}</p>
        <div className = 'itemsContainer'>
            {productos.length ? productos.map ((productoMapeado) => (
                <Item products = {productoMapeado} key = {productoMapeado.id}/>
            )) : <Loader/>}
        </div> 
        </div>
    );
};

export default ItemList;
