import React, {Component} from 'react';
import axios from 'axios'
import Results from './Results'


class Forum extends Component {

  state = {
    title: "",
    author: "",
    articles: []
  }

  componentDidMount() {
    this.getTopics()
  }

  handleInputChange = event => {
    let value = event.target.value;
    const name = event.target.name;
  
    this.setState({
        [name]: value
    })
  }

  getTopics = () => {
    axios.get("/forum/adventure").then(res => {
      // console.log(res.data)
      this.setState({articles: res.data})
      console.log(this.state.articles)
    })
    
  }

  handleFormSubmit = event => {
    event.preventDefault();
    console.log(this.state)

    const post = {title: this.state.title, author: "cj"}

    axios.post("/post", post).then(res => {
      console.log(res.data)
    })

    this.setState({
        title: ""
    })
}

  render() {
    return (
<div>
<button type="button" class="btn btn-primary" data-toggle="modal" data-target=".bd-example-modal-sm">Create New</button>

<div class="modal fade bd-example-modal-sm" tabIndex="-1" role="dialog" aria-labelledby="mySmallModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-sm">
    <div class="modal-content">
    <div className="form-group">
                            <div className="col-1 col-ml-auto">
                                <label className="form-label" htmlFor="username">title</label>
                            </div>
                            <div className="col-3 col-mr-auto">
                                <input className="form-input"
                                    type="text"
                                    id="title"
                                    name="title"
                                    placeholder="Username"
                                    value={this.state.title}
                                    onChange={this.handleInputChange}
                                />
                            </div>
                        </div>
                        <button onClick={this.handleFormSubmit}>Submit</button>
    </div>
  </div>
</div>
<ul class="nav nav-tabs">
  <li class="nav-item">
    <a class="nav-link active" href="/forum/adventure">Adventure</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#">Genre</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#">Genre</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#">Genre</a>
  </li>
</ul>
<div className="mt-5">
                <div className="card">
                    <div className="card-header text-center">
                        Results
                    </div>
                    <div className="card-body">
                        {this.state.articles.map(article => (
                          
                            <Results
                                key={article._id}
                                id={article._id}
                                title={article.title}
                                author={article.author}
                            />

                        ))}
                    </div>
                </div>
            </div>
</div>
    )
  }
}

export default Forum;