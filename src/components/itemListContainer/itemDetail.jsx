import '../../styles/itemDetail.css';


const ItemDetail = ({productsDetail}) => {
    return (
        <div className = 'itemDetailContainer'>
            <div className = 'itemDetailPhoto'>
            <img src={productsDetail.photo} alt="Dispositivo Apple" className = "detailPhoto"/>
            </div>
            <div className = 'itemDetailDetail'>
            <h2>{productsDetail.name}</h2>
            <h3>$ {productsDetail.price}</h3>
            <h4>{productsDetail.detail}</h4>
            <button className = "addToBagButton"> Buy </button>
            </div>
        </div>
    )
};

export default ItemDetail;