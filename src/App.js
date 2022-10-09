import './App.css';
import React, { useState } from 'react';

// Components
import CardBottom, { Wrapper } from './components/LineCard';

function App() {
  return (
    <div class="container">
      <div class="controlpanel">
        <h1 id='cptitle'>TYPES</h1>
        <div class="buttoncontainer">
          <div class="typebutton Bug">Bug</div>
          <div class="typebutton Dark">Dark</div>
          <div class="typebutton Dragon">Dragon</div>
          <div class="typebutton Electric">Electric</div>
          <div class="typebutton Fairy">Fairy</div>
          <div class="typebutton Fight">Fight</div>
          <div class="typebutton Fire">Fire</div>
          <div class="typebutton Flying">Flying</div>
          <div class="typebutton Ghost">Ghost</div>
          <div class="typebutton Grass">Grass</div>
          <div class="typebutton Ground">Ground</div>
          <div class="typebutton Ice">Ice</div>
          <div class="typebutton Normal">Normal</div>
          <div class="typebutton Poison">Poison</div>
          <div class="typebutton Psychic">Psychic</div>
          <div class="typebutton Rock">Rock</div>
          <div class="typebutton Steel">Steel</div>
          <div class="typebutton Water">Water</div>
        </div>
      </div>
      <div class="cardswrapper">
      <div class="cardcell">
          <img src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png" alt='shoe-2'/>
          <div class="textcell">
            <div class="title">
              <h1>Bulbasaur</h1>
            </div>
            <div class="description">
              <p>There is a plant seed on its back right from the day this Pokémon is born. The seed slowly grows larger.</p>
            </div>
          </div>
          <div class="cardcolorleft Grass">
          </div>
        </div>
        <div class="cardcell">
          <img src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/002.png" alt='shoe-2'/>
          <div class="textcell">
            <div class="title">
              <h1>Ivysaur</h1>
            </div>
            <div class="description">
              <p>When the bulb on its back grows large, it appears to lose the ability to stand on its hind legs.</p>
            </div>
          </div>
          <div class="cardcolorleft Grass">
          </div>
        </div>
        <div class="cardcell">
          <img src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/003.png" alt='shoe-2'/>
          <div class="textcell">
            <div class="title">
              <h1>Venusaur</h1>
            </div>
            <div class="description">
              <p>Its plant blooms when it is absorbing solar energy. It stays on the move to seek sunlight. </p>
            </div>
          </div>
          <div class="cardcolorleft Grass">
          </div>
          <div class="cardcolorright Poison">
          </div>
        </div>
        <div class="cardcell">
          <img src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/004.png" alt='shoe-2'/>
          <div class="textcell">
            <div class="title">
              <h1>Charmander</h1>
            </div>
            <div class="description">
              <p>It has a preference for hot things. When it rains, steam is said to spout from the tip of its tail.</p>
            </div>
          </div>
          <div class="cardcolorleft Fire">
          </div>
        </div>
        <div class="cardcell">
          <img src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/005.png" alt='shoe-2'/>
          <div class="textcell">
            <div class="title">
              <h1>Charmeleon</h1>
            </div>
            <div class="description">
              <p>It has a barbaric nature. In battle, it whips its fiery tail around and slashes away with sharp claws.</p>
            </div>
          </div>
          <div class="cardcolorleft Fire">
          </div>
        </div>
        <div class="cardcell">
          <img src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/006.png" alt='shoe-2'/>
          <div class="textcell">
            <div class="title">
              <h1>Charizard</h1>
            </div>
            <div class="description">
              <p>It spits fire that is hot enough to melt boulders. It may cause forest fires by blowing flames.</p>
            </div>
          </div>
          <div class="cardcolorleft Fire">
          </div>
          <div class="cardcolorright Flying">
          </div>
        </div>
      </div>
    </div>
  )
}

export default App;