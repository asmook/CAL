import React, { Fragment } from 'react';

const Forum = () => (
    <Fragment>
        <div class="genres">
            <ul>
                <li><a href="#">funny</a></li>
                <li><a href="#">spooky</a></li>
                <li><a href="#">sexy</a></li>
                <li><a href="#">bougie</a></li>
                <li><a href="#">dad jokes</a></li>
                <li><a href="#">nsfw</a></li>
            </ul>
        </div>
        <div className="container">
            <div className="row">
                <div className="createNew float-right">
					 <button type="button" className="btn btn-outline-info float-right">Create New Story</button>
                </div>
                <div className = "posts">
                </div>
            </div>
        </div>
    </Fragment>
)

export default Forum;