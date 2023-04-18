import './item/ItemList.css'
import Item from '../item/Item'

const ItemList = ({products} ) => {
    return(
        <div classname ="ListGrup">{products.map(prod => <Item key = {prod.id} {...prod} />)}</div>
    )
}

export default ItemList