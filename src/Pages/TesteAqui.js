import React from 'react'


class TesteAqui extends React.Component {
  render(){
    return(
      <p>
      Teste aqui:aa  {this.props.match.params.pokemonId}
      </p>
      )
    
  }
}
export default TesteAqui;