import styled from 'styled-components'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Header from './Header'

function ReadMoreProduct() {
  const [productInfo, setProductInfo] = useState({})
  const params = useParams()

  useEffect(() => {
    axios.get(`http://142.93.246.144/products/${params.id}`)
      .then(res => setProductInfo(res))
  }, [params.id])
  console.log(productInfo)


  return (  
    <Wrapper>
      <Header />

      <Grid>
        <div className='img-container'>
          <img src={'http://142.93.246.144/' + productInfo.data?.image} alt="" />
        </div>
        <div className='text-container'>
          <h1>About this Product: </h1>
          <p> <span>Name:  </span> {productInfo.data?.title}</p>
          <p> <span>Price:  </span>${productInfo.data?.price}</p>
          <p> <span>Description:  </span>{productInfo.data?.description}</p>
        </div>
      </Grid>
    </Wrapper>
  )
}

export default ReadMoreProduct

const Wrapper = styled.div``

const Grid = styled.div`
display: grid;
grid-template-columns: 1fr 1fr;
gap: 20px;
padding: 40px 100px;
background-color: #f9f9f9;

  @media (max-width: 400px) {
    grid-template-columns: 1fr;
    padding: 10px;
/* 
    .img-container {

      img {
        width: 100%;
        height: 100%;
      }
    } */
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  
  .img-container {
    width: 400px;
    height: 400px;
  }

  .text-container {
    h1 {
      margin-bottom: 20px;
      color: #3874CB;
    }
    p {
      margin-bottom: 10px;
      font-size: 18px;
      font-weight: 400;
      
    }
    span {
      font-size: 22px;
      font-weight: 800;
      color: #3874CB;
    }
  }

  h1 {

  }
`