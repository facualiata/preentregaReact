import Item from "../item/Item"

const ItemList = ({products})=> {
    return(
        <div className="listgrup">
            {products.map(prod => <Item key={products.id} {...products}/>)}
        </div>
    )
}

export default ItemList