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


  render() {
    return (
        <div className="page-view">
          <h2 className="is-size-2 has-text-weight-bold">IronNutrition</h2>
          <button onClick={this.showForm}>Add Food</button>
          {this.state.form ? <FoodForm addFood={this.addFoodHandler}/>: <p></p>}
          {this.state.food.map((oneFood,index)=>{
            return (<FoodBox key={index} {...oneFood} />)
          })}
          
        </div>
    );
  }
}

export default App;
