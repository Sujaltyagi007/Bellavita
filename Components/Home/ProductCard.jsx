import React from "react";
import Image from "next/image";
import { Star } from "lucide-react";
import Link from "next/link";
export default function ProductCard({ item }) {
  return (
    
      <Link href={`product/${item.id}`} className=" flex flex-col text-left lg:w-1/4 md:w-1/3 p-5 ">
        <p className=" relative bg-green-500/40 w-fit flex justify-start top-10 text-[10px] p-1 left-5 text-white ">
          {item.index % 2 == 0 ? "BestSeller" : "New"}
        </p>
        <div className=" flex justify-center items-center lg:h-[250px] md:h-[220px] ">
          <Image
            src={item.image}
            width={130}
            height={180}
            alt="DemoImage"
            className=" "
          />
        </div>
        <p className=" uppercase text-[10px]">eau de perfume for all</p>
        <p>{item.category}</p>
        <span className=" flex gap-2 text-[14px]">
          <Star className=" text-yellow-400 w-4 " /> {item.rating.rate} | ({" "}
          {item.rating.count} Reviews )
        </span>
        <p className=" mb-1">
          Rs: <span className=" font-bold"> {item.price}</span>
        </p>
        <button className=" text-white bg-black rounded-2xl p-2 cursor-pointer">
          Add to Cart
        </button>
      </Link>    
  );
}
