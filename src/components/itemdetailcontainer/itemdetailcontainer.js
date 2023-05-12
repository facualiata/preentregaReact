import { useEffect, useState } from "react";
import { getProductById } from "../../asyncmosck/asyncMock";
import ItemDetails from "../itemdetalles/itemdetalles";
import './itemdetailcontainer.css'
import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {
    const [Products, setProducts] = useState(null)

    const {itemId} = useParams()

    useEffect(() => {
        getProductById(itemId)
            .then(response => {
                setProducts(response)
            })
            .catch(error => {
                console.error(error)
            })
    }, [itemId])

    console.log(Products)
    return(
        <div className="ItemDetailContainer">
            <ItemDetails {...Products}/>

        </div>
    )
}

export default ItemDetailContainer;