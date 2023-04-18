import './Item.css'


const Item = ({id, name, img, price, stock}) =>{
    return (
        <article classname="CardItem">
            <header classname ="heacer">
                <h2 classname ="ItemHeader">
                    {name}
                </h2>
            </header>
            <picture>
                <img scr = {img} alt={name} classname="ItemImg"/>
            </picture>
            <section>
                <p classname ="info">
                    precio: ${price}
                </p>
                <p classname="info">
                    stock disponible: {stock}
                </p>
            </section>
            <footer classname="itemFooter">
                <button classname="option"> ver detalle</button>
            </footer>

        </article>
    )
}

export default Item