import express from 'express'
let router = express.Router()

import Participant from '../models/participant.js'

// get all participants
router.get('/', async(req, res) => {
  try {
        const participants = await Participant.find() 
        res.status(200).send(participants)
  } catch(err) {
        res.status(200).send('Error' + err)
  }
})

// post new participant data
router.post('/', (req,res) => {
    //get all participant data in json and store in variable
    const participantData = req.body;
    
    Participant.create(participantData, (err, data) => {
        if (err) {
            res.status(500).send(err)
        } else {
            res.status(201).send(data)
        }
    })
})

export default router;