"use client";

import { useState, FormEvent } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const [inputVal, setInputVal] = useState("");
  const { push } = useRouter();
  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    push(`http://wa.me/${inputVal}`);
  };

  return (
    <div className="container">
      <div className="flex flex-wrap h-screen w-screen">
        <div className=" self-center mx-auto ">
          <h1 className=" text-center text-6xl">
            WhatsApp <span className="font-semibold text-Secondary">Me</span>
          </h1>
          <h6 className="text-grey font-light text-center pt-2 text-sm ">Easy chat without save phone number</h6>
          <form action="" className="mt-9 mx-auto max-w-max bg-white rounded-xl" onSubmit={handleSubmit}>
            <button className="text-gray-600 text-base ml-4">+62</button>
            <input
              className="text-base text-gray-600 w-fit ml-5 px-2 placeholder:text-sm focus:outline-none"
              type="text"
              placeholder="type your phone number"
              value={inputVal}
              onChange={(e) => setInputVal(e.target.value)}
            />
            <button type="submit" className="text-black  bg-red-500 ml-12 py-3 rounded-tr-xl rounded-br-xl">arrrow</button>
          </form>
          <p>*Your data is safe, this website not save your phone number</p>
        </div>
      </div>
    </div>
  );
}
