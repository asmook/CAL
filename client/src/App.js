import React, { Component } from 'react';
import axios from 'axios'
import { Route } from 'react-router-dom'
import './App.css'
// components
import Signup from './components/sign-up'
import LoginForm from './components/login-form'
import Navbar from './components/navbar'
import Home from './components/home'
import Forum from './components/forum'
import NewStory from './components/Newstory'
import Funny from './components/Genres/funny'
import Horror from './components/Genres/horror'
import Mystery from './components/Genres/mystery'
import Fantasy from './components/Genres/fantasy'
import Romance from './components/Genres/romance'
import Drama from './components/Genres/drama'
import Comments from './components/comments'
import Footer from './components/footer'


class App extends Component {
  constructor() {
    super()
    this.state = {
      loggedIn: false,
      username: null
    }

    this.getUser = this.getUser.bind(this)
    this.componentDidMount = this.componentDidMount.bind(this)
    this.updateUser = this.updateUser.bind(this)
  }

  componentDidMount() {
    this.getUser()
  }

  updateUser(userObject) {
    this.setState(userObject)
  }

  getUser() {
    axios.get('/user/').then(response => {
      console.log('Get user response: ')
      console.log(response.data)
      if (response.data.user) {
        console.log('Get User: There is a user saved in the server session: ')

        this.setState({
          loggedIn: true,
          username: response.data.user.username
        })
      } else {
        console.log('Get user: no user');
        this.setState({
          loggedIn: false,
          username: null
        })
      }
    })
  }

  render() {
    return (
      <div className="App">

        <Navbar updateUser={this.updateUser} loggedIn={this.state.loggedIn} />
        <Route
          exact path="/"
          component={Home} />
        <Route
          path="/login"
          render={() =>
            <LoginForm
              updateUser={this.updateUser}
            />}
        />
        <Route
          path="/signup"
          render={() =>
            <Signup
              signup={this.signup}
            />}
        />
        <Route
          exact path="/forum"
          render={() =>
            <Forum
              loggedIn={this.state.loggedIn}
            />}
        />
        <Route
          path="/newstory"
          render={() =>
            <NewStory
              username={this.state.username}
              loggedIn={this.state.loggedIn}
            />}
        />
        <Route
          path="/forum/funny"
          render={() =>
            <Funny
              loggedIn={this.state.loggedIn}
            />}
        />
        <Route
          path="/forum/horror"
          render={() =>
            <Horror
              loggedIn={this.state.loggedIn}
            />}
        />
        <Route
          path="/forum/mystery"
          render={() =>
            <Mystery
              loggedIn={this.state.loggedIn}
            />}
        />
        <Route
          path="/forum/fantasy"
          render={() =>
            <Fantasy
              loggedIn={this.state.loggedIn}
            />}
        />
        <Route
          path="/forum/romance"
          render={() =>
            <Romance
              loggedIn={this.state.loggedIn}
            />}
        />
        <Route
          path="/forum/drama"
          render={() =>
            <Drama
              loggedIn={this.state.loggedIn}
            />}
        />
        <Route
          exact path="/story/:id"
          component={Comments} />
        <Footer />
      </div>
    );
  }
}

export default App;