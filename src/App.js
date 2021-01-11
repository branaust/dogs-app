import React, { Component } from 'react';
import DogList from './DogList'
import { Route, Switch, NavLink } from 'react-router-dom';
import './App.css';
import Nav from './Nav'

import whiskey from './imgs/whiskey.jpg'
import hazel from './imgs/hazel.jpg'
import tubby from './imgs/tubby.jpg'

class App extends Component {
  static defaultProps = {
    dogs: [
      {
        name: "Whiskey",
        age: 5,
        src: whiskey,
        facts: [
          "Whiskey loves eating popcorn.",
          "Whiskey is a terrible guard dog.",
          "Whiskey wants to cuddle with you!"
        ]
      },
      {
        name: "Hazel",
        age: 3,
        src: hazel,
        facts: [
          "Hazel has soooo much energy!",
          "Hazel is highly intelligent.",
          "Hazel loves people more than dogs."
        ]
      },
      {
        name: "Tubby",
        age: 4,
        src: tubby,
        facts: [
          "Tubby is not the brightest dog",
          "Tubby does not like walks or exercise.",
          "Tubby loves eating food."
        ]
      }
    ]
  }


  render() {
    return (
      <div className="App" >
        <Route exact path="/dogs" render={() => <DogList dogs={this.props.dogs} />} />
      </div>
    );
  }
}


export default App;
