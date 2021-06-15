import express from 'express'
let router = express.Router()

import History from '../models/historyModel.js'

router.get('/', async(req, res) => {
    try{
        let product_code = req.query.product_code;
        //let product_id  = req.query.product_id;

        const history = await History.find({product_code: product_code})
        res.status(200).send(history)
    } catch(err){
        res.status(500).send('Error' + err)
    }
})

router.post('/', async(req,res) => {
    const historyData = req.body;

    History.create(historyData, (err,data) => {
        if(err){
            res.status(500).send(err)
        } else {
            res.status(201).send(data)
        }
    })
})

export default router;