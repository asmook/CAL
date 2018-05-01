import React, { Component } from 'react';
import axios from 'axios'
import { Redirect } from 'react-router-dom'

class NewStory extends Component {

    state = {
        title: "",
        author: "",
        description: "",
        genre: "funny",
        redirectTo: null
    }

    handleInputChange = event => {
        let value = event.target.value;
        const name = event.target.name;

        this.setState({
            [name]: value
        })
    }

    handleFormSubmit = event => {
        event.preventDefault();
        console.log(this.state)

        const post = { title: this.state.title, author: this.props.username, genre: this.state.genre, description: this.state.description }

        axios.post("/post", post).then(res => {
            console.log(res.data)
        })

        this.setState({
            title: "",
            description: "",
            redirectTo: '/forum'
        })

    }

    render() {
        const loggedIn = this.props.loggedIn;


        if (this.state.redirectTo) {
            return <Redirect to={{ pathname: this.state.redirectTo }} />
        } else {
            return (
            <div>
                {loggedIn ? (
                <div>
                    <div className="form-group">
                        <div className="col-12">
                            <label className="form-label" htmlFor="title">Pick the Genre:</label>
                        </div>
                        <select name="genre" className="mb-5 custom-select custom-select-lg" value={this.state.genre} onChange={this.handleInputChange}>
                            <option value="funny">Funny</option>
                            <option value="horror">Horror</option>
                            <option value="romance">Romance</option>
                            <option value="mystery">Mystery</option>
                            <option value="drama">Drama</option>
                            <option value="fantasy">Fantasy</option>
                        </select>
                        <div className="col-12 col-ml-auto">
                            <label className="form-label mt-5" htmlFor="title">Title:</label>
                        </div>
                        <div>
                            <input className="form-input mt-2 mb-5"
                                type="text"
                                id="title"
                                name="title"
                                value={this.state.title}
                                onChange={this.handleInputChange}
                            />
                        </div>
                        <div className="col-12 col-ml-auto">
                            <label className="form-label" htmlFor="description">Story:</label>
                        </div>
                        <div className="col-12">
                            <textarea className="form-input"
                                type="text"
                                id="description"
                                name="description"
                                rows="15"
                                cols="100"
                                value={this.state.description}
                                onChange={this.handleInputChange}
                            />
                        </div>
                    </div>
                    <button onClick={this.handleFormSubmit}>Submit</button>
                </div>
                ) : (
                    <div>
                    <div className="form-group">
                        <div className="col-12">
                            <label className="form-label" htmlFor="title">Pick the Genre:</label>
                        </div>
                        <select name="genre" className="mb-5 custom-select custom-select-lg" value={this.state.genre} onChange={this.handleInputChange} disabled>
                            <option value="funny">Funny</option>
                            <option value="horror">Horror</option>
                            <option value="romance">Romance</option>
                            <option value="mystery">Mystery</option>
                            <option value="drama">Drama</option>
                            <option value="fantasy">Fantasy</option>
                        </select>
                        <div className="col-12 col-ml-auto">
                            <label className="form-label mt-5" htmlFor="title">Title:</label>
                        </div>
                        <div>
                            <input className="form-input mt-2 mb-5"
                                type="text"
                                id="title"
                                name="title"
                                value={this.state.title}
                                disabled
                            />
                        </div>
                        <div className="col-12 col-ml-auto">
                            <label className="form-label" htmlFor="description">Story:</label>
                        </div>
                        <div className="col-12">
                            <textarea className="form-input"
                                type="text"
                                id="description"
                                name="description"
                                rows="15"
                                cols="100"
                                value="Please sign in to make a story"
                                disabled
                            />
                        </div>
                    </div>
                    <button onClick={this.handleFormSubmit} disabled>Submit</button>
                </div>
            
                )}
            </div>
            )
        }
    }
}

export default NewStory;