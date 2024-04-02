import React from 'react'
import {useEffect,useState} from 'react'
import ProductCard from '../component/ProductCard'
import { Container, Row, Col } from "react-bootstrap"
import { useSearchParams } from 'react-router-dom'
import {productAction} from "../redux/actions/productAction"
//객체를 import
import {useDispatch, useSelector} from "react-redux";


const ProductAll = () => {
  const productList = useSelector(state=>state.product.productList);
  const [query, setQuery] = useSearchParams();
  const dispatch = useDispatch()
  const getProducts= ()=>{
    let searchQuery = query.get('q') || "";
    console.log("쿼리값은?",searchQuery)
    //바로 store로 가지 않고 미들웨어를 호출
    dispatch(productAction.getProducts(searchQuery))
  }
  useEffect(()=>{
    getProducts()
  }, [query])
  return (
    <div className = "productAll">
      <div className = "product-one-wrap">
        <div id = "product-one-img">
          <img src = './img/mainPic1.jpg'></img>
        </div>
        <h1 id = "product-one-text">
          S/S 2024
        </h1>
      </div>
      <h1 id = "productAll-title">모두 보기</h1>
      <Container>
        <Row>
          {productList.map((menu)=>(
            <Col lg = {3} md = {4} xs = {6}>
              <ProductCard item = {menu}/>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  )
}

export default ProductAll
