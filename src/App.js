import {Component} from 'react'
//import logo from './logo.svg';
import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';
import './App.css';

class App extends Component{
constructor(){
  super();

  this.state = {
    monsters:[],
    searchfield:''
  };
}

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
          .then(response=>response.json())
          .then((users)=>this.setState(()=>{
            return {monsters:users}
          },
          ()=>{
            //console.log(this.state)
          }
          ))
  }
 onSearchChange = (e)=>{
  //console.log(e.target.value);
  const searchfield = e.target.value.toLowerCase();
  
  this.setState(()=>{
    return {searchfield}
  })
}
  render()
  {
    const {monsters, searchfield} = this.state;
    const {onSearchChange} = this;
    const filteredMonsters = monsters.filter((m)=>{
      return m.name.toLowerCase().includes(searchfield);
   });

    return (
      <div className="App">
      <h1 className='app-title'>Monsters Rolodex</h1>
       <SearchBox className='monsters-search-box' placeholder='Search Monsters' onChangeHandler={onSearchChange}/>
       <CardList monsters={filteredMonsters}/>
      </div>
    );
  }
}

export default App;
