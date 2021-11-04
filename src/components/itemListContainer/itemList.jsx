import { useEffect, useState} from "react";
import Item from './item.jsx';
import Products from '../../products.json'
import Loader from '../loading/loading.jsx'
import { useParams } from "react-router";


 const ItemList = () => {
    //seteo un estado de productos y lo arranco como un array vacío.
    const [productos, setProductos] = useState ([]);
    const {categoryId} = useParams ();
    
    
    //PROMISE
    //genero una promesa, Que es una funcion que voy a usar luego en el useEffect.
    const getProducts = (productsData) => new Promise ((resolve, reject) =>{
        // Le paso con if que si lo resuelto es verdadero, me va a traer los productos y si es falso, tira error.
        setTimeout(() => { //seteo un tiempo que simula la demora para buscar los productos. Funcion + tiempo de retardo
            if (productsData) {
                resolve (productsData);
            } else { 
                reject (console.log('Error al cargar los productos'));
            }
        }, 2000); 

    });
    //uso useEffect para que una vez que tengo los productos, dé la respuesta, lo setee en el useState y que si sale un error lo catchee para que no se rompa toda la web.
    useEffect (() => {
        getProducts (Products).then ((res) => {
            categoryId ? setProductos (res.filter((product) => product.category === categoryId)) : setProductos (res)
        })
        .catch((err) => console.log('Algo salió mal en el useEffect'));
    }, [categoryId]);

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
