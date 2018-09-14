import React from 'react';

const AnimalList = ({ items }) => {
  return (
    items ?
      <aside>
        <ul>
          {items.map((item, i) => {
            return <li key={`animalListItem-${i}`}>{item.species}</li>
          })}
        </ul>
      </aside>
      : <p>There are no animals!</p>
  )
}

export default AnimalList;