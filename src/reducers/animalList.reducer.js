import * as animalActions from '../actions/animalList.actions';

const initialState = {
  animals: [
    {
      id: 1,
      species: "Wild Boar",
      limbs: 4,
      furriness: 6,
      habitat: "land"
    },
    {
      id: 2,
      species: "Otter",
      limbs: 4,
      furriness: 8,
      habitat: "water"
    },
    {
      id: 3,
      species: "Octopus",
      limbs: 8,
      furriness: 0,
      habitat: "water"
    },
    {
      id: 4,
      species: "Penguin",
      limbs: 4,
      furriness: 0,
      habitat: "land"
    },
    {
      id: 5,
      species: "Tiger",
      limbs: 4,
      furriness: 9,
      habitat: "land"
    },
    {
      id: 6,
      species: "Centipede",
      limbs: 76,
      furriness: 1,
      habitat: "land"
    },
    {
      id: 7,
      species: "Snake",
      limbs: 0,
      furriness: 0,
      habitat: "land"
    },
    {
      id: 8,
      species: "Kangaroo",
      limbs: 4,
      furriness: 7,
      habitat: "land"
    },
    {
      id: 9,
      species: "Starfish",
      limbs: 5,
      furriness: 2,
      habitat: "water"
    },
    {
      id: 10,
      species: "Eagle",
      limbs: 4,
      furriness: 0,
      habitat: "air"
    }
  ],
  randomAnimal: {
    id: 1,
    species: "Wild Boar",
    limbs: 4,
    furriness: 6,
    habitat: "land"
  }
}

export const animalList = (state = initialState, action) => {
  switch (action.type) {
    case 'SELECT_RANDOM_ANIMAL':

      const randomAnimal = state.animals.find((el) => {
        return el.id === action.payload.id
      })

      return {
        ...state,
        randomAnimal
      }

    default:
      return state;
  }
}