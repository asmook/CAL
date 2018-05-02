import React, { Component } from 'react';
import axios from 'axios'
import { Route} from 'react-router-dom'
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

  updateUser (userObject) {
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
        {/* greet user if logged in: */}
        {/* {this.state.loggedIn &&
        // <div>
        //   <p>Join the party, {this.state.username}!</p>
        //   <Home/>
        // </div>
        } */}
        {/* Routes to different components */}
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
          component={Forum} />
        <Route
          path="/newstory"
          render={() =>
            <NewStory
              username={this.state.username}
              loggedIn={this.state.loggedIn}
            />}
          />
          <Route
          exact path="/forum/funny"
          component={Funny} />
          <Route
          exact path="/forum/horror"
          component={Horror} />
          <Route
          exact path="/forum/mystery"
          component={Mystery} />
          <Route
          exact path="/forum/fantasy"
          component={Fantasy} />
          <Route
          exact path="/forum/romance"
          component={Romance} />
          <Route
          exact path="/forum/drama"
          component={Drama} />
      </div>
    );
  }
}

export default App;
