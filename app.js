const express = require('express');
const cors = require('cors');
const port = 3000;

const app = express();
app.use(express.json());
app.use(cors());

let product = [
    {id: 1, name: "Sennheiser HD 599 SE Around Ear Open Back Headphone - Black", imgUrl: 'https://www.ooberpad.com/cdn/shop/products/Px8McLarenEdition.jpg?v=1670575933&width=1200', price: 99},
    {id: 2, name: "Sennheiser Consumer Audio HD 650 - Audiophile Hi-Res Open Back Dynamic Headphone, Titan", imgUrl: 'https://target.scene7.com/is/image/Target/GUEST_747e81f4-0816-4701-b633-57a76ac6e4ab', price: 379},
    {id: 3, name: "Audio-Technica ATH-M20x Professional Studio Monitor Headphones, Black", imgUrl: 'https://shop.zebronics.com/cdn/shop/files/Zeb-Thunder-pic5.jpg?v=1702966217&width=1200', price: 49},
    {id: 4, name: "Audio-Technica ATH-M20x Professional Studio Monitor Headphones, Black", imgUrl: 'https://shop.zebronics.com/cdn/shop/files/Zeb-Thunder-pic2.jpg?v=1702966217&width=1200', price: 21.99},
    {id: 5, name: "Sennheiser HD 599 SE Around Ear Open Back Headphone - Black", imgUrl: 'https://www.ooberpad.com/cdn/shop/products/Px8McLarenEdition.jpg?v=1670575933&width=1200', price: 99},
    {id: 6, name: "Sennheiser Consumer Audio HD 650 - Audiophile Hi-Res Open Back Dynamic Headphone, Titan", imgUrl: 'https://target.scene7.com/is/image/Target/GUEST_747e81f4-0816-4701-b633-57a76ac6e4ab', price: 379},
    {id: 7, name: "Audio-Technica ATH-M20x Professional Studio Monitor Headphones, Black", imgUrl: 'https://shop.zebronics.com/cdn/shop/files/Zeb-Thunder-pic5.jpg?v=1702966217&width=1200', price: 49},
    {id: 8, name: "Audio-Technica ATH-M20x Professional Studio Monitor Headphones, Black", imgUrl: 'https://shop.zebronics.com/cdn/shop/files/Zeb-Thunder-pic2.jpg?v=1702966217&width=1200', price: 21.99},
    {id: 9, name: "Sennheiser HD 599 SE Around Ear Open Back Headphone - Black", imgUrl: 'https://www.ooberpad.com/cdn/shop/products/Px8McLarenEdition.jpg?v=1670575933&width=1200', price: 99},
    {id: 10, name: "Sennheiser Consumer Audio HD 650 - Audiophile Hi-Res Open Back Dynamic Headphone, Titan", imgUrl: 'https://target.scene7.com/is/image/Target/GUEST_747e81f4-0816-4701-b633-57a76ac6e4ab', price: 379},
    {id: 11, name: "Audio-Technica ATH-M20x Professional Studio Monitor Headphones, Black", imgUrl: 'https://shop.zebronics.com/cdn/shop/files/Zeb-Thunder-pic5.jpg?v=1702966217&width=1200', price: 49},
    {id: 12, name: "Audio-Technica ATH-M20x Professional Studio Monitor Headphones, Black", imgUrl: 'https://shop.zebronics.com/cdn/shop/files/Zeb-Thunder-pic2.jpg?v=1702966217&width=1200', price: 21.99},
]

app.get('/', (req, res) => {
    res.json(product)
});

app.get('/productDetail/:id', async (req, res) => {
    try{
        const {id} = req.params;
        const {name} = req.query;
        const findProdut = product.find(item => item.id == id && item.name == name);
        if(!findProdut){
            return res.status(404).json("Product not found!");
        }

        res.status(200).json(findProdut);
    }catch(err){
        res.status(500).json({err: err.message});
    }
})

app.listen(port, () => {
    console.log(`Server is running on : http://localhost:${port}`);
})