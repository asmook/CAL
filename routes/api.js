const express = require('express')
const router = express.Router()
const Adventure = require('../models/adventure')

router.post("/post", (req,res) => {
    const {title, author, genre, description} = req.body

    const newAdventure = new Adventure({
        title: title,
        author: author,
        genre: genre,
        description: description
    })

    newAdventure.save((err, savedTopic) => {
        if (err) return res.json(err)
        res.json(savedTopic)
    })
})

router.get("/forum", (req,res) => {
    Adventure.find({}).sort({date: -1}).then(results => res.json(results))
})

router.get("/forum/funny", (req,res) => {
    Adventure.find({genre: "funny"}).sort({date: -1}).then(results => res.json(results))
})

router.get("/forum/horror", (req,res) => {
    Adventure.find({genre: "horror"}).sort({date: -1}).then(results => res.json(results))
})

router.get("/forum/romance", (req,res) => {
    Adventure.find({genre: "romance"}).sort({date: -1}).then(results => res.json(results))
})

router.get("/forum/mystery", (req,res) => {
    Adventure.find({genre: "mystery"}).sort({date: -1}).then(results => res.json(results))
})

router.get("/forum/drama", (req,res) => {
    Adventure.find({genre: "drama"}).sort({date: -1}).then(results => res.json(results))
})

router.get("/forum/fantasy", (req,res) => {
    Adventure.find({genre: "fantasy"}).sort({date: -1}).then(results => res.json(results))
})


module.exports = router