import { useEffect, useState } from "react";
import ItemList from "../itemlist/ItemList";
// import { getProducts, getProductsByCategory} from "../../asyncmosck/asyncMock"; 
import './itemlistcontainer.css'
import {useParams} from 'react-router-dom'

import {getDoc, collection, query, where} from 'firebase/firestore'
import { db } from "../services/firebase/firebaseConfig";

const ItemListContainer = ({ greeting }) => {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)

    const { categoryId } = useParams()


        useEffect(() => {
            setLoading(true)

            const collectionRef = collection( db,'items')
            ? query(collection(db, 'items'), where('category', '==', categoryId))
            :collection( db, 'items')

            console.log(collectionRef)

            getDoc(collectionRef)
            .then(response => {
                const productsAdapted = response.docs.map(doc => {
                    const data = doc.data()
                    return{id: doc.id, ...data}
                })
                setProducts(productsAdapted)
            })
            .catch(error => {
                console.log(error)
            })
            .finally(() => {
                setLoading(false)
            })


            
     }, [categoryId] )
    return(
        <div classname="container">
            <h1> {greeting} </h1>
            {loading ? (
                <div>
                    cargando productos
                </div>
                ) : (<div>
                    <ItemList products={products}/>
                    </div>)
            
            }

            {/* <ItemList products={products}/> */}
        </div>
    )
}
export default ItemListContainer;