import {useEffect, useState} from "react";
import Products from '../../products.json';
import ItemDetail from './itemDetail'
import Loader from "react-spinners/PuffLoader";
import '../../styles/itemDetail.css'
import { useParams } from "react-router";

export const ItemDetailContainer = () => {
    const [detailProduct, setDetailProduct] = useState(null);
    const { itemDetailId } = useParams();

    // console.log ("itemDetailId es:", itemDetailId);
    // console.log ("itemDetaiPARAMS", useParams ());

    //PROMISE
    const getDetailProducts = (data) => new Promise((resolve, reject) => {
        const filterData = data.filter((product) => {
            // console.log("Aqui", typeof(product.id)); los consologueo para saber el tipo de objeto que es.
            // console.log("Aqui", typeof(itemDetailId)); los consologueo para saber el tipo de objeto que es.

            //Agarro la data y digo que; si la data tiene un product.id === al valor de itemDetailId (que es el ID del prod), entonces que devuelva el producto, sino retorna null.- Lo parseo, porque como se ve en el renglón de arriba, al comprarlos, eran dos tipos diferentes, uno string y otro número. 
            if (product.id === parseInt(itemDetailId)) {
                return product
            }
            return null;
        });
        //Acá, tengo el elemento que quiero filtrar. Al que quiero acceder para ver su detalle, porque coincide el ID.
        // console.log("filterData =>", filterData);

        setTimeout(() => {
            //Acá seteo un tiempo de respuesta donde, si filterdata es verdadero, entonces resuelvo con el objeto, si no, agarro el error.
            if (filterData[0]) {
                resolve(filterData[0]);
                // console.log(data);
            } else {
                reject(console.log("Error en la promise del itemDetailContainer"));
            }
        }, 2000);
    });

    useEffect(() => {
        //Agarro el JSON PRODUCTS, cuando lo tengo y se aplica la promise y filtra, la respuesta (res) la setea en el detailProduct.
        getDetailProducts(Products).then((res) => setDetailProduct(res))
        .catch((err) => console.log('Error en el useEffect de itemDetailProduct'));
    },); // En este caso el linter no me deja poner un [];

    return (
        <div className="itemDetailContainer2">
            {detailProduct ? 
            //si el detailProduct existe, entonces voy a crear un ItemDetail y le voy a pasar por parametro el detailProduct, que guarde en mi useState, y que luego, se va a renderizar dentro de itemDetail.jsx
                <ItemDetail productsDetail={detailProduct}/>
            : <Loader />}
        </div>
    );
}