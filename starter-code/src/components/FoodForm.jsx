import React, { Component } from 'react';
//import foods from '../foods.json';

class FoodBox extends Component {
    
    constructor(props){
        super(props);

        this.state = {
            name: '',
            calories: 0,
            image: '', 
        }
    }

    handleFormSubmit=(event)=>{
        event.preventDefault();
        this.props.addFood(this.state);
        this.setState({
            name: '',
            calories: '',
            image: ''
        })
    }

    handleChange=(event)=>{
        let{name, value}=event.target;
        this.setState({[name]: value})
        console.log(this.state)
    }

    render(){
        return(
            <div>
                <form onSubmit={this.handleFormSubmit}>
                    <label>Name:</label>
                    <input type="text" name="name" value={this.state.name} onChange={this.handleChange}/>

                    <label>calories</label>
                    <input type="number" name="calories" value={this.state.calories} onChange={this.handleChange}/>

                    <label>image</label>
                    <input type="url" name="image" checked={this.state.image} onChange={this.handleChange}/>
          
                    <input type="submit" value="Submit" />
                </form>
            </div>
        )
    }
}
     
 export default FoodBox;