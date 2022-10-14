import { motion } from "framer-motion";
import styled from "styled-components";
import { renderGradient } from "./utils";

export const Wrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #000;
`

export const Container = styled.div`
    width: 100%;
    height: 100%;
    display: grid;
    place-items: center;
    cursor pointer;
    perspective: 2000;
`

export const CardWrapper = styled(motion.div)`
    width: 50rem;
    height: 70rem;
    display: grid;
    place-items: center;
    overflow: hidden;
`
export const Card = styled.div`
    width: 30rem;
    height: 55rem;
    background: #eee;
    border-radius: 2.5rem;
    box-shadow: 0.2rem 6rem rgba(0,0,0,0.7);
`

export const CTop = styled.div`
    height: 50%;
    padding-left: 2rem;
    border-radius: 2.5rem 2.5rem 0 0;
    transition: background 0.5s;
    background: ${({type}) => type};
`

export const Logo = styled.img`
    width: 8rem;
    margin-bottom: 5rem;
    opacity: 0.8;
`

export const CTopText = styled.div`
    color: #fff;
`

export const CTopTitle = styled.h1`
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: .1rem;
    margin-bottom: 1rem;
`

export const Description = styled.p`
    width: 65%;
    font-weight: 400;
    letter-spacing: .1rem;
`

export const CardImages = styled(motion.div)`
    height: 10%;
    user-select: none;
    position: absolute;
    display: flex;
    transition: transform 1s;
    bottom: 39rem;
    right: -10.6rem;

    img {
        user-select: none;
    }
`

export const CardImage = styled(motion.img)`
    width: 25rem;
    height: 25rem;
    cursor: none;
`

export const CBottom = styled.div`
    width: 100%;
    height: 50%;
    padding: 2rem 3rem;
`

export const CBottomTitle = styled.h1`
    font-weight: 500;
    text-transform: uppercase;
    letter-spacing: .1rem;
    color: #333;
    margin-bottom: 0.6rem;
`

export const Badge = styled.div`
    position: absolute;
    top: 30rem;
    right: 5rem;
    width: 3.5rem;
    height: 1.6rem;
    background: #25d390;
    color: #fff;
    display: grid;
    place-items: center;
    border-radius: 0.3rem;
    font-size: 0.9rem;
    font-weight: bold;
    letter-spacing: 0.1rem;
    text-transform: uppercase;
`

export const Title = styled.h3`
    font-size: 1rem;
    font-weight: 400;
    text-transform: uppercase;
    margin-bottom: 0.6rem;
`

export const Stars = styled.div`
    margin-bottom: 3rem;

    i:last-child {
        opacity: 0.4;
    }
`

export const Size = styled.div`
    margin-bottom: 3rem;
`

export const SizeTitle = styled.h3`
    font-size: 1.2rem;
    text-transform: uppercase;
    letter-spacing: 0.1rem;
    margin-bottom: 1.3rem;
`

export const Sizes = styled.div`
    display: flex;
    span {
        font-size: 1.3rem;
        margin-right: 2.5rem;
    }
    span:nth-child(3) {
        width: 2rem;
        height: 2rem;
        background: #333;
        color: #eee;
        border-radius: 50%;
        display: grid;
        place-items: center;
    }
`

export const VersionTitle = styled.h3`
    font-size: 1.2rem;
    text-transform: uppercase;
    letter-spacing: 0.1rem;
    margin-top: 1rem;
    margin-bottom: 1rem;
    color: #eee;
`

export const Versions = styled.div`
    display: flex;

    .version-1,.version-2 {
        width: 2rem;
        height: 2rem;
        border-radius: 50%;
        cursor: pointer;
    }
    
    .version-1 {
        background: #0072B0;
        margin-right: 1.5rem;
        box-shadow: 0 0.1rem 2rem rgba(28,71,122,.2);
    }
    .version-2 {
        background: #DD2D51;
        margin-right: 1.5rem;
        box-shadow: 0 0.1rem 2rem rgba(192,34,68, .3);
    }

    .version-1:hover {
        border-style: solid;
        border-width: 1px;
        border-color: #eee;
    }
    .version-2:hover {
        border-style: solid;
        border-width: 1px;
        border-color: #eee;
    }
`
export const NameBar = styled.div`
    width: 20rem;
    height: 4rem;
    background: #282828;
    color: #fff;
    border-radius: 0.5rem;
    position: absolute;
    left: -1rem;
    top: 5.7rem;
    box-shadow: 0 1rem 2rem rgba(28,71,122,0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    transition: background 0.5s;

    span {
        font-size: 2rem;
        font-weight: bold;
        text-transform: uppercase;
    }
`

export const Price = styled.div`
    width: 16rem;
    height: 4rem;
    background: ${({currentColor}) => currentColor
    === 1 ? "#FB9B51" : "#5FBC51"};
    color: #fff;
    border-radius: 0.5rem;
    position: absolute;
    right: -1rem;
    bottom: 3rem;
    box-shadow: 0 1rem 2rem rgba(28,71,122,0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    transition: background 0.5s;

    span {
        font-size: 2rem;
    }

    span:first-child{
        font-weight: 300;
        text-transform: uppercase;
    }

    span:last-child{
        font-weight: bold;
    }
`