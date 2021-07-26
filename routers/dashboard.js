import express from 'express'
let router = express.Router()

import Dashboard from '../models/dashboardModel.js'

router.get('/', async(req, res) => {
    try{
        let address = req.query.address;

        const dashboardData = await Dashboard.find({address: address})
        res.status(200).send(dashboardData)
    } catch(err){
        res.status(500).send('Error' + err)
    }
})

router.post('/', async(req,res) => {
    const dashboardData = req.body;

    Dashboard.create(dashboardData, (err,data) => {
        if(err){
            res.status(500).send(err)
        } else {
            res.status(201).send(data)
        }
    })
})

router.post('/updateInventory', async(req,res) => {
    const address = req.body.address;
    const name = req.body.name;
    const quantity = req.body.quantity;

    const inventorySchema = {
        "name": name,
        "quantity": quantity,
    }
    Dashboard.updateOne({ "address": address }, {$push: {"inventory": inventorySchema}}, (err,data) => {
        if(err){
            res.status(500).send(err)
        } else {
            res.status(201).send(data)
        }
    })
})

router.post('/editInventory', async(req,res) => {
    const address = req.body.address;
    const name = req.body.name;
    const quantity = req.body.quantity;
    Dashboard.updateOne(
        { "address": address, "inventory.name": name },
        { $addToSet: { "inventory.$.quantity": quantity }}, (err,data) => {
            if(err){
                res.status(500).send(err)
            } else {
                res.status(201).send(data)
            }
        }
    )
})

export default router;