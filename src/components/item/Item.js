import './item.css'




const Item = ({ name, img, category, description, price, stock}) => {
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
                    Precio: {price}
                </p>
            </section>
            <footer>
                <button className="btndetail">Ver detalle</button>
            </footer>
        </article>
    )
    }
export default Item;