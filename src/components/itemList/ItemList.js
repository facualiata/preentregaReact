import Item from "../item/Item"
import './itemlist.css'

const ItemList = ({products})=> {
    return(
        <div className="listgrup">
            {products.map(prod => <Item key={prod.id} {...prod}/>)}
        </div>
    )
}

export default ItemList