import React from "react";
const Card = ({ pokemon, loading, infoPokemon}) => {

    return (
        <>
          {
            loading ? <h1>Loading...</h1> :
              pokemon.map((item) => {
                const PokeType=(item.types[0].type.name)
                    return (
                    <>
                      <div class="cardcell" key={item.id} type={item.type} onClick={()=>infoPokemon(item)}>
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
