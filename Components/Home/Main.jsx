"use client";
import React, { useEffect, useState } from "react";
import Card from "@/Components/Home/ProductCard";

export default function Main() {
  const [data, setData] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("https://fakestoreapi.com/products");
        const json = await res.json();
        setData(json);
        console.log(json);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);
  return (
    <div className=" container mx-auto w-full h-full ">
      <div className=" flex flex-wrap justify-between h-full ">
        {data ?(
        data.map((item, i) => (
          <Card item={item} key={i} />
        ))):
        <p>Loading...</p>
      }
      </div>
    </div>
  );
}
