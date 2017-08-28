import React, { Component } from 'react';
import './App.css';

class App extends Component {

  state = {
    tag: ""
  }

  getTags = () => {
    const url = "https://api.flickr.com/services/feeds/photos_public.gne?format=json";
    const { tag } = this.state;
    fetch(`${url}&tags=${tag}`)
      .then((res) => res.json())
      .then((data) => console.log(data))
  }

  render() {
    return (
      <div className="App">
        <div>Add tag</div>
        <input type="text" value={this.state.tag} onChange={(e) => this.setState({tag: e.target.value})}/>
        <input type="button" value="Click me" onClick={this.getTags}/>
      </div>
    );
  }
}

export default App;
