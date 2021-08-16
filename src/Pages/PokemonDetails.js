import React from 'react'



class PokemonDetais extends React.Component {
  render(){
    let {pokemons} = this.props
    let {pokemonId}= this.props.match.params
    pokemonId = parseInt(pokemonId)
    let pokemon = pokemons.filter(pokemon => pokemon.id === pokemonId)
    pokemon = pokemon[0]

  
    return(
      <main>
      <div className = 'Pokemon'>
    <div className='info'>
    <p>{pokemon.name}</p>
    <p>{pokemon.type}</p>
    <p>Average weight: {pokemon.averageWeight.value} {pokemon.averageWeight.measurementUnit}</p>
       </div> 
      <img src={pokemon.image} alt="" />
     </div>
     <div className='info'>
       <p>Sumary: {pokemon.summary}</p>
      <p>Location: {pokemon.foundAt[0].location}</p>
      <img src={pokemon.foundAt[0].map} alt="" />
     </div>
      </main>
      )
  }
}
export default PokemonDetais;