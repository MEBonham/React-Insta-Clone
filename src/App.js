import React, { Component } from 'react';
import './App.css';
import dummyData from "./dummy-data";
import SearchBar from "./components/SearchBar/SearchBar";
import PostContainer from "./components/PostContainer/PostContainer";

class App extends Component {
  constructor() {
    super();
    this.state = { data: [] };
  }

  render() {
    return (
      <div className="App">
        <SearchBar />
        {dummyData.map(item => 
          <PostContainer item={item} />
        )}
      </div>
    );
  }
}

export default App;
