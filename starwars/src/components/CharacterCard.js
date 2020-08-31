import React from "react";
import styled from 'styled-components';

const CardStyle = styled.div`
background: #bcc8c1;
  height: auto;
  border-radius: 4px;
  box-shadow: 0 19px 38px rgba(0, 0, 0, 0.3), 0 15px 12px rgba(0, 0, 0, 0.22);
`

const CharacterCard = ({ name, birthYear, eyeColor, hairColor, height, mass, skinColor})=>{
    return(
        <CardStyle>
            <h2>{name}</h2>
            <p>Born on: {birthYear}</p>
            <p>Eye Color: {eyeColor}</p>
            <p>Hair Color: {hairColor}</p>
            <p>Height: {height} </p>

            <p>Mass: {mass} </p>
            <p>Skin Color: {skinColor}</p>
        </CardStyle>
    );
};


export default CharacterCard;