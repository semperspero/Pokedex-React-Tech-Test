import '../styles/App.css';
// import './components/Main.js';
import React, { useState } from 'react';


const ListCards = ({ pokemon, loading,infoPokemon}) => {
  return (
    <>
      {
        loading ? <h1>Loading...</h1> :
          pokemon.map((item) => {
              return (
                <>
                  <div class="cardcell" key={item.id} type={item.type} onClick={()=>infoPokemon(item)}>
                    <img src={item.sprites.front_default} alt='shoe-2'/>
                    <div class="textcell">
                      <div class="title">
                        <h1>{item.name}#{item.id}</h1>
                      </div>
                      <div class="description">
                        <p>Description</p>
                      </div>
                    </div>
                    <div class="cardcolorleft Grass">
                    </div>
                  </div>
                </>
              )
          })
      }
    </>
  )
}

export default ListCards;