import React, { Component } from 'react'
import './home.css'
import Carousel from './carousel.js'
import axios from 'axios'

const carouselSlidesData = [
    {
      content:
        "Tomorrow, you will be released. If you are bored of brawling with thieves and want to achieve something there is a rare blue flower that grows on the eastern slopes. Pick one of these flowers. If you can carry it to the top of the mountain, you may find what you were looking for in the first place.",
      author: "Bane",
      source: "facebook"
    }, {
      content:
        "You have learn to bury your guilt with anger. I will teach you to confront it and to face the truth.",
      author: "Ra's Al Ghul",
      source: "Snapchat"
    }, {
      content:
        "Introduce a little anarchy, upset the established order and everything becomes chaos. I'm an agent of chaos. Oh, and you know the thing about chaos? It's fair.",
      author: "Joker",
      source: "facebook"
    }, {
      content:
        "I can't do that as Bruce Wayne... as a man. I'm flesh and blood. I can be ignored, destroyed. But as a symbol, I can be incorruptible, I can be everlasting.",
      author: "Bruce Wayne",
      source: "facebook"
    }, {
      content:
        "But it's not who you are underneath... it's what you do that defines you.",
      author: "Rachel Dawes",
      source: "twitter"
    }, {
      content:
        "When their enemies were at the gates the Romans would suspend democracy and appoint one man to protect the city. It wasn't considered an honor, it was a public service.",
      author: "John Blake",
      source: "Google+"
    }, {
      content:
        "Master Wayne, you've been gone a long time. You look very fashionable. Apart from the mud.",
      author: "Alfred Pennyworth",
      source: "twitter"
    }
  ];

class Descriptions extends Component {
    state = {
        articles: []
    }

    componentDidMount(){
        this.getDescriptions()
    }

    getDescriptions = () => {
      axios.get("/all").then(res => {
        console.log(res.data)
      }) 
    }
}   

const Home = () => (
    <div className= "main-container">
        <h3>Contribute to a story or create your own...</h3>
        <Carousel slides={carouselSlidesData} /> 
    </div>  
)

export default Home
