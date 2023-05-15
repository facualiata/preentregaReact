import { createContext, useState } from "react";

export const CartContext = createContext({
    cart: [],
})

export const CartProvider = ({children}) => {
    const [cart, setCart] = useState([])

    

    const addItem = (item, quantity) => {
        if(!isInCart(item.id)) {
            setCart(prev => [...prev, {...item, quantity}])
        } else{
            console.error('El producto ya fue agregado')
        }
    }

    const total = () => {
        const totalP = cart.reduce((prev, actual) => prev += (actual.quantity * actual.price), 0)
        return totalP
          
      };

    const removeItem = (itemId) => {
        const cartUpdated = cart.filter(prod => prod.id !== itemId)
        setCart(cartUpdated)
    }

    const totalItems = () => {
        cart.reduce((acc, actualItem) => acc + actualItem.quantity, 0);
      };

    const clearCart = () => {
        setCart([])
    }

    const isInCart = (itemId) => {
        return cart.some(prod => prod.id === itemId)
    }

    return(
        <CartContext.Provider value={{cart, addItem, removeItem, clearCart, total, totalItems}}>
            {children}
        </CartContext.Provider>
    )
}