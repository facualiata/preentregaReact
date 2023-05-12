import Cart from './assets/cart.svg'
import './cartwidget.css'
import { useContext } from 'react'
import { CartContext } from '../context/cartcontext'
import { Link } from 'react-router-dom'

const CartWidget = () => {
    const {totalQuantity} = useContext(CartContext)

    return(
        <Link to='/cart' className='cartWidget' style={{display: totalQuantity > 0 ? 'block' : 'none'}}>
            <img className='cartImg' src={Cart} alt=""/>
            {totalQuantity}
        </Link>
    )
}
export default CartWidget;