import React from "react";
import {
  Instagram,
  Youtube,
  Twitter,
  Facebook,
  Github,
  TriangleAlert,
} from "lucide-react";
import {
  products,
  websitePages,
  footerLinks,
  officeDetails,
  productCategories,
} from "@/Store/Store";
export default function Footer() {
  const icons = [
    <Instagram />,
    <Youtube />,
    <Twitter />,
    <Facebook />,
    <Github />,
  ];
  return (
    <div className=" bg-[#434343]">
      <div className=" container mx-auto w-full gap-10 text-white ">
        <div className="flex gap-10 py-10">
          <div className=" w-2xs">
            <p className="font-bold my-5 ">BestSeller</p>
            {products.map((item, index) => (
              <p key={index}>{item}</p>
            ))}
          </div>
          <div className="w-2xs">
            <p className="font-bold my-5">Information</p>
            {websitePages.map((item, index) => (
              <p key={index}>{item}</p>
            ))}
          </div>
          <div className="w-2xs">
            <p className="font-bold my-5">Support</p>
            {footerLinks.map((item, index) => (
              <p key={index}>{item}</p>
            ))}
          </div>
          <div className="w-2xs">
            <p className="font-bold my-5">Contact us</p>
            {officeDetails.map((item, index) => (
              <p key={index}>{item}</p>
            ))}
          </div>
          <div className=" w-4xs">
            <p className="font-bold my-5">Exclusive</p>
            <input
              type="Search"
              name=""
              id=""
              placeholder="Enter Your Mail here .."
            />
            <p className=" ">
              Sign up here to get the latest news, updates and special offers
              delivered to your inbox. Plus, you'll be the first to know about
              our discounts!
            </p>
            <div className=" flex justify-center items-center gap-4">
              {icons.map((item, index) => (
                <p key={index}>{item}</p>
              ))}
            </div>
          </div>
        </div>
        <div className=" border border-red-600 p-4 flex flex-col gap-2 rounded-2xl ">
          <span className=" flex gap-4 text-red-600">
            <TriangleAlert />
            Scam Alert
          </span>
          <p>
            We have noticed a rise in fraudulent activities through calls, SMS,
            WhatsApp messages, emails, and other mediums.
          </p>
          <p className=" text-gray-400 ">
            Please be aware that
            <span className="text-white mx-2 ">
              BELLAVITA and its employees never ask for your financial details
              for contests or deals
            </span>
            outside our official platform. We also never request payments for
            any promotional activities through unauthorised channels.
          </p>
          <p className=" text-gray-400">
            If you receive any such communication, stay cautious and reach out
            to us immediately at our
            <span className=" text-white mx-2">
              customer care number +91 9311732440 or email us at
              shop@bellavitaorganic.com.
            </span>
          </p>
          <p className=" text-gray-400">
            If you suspect any scam, kindly
            <span className=" text-white mx-2">
              report it to the Department of Telecommunications (DoT).{" "}
            </span>
          </p>
          <p>Stay Safe.</p>
        </div>
        <div className="">
          <p className=" uppercase my-5">Most Searched Keywords</p>
          <div className=" w-full">
            {productCategories.map((item, index) => (
              <span key={index} className=" text-[12px]" > {item} |</span>
            ))}
          </div>
        </div>
        <div className="">
          <p className=" py-5">© 2025, Bella Vita Organic (IDAM Natural Wellness Pvt. Ltd.).</p>
        </div>
      </div>
    </div>
  );
}
