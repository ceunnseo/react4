import React from 'react'
import {useNavigate} from 'react-router-dom';

const ProductCard = ({item}) => {
    const navigate = useNavigate();
    const showDetail = () => {
        navigate(`/product/${item.id}`)
    }
  return (
    <div className = "productCard" onClick={showDetail}>
      <div id = "productCard-img-box">
        <img src={item?.img}/>
      </div>
      <div>{item?.choice === true ? "Consicious choice":""}</div>
      <div>{item?.title}</div>
      <div>\{item?.price}</div>
      <div>{item?.new === true?"신제품":""}</div>
    </div>
  )
}

export default ProductCard