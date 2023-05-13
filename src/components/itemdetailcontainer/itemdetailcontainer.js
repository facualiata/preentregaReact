import { useEffect, useState } from "react";

import ItemDetails from "../itemdetalles/itemdetalles";
import './itemdetailcontainer.css'
import { useParams } from "react-router-dom";

import { getDocs, doc} from "firebase/firestore";
import { db } from "../services/firebase/firebaseConfig";

const ItemDetailContainer = () => {
    const[items, setItems] = useState(null)
    const [loading, setLoading] = useState(true)

    const {itemId} = useParams()

    useEffect(() => {
        setLoading(true)

        const docRef = doc(db, 'items', itemId)

        getDocs(docRef)
            .then(response => {
                const data = response.data()
                const productsAdapted = {id: response.id, ...data}
                setItems(productsAdapted)
            })
            .catch(error => {
                console.log(error)
            })
            .finally(() => {
                setLoading(false)
            })
            
    }, [itemId])

    
    return(
        <div className="ItemDetailContainer">

            {loading ? (
                <div>
                    cargando detalle del producto
                </div>
            ) : (
                <ItemDetails {...items}/>
            )
        
        }
            

        </div>
    )
}

export default ItemDetailContainer;