import React,{Component} from 'react';
import './App.css';
import TodoItems from'./components/TodoItem/TodoItems';
import AddItems from './components/AddItem/AddItems';

class App extends Component {
  state = {
    items : [
      {id :1 , name : "Amina" , age : 24},
      {id :2 , name : "Salma" , age : 25},
      {id :3 , name : "Rania" , age : 23}
    ]
  }
  deleteItem = (id) =>{
    let items = this.state.items;
    let i = items.findIndex(item => item.id === id);
    items.splice(i,1);
    this.setState({items :items});
  }

  addItem = (item) =>{
    item.id = Math.random();
    let items = this.state.items;
    items.push(item)
    this.setState({items : items})
  }

  render(){
    return (
      <div className="App container">
        <h1 className="text-center">Todo List</h1>
        <TodoItems items={this.state.items} deleteItem={this.deleteItem}/>
        <AddItems addItem={this.addItem}/>
      </div>
    );
  }
}

export default App;
