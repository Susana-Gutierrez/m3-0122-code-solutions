import React from 'react';
import ReactDOM from 'react-dom';
import Carousel from './carousel';

const IMAGE = [
  { name: 'Pikachu', url: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/025.png' },
  { name: 'Squirtle', url: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/007.png' },
  { name: 'Charmander', url: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/004.png' },
  { name: 'Bulbasaur', url: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png' },
  { name: 'Mew', url: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/151.png' }
];

ReactDOM.render(<Carousel images={IMAGE} />, document.getElementById('root'));
