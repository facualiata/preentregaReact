import CartWidget from "./CartWidget/CartWidget"

const Navbar = () => {
    return(
        <nav>
            <h3>Ecomerce</h3>
            <div>
                <button> Telefonos </button>
                <button> Tablets </button>
                <button> Notebooks </button>
            </div>
            <CartWidget />
        </nav>
    )
}
export default Navbar
