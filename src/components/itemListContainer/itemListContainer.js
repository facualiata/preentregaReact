import { useEffect, useState } from "react";
import ItemList from "../itemlist/ItemList";
import { getProducts } from "../../asyncmosck/asyncMock"; 
import './itemlistcontainer.css'


const ItemListContainer = ({ greeting }) => {
    const [Products, setProducts] = useState([])

        useEffect(() => {
            getProducts()
                .then(response => {
                    setProducts(response)
                })
                .catch(error => {
                console.error(error)
                })
     } )
    return(
        <div classname="container">
            <h1> {greeting} </h1>
            <ItemList products={Products}/>
        </div>
    )
}
export default ItemListContainer;