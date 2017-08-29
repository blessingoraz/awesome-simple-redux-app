import React, { Component } from 'react';
import { connect } from 'react-redux';
import {fetchTags}  from './tagActions';
import Tags from './Tags';
import './App.css';


class App extends Component {

  state = {
    tag: ""
  }

  getTags = () => {
    const { tag } = this.state;
    const url = tag ? `http://api.flickr.com/services/feeds/photos_public.gne?tags=${tag}&format=json&nojsoncallback=true` : ''

    this.props.fetchTags(url);
  }

  render() {

    return (
      <div>
        <h2>Search by tag</h2>
        <input type="text" value={this.state.tag} onChange={(e) => this.setState({ tag: e.target.value })} />
        <input type="button" value="SEARCH" onClick={this.getTags} />

        <Tags tags={this.props.tags}/>
      </div>
    );
  }
}

const mapStateToProps = ({tags}) => {
  return { tags };
}


export default connect( mapStateToProps, { fetchTags })(App);
