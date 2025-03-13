import React, { useEffect, useState } from 'react';
import {useNavigate} from "react-router-dom";
import {useSelector} from "react-redux";
import axios from 'axios';
const AllProducts = () => {  
    const [allProducts, setAllProducts] = useState([]);
    const router = useNavigate();
    const token= useSelector((state) => state.user.token);

    const getAllProducts = async() =>{
        try{
            const response =await axios.get("https://fakestoreapi.com/products");
            console.log(response.data, "response");
            setAllProducts(response.data);
        }catch(error){
            console.log(error);
        }
    };
    useEffect (() => {
        if(token === null){
            router ("/fakelogin");
        }
        getAllProducts();
    },[token]);
    return (
        <div style={{width:"100%", minHeight : "100vh"}}>
            <h1 style={{marginBottom:"50px", color:"white", fontFamily:"sans-sarif"}}>All Products</h1>
          <div style={{
            width:"100%",
            height:"100%",
            paddingTop : "100px",
            display:"flex",
            justifyContent:"space-around",
            flexWrap:"wrap",
          }} 
          >
            {allProducts.length> 0 ?(
                allProducts.map((product) => (
                    <div
                    style={{
                        width: "18%",
                        height:"400px",
                        border:" 1px solid black",
                        borderRadius: "10px",
                        marginBottom: "20px",
                        cursor:"pointer",
                    }}
                    key={product.id}
                    onClick={()=> router(`/single-product/${product.id}`)}
                    >
                        <img 
                         src = {product.image}
                         style={{height:"60%", width:"100%", borderRadius:"10px"}}/>
                         <h2>{product.title} </h2>
              <h5>${product.price}/- </h5>
            </div>
                ))
            ):(
                <h1> Loading...</h1>
            )}

          </div>
        </div>
    );
};

export default AllProducts;

