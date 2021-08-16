import React from 'react'
import data from './data';
import './App.css';
import Pokemon from './Pokemon'

class Pokedex extends React.Component {
  render(){
  return (
    <div className="pokedex" key='1'>
     {data.map(pokemon=> 
      <Pokemon pokemon={pokemon} key={pokemon.id} />
      )}
    </div>
  );}
}

export default Pokedex;