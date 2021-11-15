import { useEffect, useState} from "react";
import Item from './item.jsx';
// import Products from '../../products.json'
import Loader from '../loading/loading.jsx';
import { useParams } from "react-router";
import { collection, getDocs, getFirestore, query, where } from "firebase/firestore";


 const ItemList = () => {
    //seteo un estado de productos y lo arranco como un array vacío.
    const [productos, setProductos] = useState ([]);
    const {categoryId} = useParams ();
    
    useEffect (() => {
        const db = getFirestore();
        const q = query (collection (db, 'items'),where ('category', '==', categoryId));

        getDocs(q).then((snapshot) => {
            setProductos(snapshot.docs.map((doc)=> doc.data()));
        });
    }, [categoryId])


    return (
        //Retorno un map, que recorre los productos seteados en el Seter y crea los items a partir del componente Item.jsx . Mientras el array de productos este vacío, me dirá "cargando...".
        <> 
        {productos.length ? productos.map ((productoMapeado) => (
            <Item products = {productoMapeado} key = {productoMapeado.id}/>
        )) : <Loader/>}
        </>
    );
};

export default ItemList;
