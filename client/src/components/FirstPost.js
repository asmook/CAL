import React, { Component } from 'react';

const FirstPost = props => (

            <div class="card mt-5 border-danger">
                <div class="card-body">
                    <blockquote class="blockquote mb-0">
                        <p>{props.description}</p>
                        <footer class="blockquote-footer">Author: <cite title="Source Title">{props.author}</cite></footer>
                    </blockquote>
                </div>
            </div>
        )


export default FirstPost