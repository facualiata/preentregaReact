import ItemCount from '../itemCount/itemCount.js'
import './itemdetalles.css'
import { useState, useContext } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../context/cartcontext'
 

const ItemDetails = ({  id,name, img, category, description, price, stock}) => {
    const [quantityAdded, setQuantityAdded] = useState(0)

    const {addItem} = useContext(CartContext)

    const handleOnAdd = (quantity) => {
        setQuantityAdded(quantity)

        const item = {
            id, name, price
        }

        addItem(item,quantity)
    }


    return(
        <article className='articulo'>
            <header className='header'>
                <h2 className="title">
                    {name}
                </h2>
            </header>
            <picture>
                <img src={img} alt={name} className="Img"/>
            </picture>
            <section>
                <p className="info">
                    Categoria: {category}
                </p>
                <p className="info">
                    descripcion: {description}
                </p>
                <p className="info">
                    Precio: ${price}
                </p>
                <p className="info">
                    Stock: {stock}
                </p>
            </section>
            <footer>{
                quantityAdded > 0 ?( 
                    <Link to='/cart' className='Option' > Terminar compra</Link>
                ) : (<ItemCount initial={1} stock={stock} onAdd={handleOnAdd} />)

                
                    }
                </footer>
        </article>

    )
}

export default ItemDetails;