import React from 'react'
import { Link } from 'react-router-dom';
import './App.css'

class Pokemon extends React.Component {
  render(){
    return(
      <div className = 'Pokemon'>
    <div className='info'>
      <Link to={`/pokemons/${this.props.pokemon.id}`} >More info</Link>
    <p>{this.props.pokemon.name}</p>
    <p>{this.props.pokemon.type}</p>
    <p>Average weight: {this.props.pokemon.averageWeight.value} {this.props.pokemon.averageWeight.measurementUnit}</p>
       </div> 
      <img src={this.props.pokemon.image} alt="" />
     </div>)
    
  }
}
export default Pokemon;