"use client";
import React, { useEffect, useState } from "react";
import Footer from "@/Components/Footer";
import Navbar from "@/Components/Navbar";
import Image from "next/image"; // Don't forget to import Image

export default function page({ params }) {
  const { id } = React.use(params); // Correctly destructure from params
  const url = `https://fakestoreapi.com/products/${id}`;
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(url);
        const json = await res.json(); // Await the JSON data
        setData(json);
      } catch (err) {
        console.error(err);
      }
    };
    fetchData();
  }, [id]); 

  if (!data) return <div>Loading...</div>; 

  return (
    <div>
      <div className="">
        <Navbar />
      </div>
      <div className="">
        <Image
          src={data.image}
          width={500}
          height={500} 
          alt={`Product image`}
        />
      </div>
      <div className="">
        <Footer />
      </div>
    </div>
  );
}
