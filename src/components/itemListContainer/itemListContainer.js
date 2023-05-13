import { useEffect, useState } from "react";
import ItemList from "../itemlist/ItemList";
import './itemlistcontainer.css'
import {useParams} from 'react-router-dom'

import {getDocs, collection, query, where} from 'firebase/firestore'
import { db } from "../services/firebase/firebaseConfig";

const ItemListContainer = ({ greeting }) => {
    const [items, setItems] = useState([])
    const [loading, setLoading] = useState(true)

    const { categoryId } = useParams()


        useEffect(() => {
            setLoading(true)

            

            const collectionRef = categoryId ?
            query(collection(db, 'items'), where('categoryId', '==', categoryId)) :
            collection(db, 'items')

            console.log(collectionRef)

            getDocs(collectionRef)
            .then(response => {
                const productsAdapted = response.docs.map(doc => {
                    const data = doc.data()
                    return{id: doc.id, ...data}
                })
                setItems(productsAdapted)
            })
            .catch(error => {
                console.log(error)
            })
            .finally(() => {
                setLoading(false)
            })


            
     }, [categoryId] )
    return(
        <div >
            <h1> {greeting} </h1>
            {loading ? (
                <div>
                    cargando productos
                </div>
                ) : (<div>
                    <ItemList products={items}/>
                    </div>)
            
            }

            
        </div>
    )
}
export default ItemListContainer;