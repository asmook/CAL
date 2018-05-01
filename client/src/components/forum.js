import React, { Fragment, Component } from 'react';
import axios from 'axios';
import Results from './Result'
import "./forum.css";


class Forum extends Component {

    state = {
        articles: []
    }

    componentDidMount() {
        this.getTopics()
    }

    getTopics = () => {
        axios.get("/forum").then(res => {
            // console.log(res.data)
            this.setState({ articles: res.data })
            console.log(this.state.articles)
        })
    }

    getFunny = () => {
        axios.get("/forum/funny").then(res => {
            this.setState({ articles: res.data })
        })
        console.log(this.state.articles)
    }

    getHorror = () => {
        axios.get("/forum/horror").then(res => {
            this.setState({ articles: res.data })
        })
        console.log(this.state.articles)
    }

    getRomance = () => {
        axios.get("/forum/romance").then(res => {
            this.setState({ articles: res.data })
        })
        console.log(this.state.articles)
    }

    getMystery = () => {
        axios.get("/forum/mystery").then(res => {
            this.setState({ articles: res.data })
        })
        console.log(this.state.articles)
    }

    getDrama = () => {
        axios.get("/forum/drama").then(res => {
            this.setState({ articles: res.data })
        })
        console.log(this.state.articles)
    }

    getFantasy = () => {
        axios.get("/forum/fantasy").then(res => {
            this.setState({ articles: res.data })
        })
        console.log(this.state.articles)
    }

    render() {
        return (
            <Fragment>
                <div className="genres">
                    <ul>
                        <li><a href="#" onClick={this.getTopics}>All</a></li>
                        <li><a href="#funny" onClick={this.getFunny}>Funny</a></li>
                        <li><a href="#horror" onClick={this.getHorror}>Horror</a></li>
                        <li><a href="#romance" onClick={this.getRomance}>Romance</a></li>
                        <li><a href="#mystery" onClick={this.getMystery}>Mystery</a></li>
                        <li><a href="#drama" onClick={this.getDrama}>Drama</a></li>
                        <li><a href="#fantasy" onClick={this.getFantasy}>Fantasy</a></li>
                    </ul>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="createNew float-right">
                            <a class="btn btn-outline-info float-right" href="/newstory" role="button">Create New Story</a>
                        </div>
                        <div className="posts col-md-12">
                            <ul>
                                {this.state.articles.map(article => (

                                    <Results
                                        key={article._id}
                                        id={article._id}
                                        title={article.title}
                                        author={article.author}
                                        description={article.description}
                                    />

                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </Fragment>
        )
    }
}

export default Forum;