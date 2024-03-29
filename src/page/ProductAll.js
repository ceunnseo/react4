import React from 'react'
import {useEffect,useState} from 'react'
import ProductCard from '../component/ProductCard'
import { Container, Row, Col } from "react-bootstrap"
import { useSearchParams } from 'react-router-dom'

const ProductAll = () => {
  const [productList, setProductList] = useState([]);
  const [query, setQuery] = useSearchParams();
  const getProducts= async ()=>{
    let searchQuery = query.get('q') || "";
    console.log("쿼리값은?",searchQuery)
    let url = `https://my-json-server.typicode.com/ceunnseo/react4/products?q=${searchQuery}`
    let response = await fetch(url)
    let data = await response.json();
    console.log(data);
    setProductList(data);
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
