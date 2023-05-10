

const products= [
    {
        id:'1',
        name:'Iphone 12',
        price: 1200 ,
        category:'celulares',
        img:'https://m.media-amazon.com/images/I/71hIfcIPyxS._AC_SX522_.jpg',
        stock:25,
        description:'descripcion de Iphone 12',
    },
    {
        id:'2',
        name:'S21',
        price:1000 ,
        category:'celulares',
        img:'https://images.samsung.com/is/image/samsung/assets/ar/smartphones/galaxy-s21-5g/galaxy-s21-fe-5g/buy/S21FE_Carousel_GroupKV1_PC.jpg?$ORIGIN_JPG$',
        stock:20,
        description:'descripcion de S21'
    },
    {
        id:'3',
        name:'Galaxy Book I7',
        price:2500,
        category:'noteboks',
        img:'https://www.xtr.com.ar/img/p/11496/a0f91fa25f12482aa5142aa414a70166.jpeg?quality=95&width=490&height=350&mode=max&upscale=false&format=webp',
        stock:'10',
        description:'descripcion de Galaxy Book I7',
    },
    {
        id:'4',
        name:'Tab S8',
        price: 800,
        category:'tablets',
        img:'https://images.samsung.com/is/image/samsung/p6pim/ar/sm-x900nzadaro/gallery/ar-galaxy-tab-s8-ultra-wifi-x900-sm-x900nzadaro-534300787?$365_292_PNG$',
        stock:'15',
        description:'descripcion de Tab S8',
    }
]

export const getProducts = () => {
    return new Promise((resolve) =>{
        setTimeout(()=> {
            resolve(products)
        }, 500)
    })
};

export const getProductById = (productId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.find(prod => prod.id === productId))
        }, 500)
    })
}


