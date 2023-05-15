import Cart from './assets/cart.svg'
import './cartwidget.css'
import { useContext } from 'react'
import { CartContext } from '../context/cartcontext'
import { Link } from 'react-router-dom'

const CartWidget = () => {
    const { totalItems} = useContext(CartContext)

    const totalCarrito = totalItems()

    return(
        <Link to='/cart' className='cartWidget' >
            <img className='cartImg' src={Cart} alt=""/>
            <span>{totalItems}</span>
            {totalCarrito}
        </Link>
    )
}
export default CartWidget;