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

router.put('/', async(req,res) => {
    try {
        const updateDetails = req.body;
        const updateDoc = {
        "sales": {
            "today": req.body.sales,
            "month": req.body.month,
            "year": req.body.year,
            },
        }
        const result = await Products.updateOne({ address: updateDetails.address }, updateDoc)
        res.send(result)
    } catch {
        res.status(500).send('Update cannot be performed' + err)
    }
})

export default router;