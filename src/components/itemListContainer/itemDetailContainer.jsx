import {useEffect, useState} from "react";
import Products from '../../products.json';
import ItemDetail from '../itemListContainer/itemDetail'
import Loader from "react-spinners/PuffLoader";

export const ItemDetailContainer = () => {
    const [detailProduct, setDetailProduct] = useState ([]);

    //PROMISE

    const getDetailProducts = (data) => new Promise ((resolve, reject) => {
        
        setTimeout (() => {
            if (data) {
                resolve (data)
                // console.log(data);
            } else {
                reject (console.log ("Error en la promise del itemDetailContainer"));
            }
        }, 2000)
    });

    useEffect ( () => {
        getDetailProducts (Products).then ((res) => setDetailProduct (res))
        .catch ((err) => console.log ('Error en el useEffect de itemDetailProduct'));
    },[]);

    return (
        <div>
        {detailProduct.length ? detailProduct.map ((productoAMapear)=> (
            <ItemDetail productsDetail = {productoAMapear} key = {productoAMapear.id}/>
        )): <Loader/>}
        </div>
    );
};