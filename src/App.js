import React from 'react';
import './App.css';

import Menu from './Menu.js';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      items: [],
      menuOpen: false,
      selectedPokemon: null
    }

    this.selectPokemon  = this.selectPokemon.bind(this);
  }

  componentDidMount() {

    fetch('https://pokeapi.co/api/v2/pokemon/1/')
      .then(response => response.json())
      .then(data => {
        
        this.setState({
          items: [...this.state.items, data]
        })
      })

      fetch('https://pokeapi.co/api/v2/pokemon/4/')
      .then(response => response.json())
      .then(data => {
        this.setState({
          items: [...this.state.items, data]
        })
      })

      fetch('https://pokeapi.co/api/v2/pokemon/8/')
      .then(response => response.json())
      .then(data => {
        this.setState({
          items: [...this.state.items, data]
        })
      })

      fetch('https://pokeapi.co/api/v2/pokemon/12/')
      .then(response => response.json())
      .then(data => {
        this.setState({
          items: [...this.state.items, data]
        })
      });
  }

  selectPokemon(pokemon) {


    this.setState({
      selectedPokemon: pokemon
    })
  }

  render() {
    const { menuOpen, selectedPokemon } = this.state;
    return (
      <>
      <header><h1>Navbar api</h1></header>
      <div className="App">

        {selectedPokemon ? (
          <>
          <img 
            src={selectedPokemon.sprites.front_shiny} 
            className="selectedPokemon"
            alt="{ selectedPokemon.name }"
          />
          </>
        ) : null}
        <button className="menuButton" onClick={() => this.setState({ menuOpen: !menuOpen })}>|||</button>
        {menuOpen ?  (
          <Menu 
            items={this.state.items} 
            selectItem={this.selectPokemon} 
          />
        ) : null }
      </div>
      </>
    );
  }
}

export default App;
