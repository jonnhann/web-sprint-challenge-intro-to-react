
import React, { useState, useEffect } from "react";
import Axios from "axios";
import CharacterCard from './CharacterCard';

export default function Character(props) {

    const [info, setInfo]= useState([]);

    useEffect(()=>{
        Axios.get('https://swapi.dev/api/people')
            .then((res) =>{
                console.log("res from useEffect of Character", res);
                setInfo(res.data.results);
                
            })
            .catch(err => {
                console.log('error occured in useEffect of Character:', err);
            });
        
    }, []);

    return (
        <div className="character">
            {info.map((character)=>{
                return (
                    <CharacterCard 
                 key={character.created}
                 name={character.name}
                 birthYear={character.birth_year}
                 eyeColor={character.eye_color  }
                 hairColor={character.hair_color}
                 height={character.height}
                 mass={character.mass}
                 skinColor={character.skin_color}

                    
                     />
                );
            })}


        </div>
    )






}