import React, { Component } from 'react';
import axios from 'axios'
import { Link } from 'react-router-dom'

class Comments extends Component {

    state = {
        story: ""
    }

    componentDidMount() {
        this.getBook()
    }

    getBook = () => {
        axios.get("/api/story/" + this.props.match.params.id).then(res => {
            console.log(res.data)
            this.setState({story: res.data.description})
        })
    }

    render() {
        return (
            <h1>{this.state.story}</h1>
        )
    }
}

export default Comments;