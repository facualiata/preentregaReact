import ItemCount from '../itemcount/itemcount'
import './itemdetalles.css'
const ItemDetails = ({ name, img, category, description, price, stock}) => {
    return(
        <article className='articulo'>
            <header className='header'>
                <h2 className="CardItem">
                    {name}
                </h2>
            </header>
            <picture>
                <img src={img} alt={name} className="ItemImg"/>
            </picture>
            <section>
                <p className="info">
                    Categoria: {category}
                </p>
                <p className="info">
                    descripcion: {description}
                </p>
                <p className="info">
                    Precio: {price}
                </p>
            </section>
            <footer>
                <ItemCount initial={1} stock={stock} onAdd={(quantity) => console.log('Cantidad agregada: ', quantity)}/>
            </footer>
        </article>

    )
}

export default ItemDetails;