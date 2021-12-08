import {useEffect, useState} from "react";
// import Products from '../../products.json';
import ItemDetail from './itemDetail'
import Loader from "react-spinners/PuffLoader";
import '../../styles/itemDetail.css'
import { useParams } from "react-router";

import { getFirestore } from "../../firebase/index";
import { doc, getDoc } from "firebase/firestore";

export const ItemDetailContainer = () => {
    const [detailProduct, setDetailProduct] = useState(null);
    const { id } = useParams();

    // console.log ("itemDetailId es:", itemDetailId);
    // console.log ("itemDetaiPARAMS", useParams ());
    useEffect (() => {
        const db = getFirestore();

        const item = doc(db, 'items',id); // Me traigo la data, por params van el db anterior, mi base de datos y el id que me quiero traer, en este caso, del useparams, que va a matchear con el id de Firebase.
        getDoc (item).then((snapshot) => {
            if (snapshot.exists()) {
                const products = {...snapshot.data(), id: id}
                setDetailProduct(products);
            }
        })
    },[id])

    return (
        <div className="itemDetailContainer2">
            {detailProduct ? 
            //si el detailProduct existe, entonces voy a crear un ItemDetail y le voy a pasar por parametro el detailProduct, que guarde en mi useState, y que luego, se va a renderizar dentro de itemDetail.jsx
                <ItemDetail productsDetail={detailProduct}/>
            : <Loader />}
        </div>
    );
}