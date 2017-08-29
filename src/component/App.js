import React, { Component } from 'react';
import { connect } from 'react-redux';
import {fetchTags}  from '../actions/tagActions';
import Tags from './Tags';
import '../App.css';


class App extends Component {

  state = {
    tag: ""
  }

  getTags = () => {
    const { tag } = this.state;
    const url = tag ? `http://api.flickr.com/services/feeds/photos_public.gne?tags=${tag}&format=json&nojsoncallback=true` : ''

    this.props.fetchTags(url);
    this.setState({tag: ''})
  }

  render() {
    const {loading, tags, error } = this.props;

    if(loading) {
      return (
        <div>
          <h2>loading ... </h2>
        </div>
      )
    }

    return (
      <div>
        <h2>Search by tag</h2>
        <input type="text" value={this.state.tag} onChange={(e) => this.setState({ tag: e.target.value })} />
        <input type="button" value="SEARCH" onClick={this.getTags} />

        <Tags tags={tags}/>
      </div>
    );
  }
}

const mapStateToProps = ({tagsReducer}) => {
  console.log(tagsReducer, "reducer is here")
  return { 
    tags: tagsReducer.tags || {},
    loading: tagsReducer.loading,
    error: tagsReducer.error
   };
}


export default connect( mapStateToProps, { fetchTags })(App);
