"use client";
import React, { useEffect, useState } from "react";
import Footer from "@/Components/Footer";
import Navbar from "@/Components/Navbar";
import ItemVeiw from "@/Pages/ItemVeiw";

export default function page({ params }) {
  const { id } = React.use(params); // Correctly destructure from params
  const url = `https://fakestoreapi.com/products/${id}`;
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(url);
        const json = await res.json();
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
        <ItemVeiw data={data} />
      </div>
      <div className="">
        <Footer />
      </div>
    </div>
  );
}
