import data from './data';
import './App.css';

function App() {
  return (
    <div className="pokedex">
     {data.map(pokemon=> <div key={pokemon.id} className = 'Pokemon'>
     <div className='info'>
    <p>{pokemon.name}</p>
    <p>{pokemon.type}</p>
    <p>Average weigth: {pokemon.averageWeight.value} {pokemon.averageWeight.measurementUnit}</p>
       </div> 
      <img src={pokemon.image} alt="" />
     </div>)}
    </div>
  );
}

export default App;
