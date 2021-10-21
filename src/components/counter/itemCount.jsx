import { useState } from "react";
import '../../styles/itemCount.css'

export const ItemCount = ({stock, initial}) => {

    // useState = const [nombreDelEstado, funcionparaCambiarEstado] = hook.-
    //setTextOfCounter = este nombre surge del nombreDelEstado. Siempre es setNombreDelEstado.-
    //useState = Lo hago arrancar en "initial" que pasa por prop y esta prop se setea en app.js.-
    const [itemCounter, setTextOfCounter] = useState (Number(initial));

    //Creo 2 funciones para los botones + y - que modifican el counterState (useState).-
    const remove = () => {
        if (itemCounter > 1) {
            setTextOfCounter (itemCounter - 1);
        } else {
            alert ('No puedes seleccionar menos de 1 producto a tu carrito');
        }
    }
    const add = () => {
        if (itemCounter >= stock) {
            alert ('No tenemos más stock del solicitado')
        } else {
            setTextOfCounter (itemCounter + 1);
        } 
    };

    return (
        //onClick, es la clásica funcion al hacer click y le paso la prop onTitle para que en la App sea la propiedad que me permita arrojar la función handleTitle.-
        <div className = 'counterContainer'>
            <div className = 'counterInfoContainer'>
            <button className = 'counterButtons' onClick = {remove}> - </button>
            <h1 className = 'counterData'> {itemCounter} </h1>
            <button className = 'counterButtons' onClick = {add}> + </button>
            </div>
            <div className = 'counterDateContainer' >
            <h4 className = 'counterDateClick'>Últimos disponibles</h4>
            </div>
        </div>
    )
}