import { createContext} from "react";
import { useState } from "react";
import { useContext } from "react";

//Creo un contexto que se llama CartContext. Como luego lo 'wrapeo' dentro de una función (usarCartContext), este no lo exporto, ya que lo que exportaré será la función anteriormente mencionada.
const CartContext = createContext ();

//Genero esta funcion para no tener que llamar al useContext e importarlo siempre en todos los componentes que lo necesite, si no que solo me alcanza con tenerlo aqui. En los componentes, solo importaré el 'useCartContext ()' como función.
export const useCartContext = () => {
    return useContext (CartContext)
}
//Va el children porque es todo lo que wrapea el CartProvider, entonces se lo tengo que pasar como prop.
export const CartProvider = ({children}) => {

    const [cart, setCart] = useState ([])
    const [inCart, setInCart] = useState (false);
    const [totalFinal, setTotalFinal] = useState (0)

    const handleIsInCart = (item) => {
        const findedInCart = cart.findIndex(product => product.id === item.id)
        if (findedInCart >= 0) {
            setInCart (true)
        } else {
            setInCart (false)
        }
    }

    const addItem = (item, itemQuantity) => {
        const cartDraft = [...cart]
        const itemFinded = cart.findIndex(product => product.id === item.id);
        if (itemFinded < 0) {
            
            const itemWithQuantity = {
                ...item,
                stock: item.stock - itemQuantity,
                quantity: itemQuantity
            }
            
            setCart([...cartDraft, itemWithQuantity]);
            sumarTotales(cartDraft)
            handleIsInCart(cartDraft)
        } else if ((itemFinded >= 0) && (itemQuantity <= cartDraft[itemFinded].stock)) {
            cartDraft[itemFinded].quantity = cartDraft[itemFinded].quantity + itemQuantity;
            cartDraft[itemFinded].stock = cartDraft[itemFinded].stock - itemQuantity;
            // console.log('Este es el nuevo stock del producto', cartDraft[itemFinded].stock)
            // console.log(cartDraft[itemFinded]);
            sumarTotales(cartDraft)
        } else {
            alert ('No puedes comprar más del stock disponible');
        }
    }
    
    const removeItem = (item, itemQuantity) => {
        const cartDraft = [...cart]
        //Le paso la prop itemQuantity, que en el itemDetail es el valor almacenado en el useState de la Quantity.

        const itemToDelete = cartDraft.findIndex (product => product.id === item.id);

        if (cartDraft[itemToDelete].quantity > 1) {
            cartDraft[itemToDelete].quantity = itemQuantity - 1;
            cartDraft[itemToDelete].stock = cartDraft[itemToDelete].stock + 1;
            sumarTotales(cartDraft)
        } else { 
            cartDraft.splice (itemToDelete,1);
            setCart(cartDraft);
            sumarTotales(cartDraft);
            handleIsInCart(cartDraft);
        }

    }

    const addMoreItems = (item, itemQuantity) => {
        const cartDraft = [...cart];
        const itemFinded = cartDraft.findIndex (product => product.id === item.id);

        if (cart[itemFinded].stock > 0) {
            cartDraft[itemFinded].quantity = itemQuantity + 1;
            cartDraft[itemFinded].stock = cartDraft[itemFinded].stock - 1;
            sumarTotales(cartDraft);
        } else {
            alert ('No nos queda más stock de este producto!')
        }
    }

    const clear = () => {
        const cartDraft = [...cart]
        cartDraft.splice(0, cart.length);
        setCart(cartDraft);
        sumarTotales(cartDraft);
        handleIsInCart(cartDraft);
    }

    const sumarTotales = (product) => {
        let totalGastado = 0;
        for (product of cart) {
        let totalProducto = product.quantity * product.price;
            totalGastado = totalProducto + totalGastado;
        } 
        setTotalFinal(totalGastado);
    }


    return (<CartContext.Provider value = {{cart, handleIsInCart, inCart, addItem, removeItem, addMoreItems, clear, totalFinal, sumarTotales}}> {children}
    </CartContext.Provider>
    );
}

