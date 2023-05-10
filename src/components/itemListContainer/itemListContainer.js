import { useEffect, useState } from "react";
import ItemList from "../itemlist/ItemList";
import { getProducts, getProductsByCategory} from "../../asyncmosck/asyncMock"; 
import './itemlistcontainer.css'
import {useParams} from 'react-router-dom'

const ItemListContainer = ({ greeting }) => {
    const [Products, setProducts] = useState([])

    const { categoryId } = useParams()


        useEffect(() => {
            const asycFunc = categoryId ? getProductsByCategory : getProducts


            asycFunc(categoryId)
                .then(response => {
                    setProducts(response)
                })
                .catch(error => {
                console.error(error)
                })
     }, [categoryId] )
    return(
        <div classname="container">
            <h1> {greeting} </h1>
            <ItemList products={Products}/>
        </div>
    )
}
export default ItemListContainer;