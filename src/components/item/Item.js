const Item = ({id, name, img, price, stock}) =>{
    return(
        <article classname="carditem">
            <header classname="header">
                <h2 classname="itemheader">
                    {name}
                </h2>
            </header>
            <pucture>
                <img scr={img} alt={name} classname="itemImg"/>
            </pucture>
            <section>
                <p classname="info">Precio: ${price} </p>

                <p classname="info">Stock: ${stock}</p>
            </section>
            <footer classname="itemfooter" >
                <button classname="option"> Ver detalle</button>
            </footer>
        </article>
    )
}

export default Item