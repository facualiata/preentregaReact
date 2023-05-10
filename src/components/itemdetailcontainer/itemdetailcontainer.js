import { useEffect, useState } from "react";
import { getProductById } from "../../asyncmosck/asyncMock";
import ItemDetails from "../itemdetalles/itemdetalles";
import './itemdetailcontainer.css'
const ItemDetailContainer = () => {
    const [Products, setProducts] = useState(null)

    useEffect(() => {
        getProductById('1')
            .then(response => {
                setProducts(response)
            })
            .catch(error => {
                console.error(error)
            })
    }, [])

    return(
        <div className="ItemDetailContainer">
            <ItemDetails {...Products}/>

        </div>
    )
}

export default ItemDetailContainer;