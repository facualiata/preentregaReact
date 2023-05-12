import './item.css'
import {Link} from 'react-router-dom'




const Item = ({id, name, img, category, description, price, stock}) => {
    return(
        <article className='article'>
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
            <footer>
                <Link to={`/item/${id}`} className='opcion'> ver detalle</Link>
            </footer>
        </article>
    )
    }
export default Item;