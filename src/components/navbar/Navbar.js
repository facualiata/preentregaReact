import CartWidget from "../CartWidget/CartWidget"
import './stylesnav.css'
import { NavLink, Link} from "react-router-dom"

const NavBar = () => {
    return(
        <nav className='nav'> 

            <Link to='/'>
            <h3>E-comerce</h3>
            </Link>
            <div>
                <NavLink to={`/category/celulares`} className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}> Telefonos </NavLink>
                <NavLink to={`/category/tablets`} className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}> Tablets </NavLink>
                <NavLink to={`/category/notebooks`} className={({isActive}) => isActive ? 'ActiveOption' : 'Option'} > Notebooks</NavLink>
            </div>
            <CartWidget />
        </nav>
    )
}
export default NavBar
