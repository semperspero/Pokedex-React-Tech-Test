import React from "react";
import Throbber from './Throbber.js';

const Card = ({ pokemon, loading, infoPokemon, Thr}) => {

    return (
        <>
          {
            loading ? <Throbber/> :
              pokemon.map((item) => {
                const PokeType=(item.types[0].type.name)
                    return (
                    <>
                      <div class="cardcell" key={item.id} type={item.type} onClick={()=>infoPokemon(item, PokeType)} >
                        <img src={item.sprites.front_default} alt='shoe-2'/>
                        <div class="textcell">
                          <div class="title">
                            <h1>{item.name}</h1>
                          </div>
                          <div class="description">
                            <p>#{item.id}</p>
                          </div>
                        </div>
                        <div className={"cardcolorleft " + PokeType}>
                          <div className={PokeType} id="card-click">VIEW</div>
                        </div>
                      </div>
                    </>
                  )
              })
          }
        </>
      )
}

export default Card;
