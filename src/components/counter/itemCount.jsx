
import '../../styles/itemCount.css';

//stock, initial

export const ItemCount = ({stock, itemQuantity, onAdd, onRemove}) => {

    return (
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