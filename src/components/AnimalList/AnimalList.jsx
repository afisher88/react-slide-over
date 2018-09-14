import React from "react";
import './AnimalList.scss';

const AnimalList = ({ items }) => {
  return (
    items ?
      <aside className="animal-list">
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