import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom'

const SingleProduct = () => {
    const token = useSelector((state) => state.user.token);
    const router = useNavigate();
    const {id} = useParams();
    const [singleProducts, setSingleProducts] = useState({});

    async function getSingleProductData() {
        try {
          const response = await axios.get(
            `https://fakestoreapi.com/products/${id}`
          );
          console.log(response.data, "response for single product");
          setSingleProducts(response.data);
        } catch (error) {
          console.log(error);
        }
      }
      useEffect(() => {
        if (id) {
          getSingleProductData();
        }
      }, [id]);
      useEffect(() => {
        if (token == null) {
          router("/fakelogin");
        }
      }, [token]);
      return (
        <div > <h1 style={{marginBottom:"50px", color:"white", fontFamily:"sans-sarif"}}>Single Product Page </h1>
        <div style={{ display: "flex", justifyContent: "space-around" }}>
          <div style={{ border: "1px solid black", width: "47%", height: "450px", borderRadius:"20px"}}>
            <img
              src={singleProducts.image}
              style={{
                width: "90%",
                margin: "auto",
                height: "90%",
                marginTop: "5%",
              }}
            />
          </div>
          <div style={{ border: "1px solid black", width: "47%", height: "450px",  borderRadius:"20px" }}>
            <h1 style={{color:"#e0ede1"}}>Title : {singleProducts.title}</h1>
            <h3 style={{color:"#3c4860", fontSize:"35px"}}>Price : ${singleProducts.price}/-</h3>
            <h3 style={{color:"#3c4860", fontSize:"20px"}}>Description : {singleProducts.description}</h3>
          </div>
        </div>
        </div>
      );
    };

export default SingleProduct;