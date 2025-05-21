'use client'
import React, { useEffect, useState } from "react";
import { FaMinus, FaPlus } from "react-icons/fa6";
import demoCartData from '@/Store/Store'

export default function CartVeiw() {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchdata = async () => {
      try {
        const Demodata = demoCartData;
        const json = Demodata.json();
        setData(json);
        console.log(data);
      } catch (err) {
        console.error(err);
      }
    }
    fetchdata();
  }, [])
  const [items, setItems] = useState();
  const handleIncrement = (id) => {
    const updateditem = items.map((item) =>
      item.id === id ? { ...item, quantity: item.quantity + 1 } : item
    );
    setItems(updateditem)
  };
  const handleDecrement = (id) => {
    const updateditem = items.map((item) => {
      if (item.quantity === 1) { return item }
      else {
        return item.id === id ? { ...item, quantity: item.quantity - 1 } : item
      }
    }
    )
    setItems(updateditem);
  }
  return (
    <div className="bg-transparent min-h-screen flex justify-center items-center font-sans">
      <div className="bg-muted shadow-md rounded-md w-[750px] h-[auto] md:h-[423px] flex flex-col m-8">
        <div className="h-15 border-b border-[#E1E8EE] px-8 py-5 text-[#5E6977] text-xl font-normal">
          Shopping Cart
        </div>
        {items.map((item, index) => (
          <div key={item.id} className={`px-8 py-5 h-auto md:h-30 flex ${index === 1 ? "border-t border-b border-[#E1E8EE]" : ""
            }`}
          >
            <div className="relative pt-8 mr-15">
              <span className="cursor-pointer absolute top-8 left-0 w-4 h-[17px]  bg-no-repeat bg-center"></span>
              <span
                className="cursor-pointer absolute top-9 left-3 w-[60px] h-[60px] bg-no-repeat"
              // onClick={handleLike}
              ></span>
            </div>

            <div className="mr-12">
              <img
                src={item.image}
                alt={item.name}
                className="max-w-[80px] max-h-[80px]"
              />
            </div>

            <div className="pt-2 mr-15 w-[115px]">
              <span className="block text-sm text-[#43484D] font-normal mb-1">
                {item.brand}
              </span>
              <span className="block text-sm text-[#43484D] font-normal">
                {item.name}
              </span>
              <span className="block text-sm text-[#86939E] font-light mt-2">
                {item.color}
              </span>
            </div>

            <div className=" flex justify-center items-center">
              <button className="bg-[#E1E8EE] rounded-md border-none cursor-pointer w-7 h-7" onClick={() => handleIncrement(item.id)} >
                <FaPlus className=" mx-auto block" />
              </button>
              <input type="text" name="quantity"
                value={`${item.quantity}`}
                className="appearance-none border-none text-center w-8 text-sm text-[#43484D] font-light"
                readOnly />
              <button className="bg-[#E1E8EE] rounded-md border-none cursor-pointer w-7 h-7" onClick={() => handleDecrement(item.id)} >
                <FaMinus className=" mx-auto block" />
              </button>
            </div>
            <div className="pt-7 text-center w-[83px] text-sm text-[#43484D] font-light">
              ${item.price}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
