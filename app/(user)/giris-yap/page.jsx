import React from "react";
import { getCurrentUser } from "@/app/actions/getCurrentUser";
import { redirect } from "next/navigation";
import GirisClient from "./GirisClient";
import Image from "next/image";
import { FaPhoneSquareAlt } from "react-icons/fa";

const page = async () => {
  const user = await getCurrentUser();

  if (user) {
    redirect("/dashboard");
  } else {
    return (
      <div className="w-full h-full min-h-screen  relative bg-linear-to-br from-blue-200 to-sky-300">
        <div className="w-full h-full flex py-2 border-b border-gray-600">
          <div className="w-full h-full flex items-center justify-start lg:justify-center ">
            <Image
              src="/tammobillogo.webp"
              alt="Tammobil Logo"
              width={1200}
              height={1200}
              className="w-48 object-contain ml-4 lg:ml-16"
            />
          </div>
          <div className="w-48 h-20 pr-4 lg:pr-8 text-gray-900 flex items-center justify-end">
            <FaPhoneSquareAlt size={24} className="text-blue-900 mr-2" />
            <span className="text-nowrap">0 (850) 309 69 69</span>
          </div>
        </div>
        <div className="w-full h-full mt-12">
          <GirisClient />
        </div>
      </div>
    );
  }
};

export default page;
