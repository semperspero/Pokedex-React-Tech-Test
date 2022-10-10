import '../styles/App.css';
import React, { useState } from 'react';
import { Card, CardWrapper, Container, CTop, CTopText, CTopTitle, Description, Logo, CardImage, CardImages, Wrapper, NameBar, VersionTitle, Versions } from '../style';

import Brand from "../assets/pokemon-logo.png"
import CardBottom from './CardBottom';
import { useMotionValue, useTransform } from 'framer-motion';

const Pokeinfo = ({ data }) => {
    const [currentColor, setCurrentColor] = useState(1);
    const [CurrentVersion, setCurrentVersion] = useState(1);
  
    const x = useMotionValue(0);
    const y = useMotionValue(0);
  
    const rotateX = useTransform(y,[-100,100],[30,-30]);
    const rotateY = useTransform(x,[-100,100],[30,-30]);
  
    const variants = {
      default:{
        translateX:0,
        rotateZ:0,
      },
  
      cardImage1: {
        translateX:-510,
      },
      cardImage1: {
        translateX:-510,
      },
      cardImage1: {
        translateX:-510,
      },
    }
    return (
        <>
        {
            (!data) ? "" : (
                <>
                    <Wrapper>
                        <Container>
                            <CardWrapper
                            style={{x,y,rotateX,rotateY,z:100}}
                            drag
                            dragConstraints={{top:0,right:0,bottom:0,left:0}}
                            dragElastic={0.1}
                            whileTap={{cursor:"grabbing"}}
                            >
                                <Card>
                                    <CTop currentColor={currentColor}>
                                    <NameBar currentColor={currentColor}>
                                        <span></span>
                                        <span>{data.name}</span>
                                    </NameBar>
                                    <Logo src={Brand} alt='logo'/>
                                        <div className="version-container">
                                            <VersionTitle>Version</VersionTitle>
                                            <Versions>
                                                <div className="version-1" onClick={() => setCurrentVersion(1)}></div>
                                                <div className="version-2" onClick={() => setCurrentVersion(2)}></div>
                                            </Versions>
                                        </div>
                                        <CardImages style={{x,y,rotateX,rotateY,z:10000}}animate={currentColor === 2 ? variants.cardImages : variants.default}
                                            variants={variants}>
                                            <CardImage src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${data.id}.svg`} alt='dream-world'/>
                                        </CardImages>
                                    </CTop>
                                    <CardBottom
                                    currentColor={currentColor}
                                    setCurrentColor={setCurrentColor}
                                    data={data}
                                    />
                                </Card>
                            </CardWrapper>
                        </Container>
                    </Wrapper>
                </>
            )
        }

        </>
    )
}
export default Pokeinfo