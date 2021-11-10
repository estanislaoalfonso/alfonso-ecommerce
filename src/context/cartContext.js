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
                quantity: itemQuantity
            }
            setCart([...cart, itemWithQuantity]);
        } else {
            alert ('Ya tienes este elemento en el carrito');
        }
    }

    const removeItem = (item) => {
        //Me guardo en una variable, el index que encuentro cuando al cart (array) le hago el findIndex y le paso la condicion tal que el id del producto sea exactamente igual que el id del parametro que le paso x la función "removeItem".
        const itemToDelete = cart.findIndex (product => product.id === item.id);
        cart.splice (itemToDelete,1);
        setCart(cart);
    }

    const clear = () => {
        cart.clear();
    }


    return (<CartContext.Provider value = {{cart, addItem, removeItem, clear}}> {children}
    </CartContext.Provider>
    );
}

