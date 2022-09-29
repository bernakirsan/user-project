import "./card-list.css"
import Card from "../card/card.jsx"
import React from 'react'

const CardList = ({monsters}) => {
  return (
    <div className="card-list-container">
        <div className="card-list">
            {monsters.map((monster) => {
                return <Card monster={monster}/>
            })}
        </div>
    </div>
  )
}

export default CardList 