import React from "react";
import Card from "../components/Card";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import Pokeinfo from "../components/Pokeinfo";

const Main=()=>{
    const [pokeData,setPokeData]=useState([]);
    const [loading,setLoading]=useState(true);
    const [url,setUrl]=useState("https://pokeapi.co/api/v2/pokemon/?limit=151")
    const [nextUrl,setNextUrl]=useState();
    const [prevUrl,setPrevUrl]=useState();
    const [pokeDex,setPokeDex]=useState();

    // const [pokeNames,setPokeNames]=useState([]);
    // const getAllNames = async() => {
    //     setLoading(true)
    //     const allRes=await axios.get("https://pokeapi.co/api/v2/pokemon/?limit=2000")
    //     forEach(element => {
            
    //     });
    //     setPokeNames(allRes.data.results)
    // }

    const pokeFun=async()=>{
        setLoading(true)
        const res=await axios.get(url);
        setNextUrl(res.data.next);
        setPrevUrl(res.data.previous);
        getPokemon(res.data.results)
        setLoading(false)
    }
    const getPokemon=async(res)=>{
       res.map(async(item)=>{
          const result=await axios.get(item.url)
          setPokeData(state=>{
              state=[...state,result.data]
              state.sort((a,b)=>a.id>b.id?1:-1)
              return state;
          })
       })   
    }

    useEffect(()=>{
        pokeFun();
    },[url])

    return(
        <>
            <div className="container">
                <div className="btn-group">
                    {/* {  prevUrl && <button onClick={()=>{
                        setPokeData([])
                        setUrl(prevUrl) 
                    }}>Previous</button>}

                    { nextUrl && <button onClick={()=>{
                        setPokeData([])
                        setUrl(nextUrl)
                    }}>Next</button>} */}
                </div>
                <div className="left-content">
                    <Card pokemon={pokeData} loading={loading} infoPokemon={poke=>setPokeDex(poke)}/>
                    
                    
                </div>
                <div className="right-content">
                   <Pokeinfo data={pokeDex}/>
                </div>
            </div>
        </>
    )
}
export default Main;