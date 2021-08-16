import data from './data';
import './App.css';
import Only1Pokemon from './Only1Pokemon';
import { BrowserRouter, Route, Switch, Link} from 'react-router-dom';
import About from './Pages/About';
import NotFound from './Pages/NotFound';
import PokemonDetais from './Pages/PokemonDetails';
import TesteAqui from './Pages/TesteAqui';





function App() {
  return (
    
    <main>
    <BrowserRouter>
    <nav>
      <Link to='/pokedex'>Home</Link>
      <Link to='/About'> About </Link>
    </nav>
      <Switch>
        <Route exact path='/pokedex' render={()=><Only1Pokemon pokemons={data} />}/>
        <Route path='/About' component={About}/>
        <Route exact path='/pokemons/:pokemonId' render={(props)=><PokemonDetais pokemons={data} {...props}/>}/>
        <Route component={NotFound}/>
    </Switch>
      
      </BrowserRouter>
    </main>

  );
}

export default App;
