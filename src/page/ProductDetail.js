import React from 'react'
import {useEffect, useState} from 'react'
import {useParams} from 'react-router-dom';
import {Container, Row, Col, Dropdown} from "react-bootstrap"
import { useSearchParams } from 'react-router-dom'
import {productAction} from "../redux/actions/productAction"
//객체를 import
import {useDispatch, useSelector} from "react-redux";
import { fetchDetailProducts } from '../redux/reducers/productSlice';

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
  const product = useSelector(state=>state.product.selectedItem);
  console.log("detail page", product)
  const dispatch = useDispatch();
  
  const getProductDetail = async () => {
    dispatch(fetchDetailProducts(id));
  }
  useEffect(()=>{
    getProductDetail();
  }, [])

  return (
    <Container className = "detailContainer">
      <Row>
        <Col className = "product-img">
          <img src = {product?.img}/>
        </Col>
        <Col>
          <h3>{product?.title}</h3>
          <h4>\{product?.price.toLocaleString()}</h4>
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
