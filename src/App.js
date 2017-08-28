import React, { Component } from 'react';
import './App.css';


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
        console.log(result.items)
        this.setState({
          tagsData: result.items
        })
      });
  }

  render() {
    const { tagsData } = this.state;
    
    return (
      <div>
        <div>Search by tag</div>
        <input type="text" value={this.state.tag} onChange={(e) => this.setState({tag: e.target.value})}/>
        <input type="button" value="SEARCH" onClick={this.getTags}/>

        <div className="cardContainer">
          {tagsData && tagsData.map((tag, index) => {
            return (
              <div key={index} className="card">
                <p>{tag.title.substring(0, 20)}...</p>
                <img src={tag.media.m}/>
              </div>
            )
          })}
        </div>
      </div>
    );
  }
}

export default App;
