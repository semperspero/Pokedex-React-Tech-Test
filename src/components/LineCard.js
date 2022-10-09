import React from 'react'
import styled from "styled-components";
import { motion } from "framer-motion";


const LineCard = () => {
    return(
        <CardCell>

        </CardCell>
    )
}

export const Wrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #000;
    h1{
        color: #fff;
    }
`

export const CardCell = styled(styled.div)`
    width: 50rem;
    height: 70rem;
    display: grid;
    place-items: center;
    overflow: hidden;
`