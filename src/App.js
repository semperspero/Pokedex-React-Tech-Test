import React, { useState } from 'react';
import Main from './tutcomps/Main.js';
import './styles/App.css';

function App() {
  return (
    <>
      <div class="body-content">
        
        <div class="header-bar">
          <div class="module-border-wrap">
            <div class="module">
              <h1 id='header-title'>Pokedex</h1>
              <div class="typebutton bug">Bug</div>
              <div class="typebutton dragon">Dragon</div>
              <div class="typebutton electric">Electric</div>
              <div class="typebutton fight">Fighting</div>
              <div class="typebutton fire">Fire</div>
              <div class="typebutton flying">Flying</div>
              <div class="typebutton ghost">Ghost</div>
              <div class="typebutton grass">Grass</div>
              <div class="typebutton ground">Ground</div>
              <div class="typebutton ice">Ice</div>
              <div class="typebutton normal">Normal</div>
              <div class="typebutton poison">Poison</div>
              <div class="typebutton psychic">Psychic</div>
              <div class="typebutton rock">Rock</div>
              <div class="typebutton water">Water</div>
            </div>
          </div>
        </div>
        <div class="cardswrapper">
          <Main/>
        </div>
        <div class="footer-bar">
          <p id='footer-text'>SemperSpero 2022 - Built using <a href="https://reactjs.org/">React</a> / <a href="https://styled-components.com/">styled-components</a> / <a href="https://www.framer.com/motion/">framer-motion</a>.</p>
        </div>
      </div>
    </>
  )
}

export default App;