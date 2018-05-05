import React, { Component } from 'react'
import { Link } from 'react-router-dom'
// import logo from '../logo.svg';
import axios from 'axios'
import "./navbar.css";

class Navbar extends Component {
    constructor() {
        super()
        this.logout = this.logout.bind(this)
    }

    logout(event) {
        event.preventDefault()
        console.log('logging out')
        axios.post('/user/logout').then(response => {
          console.log(response.data)
          if (response.status === 200) {
            this.props.updateUser({
              loggedIn: false,
              username: null
            })
          }
        }).catch(error => {
            console.log('Logout error')
        })
      }

    render() {
        const loggedIn = this.props.loggedIn;
        console.log('navbar render, props: ')
        console.log(this.props);
        
        return (
            <nav className="navbar navbar-expand-sm bg-light navbar-light">
                        <div id="top-filler"></div>
                        <a className="navbar-brand" href="/">
                            <img src="https://2.bp.blogspot.com/-BNcL1BCgdso/VxUi-FIgjuI/AAAAAAAADNQ/Qt8hlaHvkRUVc1f7hZkO0uEH9ls2R3boACPcBGAYYCw/s1600/S.jpg" width="50" height="50"  alt=""/>
                        </a>
                            <h1 className="App-title">StoryBook</h1>
                        {loggedIn ? (
                            <section className="navbar-section">
                                <Link to="/forum" className="btn btn-link ml-5">
                                    <span className="text-secondary">stories</span>
				                </Link>
                                <Link to="#" className="btn btn-link text-secondary" onClick={this.logout}>
                                <span className="text-secondary">logout</span></Link>
                            </section>
                        ) : (
                            <section className="navbar-section">
                                <Link to="/" className="btn btn-link text-secondary ml-5">
                                    <span className="text-secondary">home</span>
                                </Link>
                                <Link to="/login" className="btn btn-link text-secondary">
                                    <span className="text-secondary">login</span>
				                </Link>
                                <Link to="/signup" className="btn btn-link">
                                    <span className="text-secondary">sign up</span>
				                </Link>
                                <Link to="/forum" className="btn btn-link">
                                    <span className="text-secondary">stories</span>
				                </Link>
                            </section>
                        )}
            </nav>

        );

    }
}

export default Navbar