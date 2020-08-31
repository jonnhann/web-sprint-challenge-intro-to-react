import React from "react";

const CharacterCard = ({ name, birthYear, eyeColor, hairColor, height, mass, skinColor})=>{
    return(
        <div className='characterCard'>
            <h2>{name}</h2>
            <p>Born on: {birthYear}</p>
            <p>Eye Color: {eyeColor}</p>
            <p>Hair Color: {hairColor}</p>
            <p>Height: {height} </p>

            <p>Mass: {mass} </p>
            <p>Skin Color: {skinColor}</p>
        </div>
    );
};


export default CharacterCard;