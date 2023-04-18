

const products = [

    {
        id:  '1',
        name : 'Iphone 12',
        price: 1000,
        category: 'celular',
        img:  'https://www.google.com/search?q=iphone+12&rlz=1C1ALOY_esAR1022AR1022&sxsrf=APwXEdf1yLPqkErxeZLnXcPwZp8gApkc6A:1681836608654&source=lnms&tbm=isch&sa=X&ved=2ahUKEwiz5YPN8bP-AhU7uJUCHaoNDiwQ_AUoAXoECAIQAw&biw=1360&bih=657&dpr=1#imgrc=6eKMfJVBVsSnGM',
        stock: 25,
        description:' descripcion de Iphone 12'
    },
    {
        id:'2',
        name:'S21',
        price:1000,
        category:'celular',
        img: 'https://www.google.com/search?q=samsung+s21&rlz=1C1ALOY_esAR1022AR1022&sxsrf=APwXEdf0yyY_9byqxeth-d_I5T4hklw2uQ:1681836893654&source=lnms&tbm=isch&sa=X&ved=2ahUKEwiS1_bU8rP-AhXaqpUCHZBBCvwQ_AUoAXoECAIQAw&biw=1360&bih=657&dpr=1#imgrc=K_DhV7eZ3B6gIM',
        stock:20,
        description:'descripcion de Samsung S21'
    },
    {
        id:'3',
        name:'Galaxy Book I7',
        price:2000,
        category: 'notebook',
        img:'https://www.google.com/search?q=notebook+samsung&rlz=1C1ALOY_esAR1022AR1022&sxsrf=APwXEdfLEAor__X2wRfUDIR-Deah9QVlYA:1681837036700&source=lnms&tbm=isch&sa=X&ved=2ahUKEwix2JGZ87P-AhVTkZUCHW4sAxsQ_AUoAXoECAEQAw&biw=1360&bih=657&dpr=1#imgrc=6jnIpN5Ol4pqWM',
        stock:10,
        descriptio:'descripcion de Galaxy Book I7'

    },  
   
]


export const getProducts = () =>{
    return new Promise ((resolve) => {
        setTimeOut(() => {
            resolve(products)
        }, 500)
    })
}