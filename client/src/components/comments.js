import React, { Component } from 'react';
import axios from 'axios'
import { Link } from 'react-router-dom'
import FirstPost from './FirstPost'

class Comments extends Component {

    state = {
        story: "",
        author: "",
        comment: ""
    }

    componentDidMount() {
        this.getBook()
    }

    getBook = () => {
        axios.get("/api/story/" + this.props.match.params.id).then(res => {
            console.log(res.data)
            this.setState({ story: res.data.description, author: res.data.author })
        })
    }

    handleSubmit(event){
        event.preventDefault()
        console.log("hi sarah");
    }
    render() {
        return (
            <div>
                <FirstPost
                    description={this.state.story}
                    author={this.state.author}
                />
                <form>
                    <div className="col-12 mt-5">
                        <textarea className="form-input"
                            type="text"
                            id="description"
                            name="description"
                            rows="10"
                            cols="150"
                            value= {this.state.comment}
                            onChange= {(event) => this.setState({comment: event.target.value})}
                        />
                    </div>
                    <button
                        className="btn btn-primary col-1"

                        onClick={(event)=>this.handleSubmit(event)}
                        type="submit">Submit</button>
                </form>
            </div>
        )
    }
}

export default Comments;