import React from 'react'

const Results = props => (
<div className="card mt-4">
        <div className="card-header text-center">
            {props.title}
        </div>
    <div className="card-body">
        <p className="card-text">{props.author}</p>
    </div>
</div>
)

export default Results;