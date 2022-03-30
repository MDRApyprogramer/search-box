import React, { Component } from 'react';
import { CardList } from './components/card-list/card-list.components';
import { SearchBox } from './components/search-box/search-box.component';
import './App.css';

class App extends Component{
  constructor(){
    super();
    this.state={
      monsters: [],
      searchFeild:''
    }
  }
  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users=> this.setState({monsters : users}))
  }
  handleChange = (e) =>{
    this.setState({searchFeild: e.target.value})
  }
  render(){
    const { monsters, searchFeild} = this.state;
    const filteredMonsters =  monsters.filter(
      monster => monster.name.toLowerCase().includes(searchFeild.toLowerCase()))
    return (
      <div className="App">
        <h1>Monster Playcard</h1> 
        <SearchBox
          placeholder='Search Monsters' 
          handleChange={this.handleChange}
        />
        <CardList 
          monsters = { filteredMonsters }
        />
      </div>
    );
  }
}

export default App;
