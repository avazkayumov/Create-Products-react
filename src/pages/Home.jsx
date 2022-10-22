import React, { useState } from 'react'
import styled from 'styled-components'
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../store/actions";
import ProductBox from '../components/ProductBox';
import Header from '../components/Header';
import ReadMoreProduct from '../components/ReadMoreProduct';
import { Link } from 'react-router-dom';


function Home(props) {
  const dispatch = useDispatch()
  const { products } = useSelector(store => store)
  const [inputValue, setInputValue] = useState("")

  useEffect(() => {
    dispatch(fetchProducts())
  }, [dispatch])


  function filteredProducts() {
    const result = products.filter(product => product.title.toUpperCase().includes(inputValue.toUpperCase()))
    return result
  }

  return (
    <Wrapper>
      <Header setInputValue={setInputValue}/>
      <Grid>
        {filteredProducts().map(product => <ProductBox {...product}/> )}
      </Grid>
    </Wrapper>
  )
}

export default Home

const Wrapper = styled.div``

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
  padding: 50px;

  .product {
    text-decoration: none;
  }
`