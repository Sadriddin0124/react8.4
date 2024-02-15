"use client";
import React, { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import Image from "next/image";
import StarIcon from "@mui/icons-material/Star";
import axios from "axios";
import Link from "next/link";
type ProductType = {
  id: string;
  title: string;
  img: string;
  price: number;
  rate: number;
  description: string;
};
const SingleProduct = () => {
  const [product, setProduct] = useState<Array<ProductType>>([]);
  const query = useSearchParams();
  let id: string | null | number = Number(query.get("id"));
  useEffect(() => {
    axios.get(`http://localhost:8000/products/${id}`).then((res) => {
      setProduct([{ ...res.data }]);
    });
  }, []);
  console.log(product);

  return (
    <div className="w-[100%] h-[100vh] flex flex-col items-center gap-[30px]">
      <h1 className="text-[40px] font-[500]">Single Product</h1>
      <h1 className="text-[24px]">Hover card</h1>
      <div>
        {product.map((item, index) => {
          return (
            <div
              key={index}
              className="w-[420px] h-[500px] relative hover:w-[820px] transition-[.4s]"
            >
              <div className="w-[420px] h-[500px] absolute left-[0%] rounded-r-none rounded-2xl overflow-hidden z-20">
                <Image
                  src={item.img}
                  alt="image"
                  width={300}
                  height={100}
                  className="w-[100%] h-[100%]"
                />
              </div>
              <div className="w-[400px] h-[500px] absolute right-[0%] bg-violet-600 text-white p-[20px] rounded-l-none rounded-2xl flex flex-col items-center justify-center gap-[30px]">
                <h1 className="text-[34px] text-center">{item.title}</h1>
                <h2 className="text-[30px] self-start">Price: ${item.price}</h2>
                <h3 className="text-[24px] flex items-center gap-[5px] self-start">
                  Rating: <StarIcon className="text-[gold] ml-[10px]" />
                  {item.rate}
                </h3>
                <div>
                  <p className="text-[20px] py-[10px] border-b-[1px]">Description:</p>
                  <p className="w-[100%] mt-[10px]">{item.description}</p>
                </div>
                <Link href="/menu/cabinet/settings" className="border-2 px-[25px]"> Go to Settings</Link>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SingleProduct;
