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
                <div className="posts">
                    <ul>
                        <li className="card border-info mb-3">
                            <div class="card-header">Cinderella Rollerskating</div>
                            <div class="card-body">
                                <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                 sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                                 Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip 
                                 ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit
                                  esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                                   sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                            </div>
                        </li>
                         <li className="card border-info mb-3">
                            <div class="card-header">Black mirror and the Truman show</div>
                            <div class="card-body">
                                <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                 sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                                 Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip 
                                 ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit
                                  esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                                   sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                            </div>
                        </li>
                         <li className="card border-info mb-3">
                            <div class="card-header">All you need is farts n skateboards</div>
                            <div class="card-body">
                                <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                 sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                                 Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip 
                                 ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit
                                  esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                                   sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                            </div>
                        </li>
                         <li className="card border-info mb-3">
                            <div class="card-header">Ariel is slutty</div>
                            <div class="card-body">
                                <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                 sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                                 Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip 
                                 ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit
                                  esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                                   sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                            </div>
                        </li>
                         <li className="card border-info mb-3">
                            <div class="card-header">Sarah is a crumdgeon</div>
                            <div class="card-body">
                                <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                 sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                                 Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip 
                                 ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit
                                  esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                                   sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                            </div>
                        </li>
                         <li className="card border-info mb-3">
                            <div class="card-header">Chris is stinky</div>
                            <div class="card-body">
                                <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                 sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                                 Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip 
                                 ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit
                                  esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                                   sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </Fragment>
)

export default Forum;