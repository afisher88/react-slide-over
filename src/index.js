import React from 'react';
import ReactDOM from 'react-dom';
import AnimalList from './AnimalList.jsx';

const ANIMALS = [
    {
        species: "Wild Boar",
        limbs: 4,
        furriness: 6,
        habitat: "land"
    },
    {
        species: "Otter",
        limbs: 4,
        furriness: 8,
        habitat: "water"
    },
    {
        species: "Octopus",
        limbs: 8,
        furriness: 0,
        habitat: "water"
    },
    {
        species: "Penguin",
        limbs: 4,
        furriness: 0,
        habitat: "land"
    },
    {
        species: "Tiger",
        limbs: 4,
        furriness: 9,
        habitat: "land"
    },
    {
        species: "Centipede",
        limbs: 100,
        furriness: 1,
        habitat: "land"
    },
    {
        species: "Snake",
        limbs: 0,
        furriness: 0,
        habitat: "land"
    },
    {
        species: "Kangaroo",
        limbs: 4,
        furriness: 7,
        habitat: "land"
    },
    {
        species: "Starfish",
        limbs: 5,
        furriness: 2,
        habitat: "water"
    },
    {
        species: "Eagle",
        limbs: 4,
        furriness: 2,
        habitat: "air"
    }
];


ReactDOM.render(React.createElement(AnimalList, {animals: ANIMALS}), document.querySelector('#app'));