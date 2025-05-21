"use client";
import React, { useRef } from "react";
import { UserRound, ShoppingCart } from "lucide-react";
import logo from "@/public/Logo/Bellavita.svg";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { ChevronRight, ChevronLeft } from "lucide-react";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import {
  useClerk,
  UserButton,
  useUser,
  SignedOut,
  SignedIn,
} from "@clerk/nextjs";
import { useRouter } from "next/navigation"; // Import useRouter
import Link from "next/link";

export default function Navbar() {
  const { openSignIn } = useClerk();
  const { isLoaded, isSignedIn, user } = useUser();
  const router = useRouter(); // Initialize useRouter

  const catagories = [
    "carzy deals",
    "shop all",
    "bestseller",
    "perfumes",
    "Bath and body",
    "cosmetics",
    "new arrivals",
    "skincare",
    "gifting",
  ];
  const slides = [
    "FREE Gifts on First 3 orders",
    "Rs.50 Off on Beauty Product",
    "Get any 4 product in just Rs.2000",
    "🎁FREE Gift on all PREPAID Orders",
  ];
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  return (
    <>
      <div className=" relative swiper-container">
        <div className=" absolute z-50 flex justify-around w-full custom-navigation ">
          <button className=" py-1 cursor-pointer text-white" ref={prevRef}>
            <ChevronLeft />
          </button>
          <button className=" py-1 cursor-pointer text-white" ref={nextRef}>
            <ChevronRight />
          </button>
        </div>
        <Swiper
          spaceBetween={50}
          slidesPerView={1}
          modules={[Pagination, Navigation, Autoplay]}
          autoplay={{
            delay: 2000,
          }}
          onInit={(swiper) => {
            swiper.params.navigation.prevEl = prevRef.current;
            swiper.params.navigation.nextEl = nextRef.current;
            swiper.navigation.init();
            swiper.navigation.update();
          }}
          loop={true}
          className=" bg-black text-white w-full flex justify-center items-center "
        >
          {slides.map((item, index) => (
            <SwiperSlide
              key={index}
              className=" flex justify-center text-center p-2 text-[12px] "
            >
              {item}
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className=" container mx-auto p-2 ">
        <div className=" flex justify-between items-center">
          <div className="w-1/5 ">
            <input
              type="search"
              placeholder=" Search Here ...."
              className=" outline-none"
            />
          </div>
          <div className=" w-3/5 flex justify-center items-center">
            <Image width={120} height={70} src={logo} alt={`logo`} />
          </div>
          <div className=" w-1/5 flex justify-center items-center gap-8">
            {!isSignedIn ? (
              <UserRound onClick={openSignIn} className="cursor-pointer" />
            ) : (
              // Add afterSignOutUrl to UserButton
              <UserButton />
            )}
            <div className="flex">
              <Link href={`cart`}>
                <ShoppingCart className=" cursor-pointer" />
                <span className=" h-fit p-1 w-4 flex justify-center items-center -translate-1.5 -translate-x-2 text-white font-bold rounded-full bg-red-500/50 text-[6px]">
                  1
                </span>
              </Link>
            </div>
          </div>
        </div>
        <div className=" flex justify-center text-sm items-center gap-6 uppercase pt-4">
          {catagories.map((item, index) => (
            <p className=" hover:underline cursor-pointer" key={index}>
              {item}
            </p>
          ))}
        </div>
      </div>
    </>
  );
}
