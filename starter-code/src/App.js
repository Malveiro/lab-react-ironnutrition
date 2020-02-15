import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import 'bulma/css/bulma.css';
import foods from './foods.json';
import FoodBox from './components/FoodBox';
import FoodForm from './components/FoodForm';

class App extends Component {

  constructor(){
    super();
    this.state={
      food: foods,
      form: false,
      searchString: '',
    }
  }

  showForm=()=>{
    this.setState({form: !this.state.form})
    console.log(this.state.form)
  }

  addFoodHandler = (theFood) => {
    const foodCopy = [...this.state.food];
    foodCopy.push(theFood);
    this.setState({
      food: foodCopy,
      form: !this.state.form
    })
  }

  searchFood=(event)=>{
    /* const value ist der in der Searchbar eingegebene Wert */
  const {value} = event.target
  console.log("value " +value);
  this.setState({searchString: value});
  }

  render() {
    const filteredFood= this.state.food.filter(oneFoodItem=>oneFoodItem.name.toLowerCase().includes(this.state.searchString.toLowerCase()));
    return (
        <div className="page-view">
          <h2 className="is-size-2 has-text-weight-bold">IronNutrition</h2>
          <input type="text"  value={this.state.searchString} placeholder="Search Food ..." onChange={this.searchFood}/> <br />
          <button onClick={this.showForm}>Add Food</button>
          {this.state.form ? <FoodForm addFood={this.addFoodHandler}/>: <p></p>}
          {filteredFood.map((oneFood,index)=>{
            return (<FoodBox key={index} {...oneFood} />)
          })}
          
        </div>
    );
  }
}

export default App;
