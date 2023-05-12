import { useContext } from "react";
import { CartContext } from "../context/cartcontext";
import CartItem from "../cartitem/cartitem";
import { Link } from "react-router-dom";

const Cart = () => {
    const {cart, clearCart, totalQuantity, total} = useContext(CartContext)

    if(totalQuantity === 0) {
        return(
            <div>
                <h1>no hay item en el carrito</h1>
                <Link to='/' className='options'>Productos</Link>
            </div>
        )
    }

    return(
        <div>
            { cart.map(p => <CartItem key={p.id} {...p}/>)}
            <h3>Total: ${total}</h3>
            <button onClick={() => clearCart()} className="button" > Limpiar carrito</button>
            <Link to='/checkout' className='option'>Checkout</Link> 
        </div>
    )
}

export default Cart;