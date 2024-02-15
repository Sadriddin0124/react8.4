"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Button from "@mui/material/Button";
import axios from "axios";

type ProductType = {
  id: number;
  title: string;
  img: string;
  price: number;
  rate: number;
  description: string;
};
const Product = () => {
  const [product, setProduct] = useState<Array<ProductType>>([]);
  useEffect(()=> {
    axios.get("http://localhost:8000/products").then((res)=>{
      console.log(res);
      setProduct(res?.data)
      
    })
  },[])
  return (
    <div className="w-[100%] h-[80vh] flex flex-col items-center mt-[100px]">
      <h1 className="text-[40px] font-[600]">Product</h1>
      <div className="flex gap-[20px] w-[100%] justify-center">
        {product?.map((item, index) => {
          return (
            <div
              key={index}
              className="flex w-[30%] h-[450px] flex-col border-2"
            >
              <div className="w-[100%] h-[70%] overflow-hidden">
                <Image
                width={500}
                height={500}
                  src={item.img}
                  alt="img"
                  className="w-[100%] h-[100%] object-cover hover:scale-110 transition-all"
                />
              </div>
              <div className="p-[20px] flex flex-col gap-[10px]">
                <h1 className="text-[30px]">{item.title}</h1>
                <h3>price: ${item.price}</h3>
                <Button className="bg-blue-500" variant="contained">
                  <Link
                  className="w-[100%] block"
                    href={{
                      pathname: "/menu/product/productid",
                      query: { id: item.id },
                    }}
                  >
                    View more
                  </Link>
                </Button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Product;
