import CartWidget from "../CartWidget/CartWidget"
import './stylesnav.css'

const NavBar = () => {
    return(
        <nav className='nav'> 
            <h3>E-comerce</h3>
            <div>
                <button className='btn'> Telefonos </button>
                <button className='btn'> Tablets </button>
                <button className='btn'> Notebooks </button>
            </div>
            <CartWidget />
        </nav>
    )
}
export default NavBar
