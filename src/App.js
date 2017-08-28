import React, { Component } from 'react';
import './App.css';

import * as mock from './mockData';

class App extends Component {

  state = {
    tag: ""
  }

  getTags = () => {
    const { tag } = this.state;
    const url = tag ?`http://api.flickr.com/services/feeds/photos_public.gne?tags=${tag}&format=json&nojsoncallback=true`: ''

    fetch(url)
      .then((res) => {
        return res.text()
      })
      .then((data) => {
        const result = JSON.parse(data);
        this.setState({
          tagsData: result.items
        })
      });
  }

  render() {
    const { data } = mock,
          { tagsData} = this.state;
    
    return (
      <div className="App">
        <div>Add tag</div>
        <input type="text" value={this.state.tag} onChange={(e) => this.setState({tag: e.target.value})}/>
        <input type="button" value="Click me" onClick={this.getTags}/>

        <div>
          {tagsData && tagsData.map((tag, index) => {
            return (
              <div key={index}>
                <p>{tag.title}</p>
              </div>
            )
          })}
        </div>
      </div>
    );
  }
}

export default App;
