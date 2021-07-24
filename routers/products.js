import express from 'express'
let router = express.Router()

import Products from '../models/productModel.js'

router.get('/allproducts', async(req,res) => {
    try{
        let address = req.query.address;

        const products = await Products.find({company_address: { $ne: address }})
        res.status(200).send(products)
    } catch(err){
        res.status(500).send('Error' + err)
    }
})


router.get('/', async(req, res) => {
    try{
        let address = req.query.address;

        const products = await Products.find({company_address: address})
        res.status(200).send(products)
    } catch(err){
        res.status(500).send('Error' + err)
    }
})

router.post('/', async(req,res) => {
    const productData = req.body;

    Products.create(productData, (err,data) => {
        if(err){
            res.status(500).send(err)
        } else {
            res.status(201).send(data)
        }
    })
})

router.post('/update', async(req, res) => {
    try{
        let id = req.body.id;
        let value = {unit_end: req.body.updatedQuantity}
        const result = await Products.updateOne({ _id: id }, { $set: value })
        res.send(result)
    } catch(err){
        res.send(req.body)
        res.status(500).send('Update cannot be performed' + err)
        
    }
})

export default router;