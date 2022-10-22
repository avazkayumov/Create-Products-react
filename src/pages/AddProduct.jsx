import styled from "styled-components";
import { Button, TextField } from "@mui/material";
import React, { useRef } from "react";
import { useNavigate } from "react-router-dom"
import { useDispatch } from "react-redux"
import { saveProduct } from "../store/actions";
import Header from "../components/Header";

function AddProduct() {
  const nameRef = useRef()
  const priceRef = useRef()
  const imageRef = useRef()
  const desRef = useRef()
  const navigate = useNavigate()
  const dispatch = useDispatch()
  
  function saveProductHandler() {
    const formData = new FormData()

    formData.append("title", nameRef.current.value)
    formData.append("price", priceRef.current.value)
    formData.append("image", imageRef.current.files[0])
    formData.append("description", desRef.current.value)
    
    dispatch(saveProduct(formData)).then(() => navigate("/"))
  }
 
  return (
    <Wrapper>
      <Header />
      
      <AddProductBox>
        <h1>Add Product</h1>
        <TextField inputRef={nameRef} id="outlined-basic" label="Product Name" variant="outlined" />
        <TextField inputRef={priceRef} id="outlined-basic" label="Product Price" variant="outlined" />
        <TextField inputRef={imageRef} id="outlined-basic" variant="outlined" type="file" />
        <TextField
            inputRef={desRef}
            style={{backgroundColor: "#fff", borderRadius: "6px"}}
            id="outlined-multiline-static"
            label="Description"
            multiline
            rows={4}
          />

        <Button onClick={saveProductHandler} variant="contained">Add Product</Button>
      </AddProductBox>
    </Wrapper>
  );
}

export default AddProduct;

const Wrapper = styled.div ``

const AddProductBox = styled.div`
    width: 300px;
    display: flex;
    flex-direction: column;
    gap: 12px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    h1 {
        margin-bottom: 20px;
        text-align: center;
    }

    #outlined-basic {
        background: #FFFFFF;
        border-radius: 6px;
    }
    .info {
        input {
            height: 100px;
        }
    }
`;
