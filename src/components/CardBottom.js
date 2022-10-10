import React from "react";
import { Badge, CBottom, CBottomTitle, Versions, VersionTitle, Price, Size, Sizes, SizeTitle, Stars, Title } from "../style";

const CardBottom = ({currentColor, setCurrentColor, data}) => {
    return(
        <CBottom>
            <CBottomTitle>Stats</CBottomTitle>
            <Title>Battle Rating</Title>
            <Stars>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
            </Stars>
            {/* <div className="stats-div">
                {
                    data.stats.map(poke=>{
                        return(
                            <>
                                <h3>{poke.stat.name}:{poke.base_stat}</h3>
                            </>
                        )
                    })
                }
            </div>
            <div className="abilities">
                {
                    data.abilities.map(poke=>{
                        return(
                            <>
                            <div className="group">
                                <h2>{poke.ability.name}</h2>
                            </div>
                            </>
                        )
                    })
                }
            </div> */}
            <Size>
                <SizeTitle>Evolution</SizeTitle>
                <Sizes>
                    <span onClick={() => setCurrentColor(1)}>1</span>
                    <span onClick={() => setCurrentColor(2)}>2</span>
                    <span>3</span>
                </Sizes>
            </Size>
            <Price currentColor={currentColor}>
                <span>STAGE 1</span>
                <span></span>
            </Price>
        </CBottom>
    )
}

export default CardBottom