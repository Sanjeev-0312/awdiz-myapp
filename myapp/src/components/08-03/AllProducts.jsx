import React, { useEffect } from 'react';
import {useNavigate} from "react-router-dom";
import {useSelector} from "react-redux";
const AllProducts = () => {  
    const [allProducts, setAllProducts] = useState([]);
    const router = useNavigate();
    const token= useSelector((state) => state.user.token);

    const getAllProducts = async() =>{
        try{
            const response =await axions.get("https://fakestoresapi.com/products");
            console.log(response.data, "response");
            setAllProducts(response.data);
        }catch(error){
            console.log(error);
        }
    };
    useEffect (() => {
        if(token == null){
            router ("/fake-login");
        }
        getAllProducts();
    },[token]);
    return (
        <div>All Products
          <div style={{
            display:"flex",
            justifyContent:"space-around",
            flexWrap:"wrap",
          }} >

          </div>
        </div>
    );
};

export default AllProducts;

