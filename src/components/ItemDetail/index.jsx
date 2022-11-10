import React from 'react'
import "./styles.css"

const ItemDetail = ({character}) => {
  console.log(character);
  return (
    <div className='item-detail'>
      <img src={character.imageUrl} alt="character" className='img-detail'/>
      <h1>{character.name}</h1>
      <p className='description'>{character.specie}</p>
    </div>
  )
}

export default ItemDetail