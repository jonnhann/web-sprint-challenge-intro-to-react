import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import CharacterCard from './CharacterCard';
import styled from 'styled-components';

const CharacterStyle = styled.div`
  display: grid;
  grid-gap: 20px;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  margin: 20px auto;
  max-width: 900px;
`;

export default function Character(props) {
  const [info, setInfo] = useState([]);

  useEffect(() => {
    Axios.get('https://swapi.dev/api/people')
      .then(res => {
        console.log('res from useEffect of Character', res);
        setInfo(res.data.results);
      })
      .catch(err => {
        console.log('error occured in useEffect of Character:', err);
      });
  }, []);

  return (
    <CharacterStyle>
      {info.map(character => {
        return <CharacterCard key={character.created} name={character.name} birthYear={character.birth_year} eyeColor={character.eye_color} hairColor={character.hair_color} height={character.height} mass={character.mass} skinColor={character.skin_color} />;
      })}
    </CharacterStyle>
  );
}
