import { useState } from "react";
import { useEffect } from "react";
import '../../styles/itemCount.css'

export const ItemCount = ({stock, initial}) => {

    // useState = const [nombreDelEstado, funcionparaCambiarEstado] = hook.-
    //setTextOfCounter = este nombre surge del nombreDelEstado. Siempre es setNombreDelEstado.-
    //useState = Lo hago arrancar en "initial" que pasa por prop y esta prop se setea en app.js.-
    const [textOfCounter, setTextOfCounter] = useState (initial);

    //Creo 2 funciones para los botones + y - que modifican el counterState (useState).-
    const remove = () => {
        if (Number (textOfCounter) > 1) {
            setTextOfCounter (Number (textOfCounter) - 1);
        } else {
            alert ('No puedes seleccionar menos de 1 producto a tu carrito');
        }
    }
    const add = () => {
        if (Number (textOfCounter) >= stock) {
            alert ('No tenemos más stock del solicitado')
        } else {
            setTextOfCounter (Number (textOfCounter) + 1);
        } 
    };

    //generamos una variable para que me diga la fecha, que actualizará mediante el useEffect.-
    const [lastClickDate, setLastClickDate] = useState (new Date ());
    
    //En el useEffect se ejecuta la función cada vez que se actualiza el array, por donde se pasará una variable o función que hayamos creado. Primero revisa el [], luego () => {}.-
    useEffect (() => {
        setLastClickDate (new Date ());
        console.log ('Ejecución del useEffect');
      },[textOfCounter]);

    return (
        //onClick, es la clásica funcion al hacer click y le paso la prop onTitle para que en la App sea la propiedad que me permita arrojar la función handleTitle.-
        <div className = 'counterContainer'>
            <div className = 'counterInfoContainer'>
            <button className = 'counterButtons' onClick = {remove}> - </button>
            <h1 className = 'counterData'> {textOfCounter} </h1>
            <button className = 'counterButtons' onClick = {add}> + </button>
            </div>
            <div className = 'counterDateContainer' >
            <h4 className = 'counterDateClick'>Último click: {lastClickDate.toString()}</h4>
            </div>
        </div>
    )
}