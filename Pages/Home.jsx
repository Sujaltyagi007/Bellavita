import React from "react";
import Navbar from "@/Components/Navbar";
import Main from "@/Components/Home/Main";
import Footer from "@/Components/Footer";

export default function Home() {
  return (
    <div className=" w-full h-full">
      <div className="  flex flex-col w-full h-full">
        <Navbar />
      </div>
      <div>
        <Main />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}
