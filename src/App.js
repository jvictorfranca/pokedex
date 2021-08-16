import data from './data';
import './App.css';
import Only1Pokemon from './Only1Pokemon';


function App() {
  return (
    <Only1Pokemon pokemons={data} />
  );
}

export default App;
