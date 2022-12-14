import React from 'react'
import { useNavigate } from 'react-router-dom'
import "./styles.css"

//Card
const Item = ({product}) => {

  const navigate = useNavigate()

  const navigateDetail = () => {
    //Navegar hacia el detalle del articulo
    navigate(`/detail/${product.id}`)
  }

  return (
    <div onClick={navigateDetail} className="card-detail">
      <img src={product.imageUrl} alt="character" className='img'/>
      <p key={product.id}>{product.name}, stock: {5}</p>
    </div>
  )
}

export default Item