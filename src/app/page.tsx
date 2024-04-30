"use client";
import Image from "next/image";
import { useState, FormEvent } from "react";
import { useRouter } from "next/navigation";
import { Analytics } from "@vercel/analytics/react";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const [inputVal, setInputVal] = useState("");
  const router = useRouter();
  // const { push } = useRouter();
  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    router.push(`http://wa.me/62${inputVal}`);
  };
  const navigate = useNavigate();

  const gotToNewPage = () => {
    navigate(`http://wa.me/62${inputVal}`);
  };

  return (
    <div className="container">
      <div className="flex flex-wrap h-screen w-screen">
        <div className="absolute bottom-0 -left-20 w-36 h-48 md:w-72 md:h-72 lg:w-72 lg:h-72 bg-Secondary rounded-full blur-3xl opacity-40 animate-blob animation-delay-2000"></div>

        <div className="absolute top-0 lg:right-0 w-24 h-24 md:w-80 md:h-80 lg:w-80 lg:h-80 right-10 bg-third rounded-full blur-3xl opacity-20 animate-blob animation-delay-4000"></div>

        <div className="relative self-center mx-auto -top-10 lg:top-0 md:top-0">
          <h1 className=" text-center lg:text-7xl md:text-7xl text-[45px]">
            WhatsApp <span className="font-semibold text-Secondary">Me</span>
          </h1>

          <h6 className="text-grey font-light text-center md:pt-2 lg:pt-2 lg:text-base text-sm">Easy chat without save phone number</h6>
          <form
            action=""
            className="mt-9 mx-auto max-w-max bg-white rounded-xl rounded-tr-2xl rounded-br-2xl flex "
            onSubmit={gotToNewPage}
          >
            <Image src="/indonesia (3).png" width={40} height={20} className="ml-4" alt="Picture of the author" />
            <span className="text-gray-600 text-base ml-2 self-center">+62</span>
            <input
              className="text-base text-gray-600 w-44 lg:pr-14 md:pr-14 ml-1 px-2 lg:w-72 md:w-72 placeholder:text-[12px] lg:placeholder:text-base focus:outline-none"
              type="text"
              placeholder="type your phone number"
              value={inputVal}
              onChange={(e) => setInputVal(e.target.value)}
            />
            <button
              type="submit"
              className="text-white px-4 lg:px-7 bg-buttonColour text-lg lg:text-base md:text-base py-2 lg:py-4 rounded-tr-xl rounded-br-xl"
            >
              &rarr;
            </button>
          </form>
          <p className=" text-center text-[10px] md:text-xs lg:text-xs pt-3 text-gray2">
            *Your data is safe, this website not save your phone number
          </p>
          <div className="flex justify-center text-center text-[9px] md:text-xs lg:text-[12px] pt-5 text-gray-300">
            <p>created by . </p>
            <a href="https://www.instagram.com/krisnabmntr__/" className="hover:underline">
              Krisna Bimantoro
            </a>
          </div>
        </div>
      </div>
      <Analytics></Analytics>
    </div>
  );
}
