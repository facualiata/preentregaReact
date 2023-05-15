import { CartContext } from '../context/cartcontext'
import Cart from './assets/cart.svg'
import './cartwidget.css'
import { useContext } from 'react'
import { Link } from 'react-router-dom'

const CartWidget = () => {
    const { cart} = useContext(CartContext)

    const totalItems = cart.reduce((acc, {quantity}) => acc + quantity, 0);

    

    return(
        <Link to='/cart' className='cartWidget' >
            <img className='cartImg' src={Cart} alt=""/>
            
            {totalItems}
        </Link>

        
    )
}
export default CartWidget;