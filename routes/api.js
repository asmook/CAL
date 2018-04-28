const express = require('express')
const router = express.Router()
const Adventure = require('../models/adventure')

router.post("/post", (req,res) => {
    const {title, author} = req.body

    const newAdventure = new Adventure({
        title: title,
        author: author
    })

    newAdventure.save((err, savedTopic) => {
        if (err) return res.json(err)
        res.json(savedTopic)
    })
})

router.get("/forum/adventure", (req,res) => {
    Adventure.find({}).then(results => res.json(results))
})


module.exports = router