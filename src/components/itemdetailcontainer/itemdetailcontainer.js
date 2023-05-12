import { useEffect, useState } from "react";
// import { getProductById } from "../../asyncmosck/asyncMock";
import ItemDetails from "../itemdetalles/itemdetalles";
import './itemdetailcontainer.css'
import { useParams } from "react-router-dom";

import { getDocs, doc} from "firebase/firestore";
import { db } from "../services/firebase/firebaseConfig";

const ItemDetailContainer = () => {
    const [Products, setProducts] = useState(null)
    const [loading, setLoading] = useState(true)

    const {itemId} = useParams()

    useEffect(() => {
        setLoading(true)

        const docRef = doc(db, 'items', itemId)

        getDocs(docRef)
            .then(response => {
                const data = response.data()
                const productsAdapted = {id: response.id, ...data}
                setProducts(productsAdapted)
            })
            .catch(error => {
                console.log(error)
            })
            .finally(() => {
                setLoading(false)
            })
            
    }, [itemId])

    console.log(Products)
    return(
        <div className="ItemDetailContainer">

            {loading ? (
                <div>
                    cargando detalle del producto
                </div>
            ) : (
                <ItemDetails {...Products}/>
            )
        
        }
            {/* <ItemDetails {...Products}/> */}

        </div>
    )
}

export default ItemDetailContainer;