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
    
    const addItem = (item, itemQuantity) => {
        const includeItem = cart.findIndex(product => product.id === item.id);
        if (includeItem < 0) {
            //Agrego la propiedad QUANTITY al objeto, luego, lo sumo al cart con el useState.
            const itemWithQuantity = {
                ...item,
                stock: item.stock - itemQuantity,
                quantity: itemQuantity
            }
            
            setCart([...cart, itemWithQuantity]);
        } else if ((includeItem >= 0) && (itemQuantity <= cart[includeItem].stock)) {
            cart[includeItem].quantity = cart[includeItem].quantity + itemQuantity;
            cart[includeItem].stock = cart[includeItem].stock - itemQuantity;
            console.log('Este es el nuevo stock del producto', cart[includeItem].stock)
        } else {
            alert ('No puedes comprar más del stock disponible');
        }
    }

    const removeItem = (item, itemQuantity) => {
        //Le paso la prop itemQuantity, que en el itemDetail es el valor almacenado en el useState de la Quantity.
        console.log('esto es item quantity', itemQuantity);

        //Me guardo en una variable, el index que encuentro cuando al cart (array) le hago el findIndex y le paso la condicion tal que el id del producto sea exactamente igual que el id del parametro que le paso x la función "removeItem".
        const itemToDelete = cart.findIndex (product => product.id === item.id);
        // console.log ('Este es el elemento que quiero borrar', cart[itemToDelete])
        if (cart[itemToDelete].quantity > 1) {
            cart[itemToDelete].quantity = itemQuantity - 1;
        } else { 
            cart.splice (itemToDelete,1);
            setCart(cart);
        }
        console.log(cart[itemToDelete]);
    }

    const clear = () => {
        cart.splice(0, cart.length);
        setCart(cart);
    }


    return (<CartContext.Provider value = {{cart, addItem, removeItem, clear}}> {children}
    </CartContext.Provider>
    );
}

