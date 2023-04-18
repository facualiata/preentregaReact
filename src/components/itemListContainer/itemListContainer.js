import {getProducts} from  '../../asyncMock'
import { useState } from 'react'
import ItenList from '../itemList/ItemList'



const ItemListContainer = ({greeting}) => {
    const [products, setProducts] = useState([])

useEffect(() => {
    getProducts()
        .then(response =>{
            setProducts(response)
        })
        .catch(error =>{
            console.error(error)
        })
}, [])



    return(
        <div>
            <h1>{greeting}</h1>
            <ItenList  products={products}/>
        </div>
)}

export default ItemListContainer