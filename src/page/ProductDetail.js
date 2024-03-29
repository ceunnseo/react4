import React from 'react'
import {useEffect, useState} from 'react'
import {useParams} from 'react-router-dom';
import {Container, Row, Col, Dropdown} from "react-bootstrap"

const ProductDetail = () => {
  const sizeList = ["XS", "S", "M", "L", "XL"]
  const [btnActive, setBtnActive] = useState(null);
  const toggle = (event) => {
    console.log("toggle",event.target.value)
    setBtnActive(event.target.value);
    console.log("btnActive", btnActive);
    return event.target.value;
  }
  let {id} = useParams();
  const [product, setProduct] = useState(null)
  const getProductDetail=async()=>{
    let url = `https://my-json-server.typicode.com/ceunnseo/react4/products/${id}`;
    let response = await fetch(url);
    let data = await response.json();
    setProduct(data);
  }
  useEffect(()=>{
    getProductDetail()
  }, [])
  return (
    <Container className = "detailContainer">
      <Row>
        <Col className = "product-img">
          <img src = {product?.img}/>
        </Col>
        <Col>
          <h3>{product?.title}</h3>
          <h4>\{product?.price}</h4>
          <div id = "choice">{product?.choice === true ? "Consicious choice":""}</div>
          <h4 id = "detailProductId">사이즈</h4>
          <div className = "detailButton">
            <div className = "sizeButton">
            {sizeList.map((item, idx) => (
              <button
                key = {idx}
                value = {idx}
                className = {idx == btnActive ? "active" : ""}
                onClick = {toggle}
              >{item}</button>
            ))}</div>
             <button className = "product-add">추가</button>
          </div> 
        </Col>
      </Row>
    </Container>
  )
}

export default ProductDetail
