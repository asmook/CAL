import React from 'react'

const Results = props => (
    <li className="card border-info mb-3">
        <div className="card-header">{props.title}</div>
        <div className="card-body">
            <p className="card-text">{props.description}</p>
            <p className="card-text">Author: <strong>{props.author}</strong></p>
            <button className="btn btn-primary">Reply</button>
        </div>
    </li>
)

export default Results