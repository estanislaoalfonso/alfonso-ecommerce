
import '../../styles/itemCount.css';

//stock, initial

export const ItemCount = ({stock, itemQuantity, onAdd, onRemove}) => {

    return (
        //onClick, es la clásica funcion al hacer click y le paso la prop onTitle para que en la App sea la propiedad que me permita arrojar la función handleTitle.-
        <div className = 'counterContainer'>
            <div className = 'counterInfoContainer'>
                <button className = 'counterButtons' onClick = {onRemove}> - </button>
                <h1 className = 'counterData'> {itemQuantity} </h1>
                <button className = 'counterButtons' onClick = {onAdd}> + </button>
            </div>
            <div className = 'counterDateContainer' >
                <h4 className = 'counterDateClick'>Quedan en Stock: {stock} productos</h4>
            </div>
        </div>
    );
}