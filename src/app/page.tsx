"use client";
import Image from "next/image";
import { useState, FormEvent } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const [inputVal, setInputVal] = useState("");
  const { push } = useRouter();
  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    push(`http://wa.me/62${inputVal}`);
  };

  return (
    <div className="container">
      <div className="flex flex-wrap h-screen w-screen">
        <div className="absolute bottom-0 -left-20 w-72 h-72 bg-Secondary rounded-full blur-3xl opacity-40 animate-blob animation-delay-2000"></div>

        <div className="absolute top-10 lg:right-10 w-80 h-80 right-0 bg-third rounded-full blur-3xl opacity-50 animate-blob animation-delay-4000"></div>

        <div className="relative self-center mx-auto ">
          <h1 className=" text-center lg:text-7xl md:text-7xl text-5xl">
            WhatsApp <span className="font-semibold text-Secondary">Me</span>
          </h1>

          <h6 className="text-grey font-light text-center pt-2 lg:text-base text-sm">Easy chat without save phone number</h6>
          <form action="" className="mt-9 mx-auto max-w-max bg-white rounded-xl rounded-tr-2xl rounded-br-2xl flex " onSubmit={handleSubmit}>
            <Image src="/indonesia (3).png" width={50} height={20} className="ml-4" alt="Picture of the author" />
            <span className="text-gray-600 text-base ml-2 self-center">+62</span>
            <input
              className="text-base text-gray-600 w-72 ml-1 px-2 pr-14 placeholder:text-base focus:outline-none"
              type="text"
              placeholder="type your phone number"
              value={inputVal}
              onChange={(e) => setInputVal(e.target.value)}
            />
            <button type="submit" className="text-white px-7  bg-buttonColour ml-12 py-4 rounded-tr-xl rounded-br-xl">
              &rarr;
            </button>
          </form>
          <p className=" text-center text-xs pt-4 text-gray2">*Your data is safe, this website not save your phone number</p>
        </div>
      </div>
    </div>
  );
}
