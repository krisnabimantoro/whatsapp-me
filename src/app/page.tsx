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
    <div className="">
      <div>
        <h1>
          WhatsApp <span>Me</span>
        </h1>
        <h6>Easy chat without save phone number</h6>
        <form action="" onSubmit={handleSubmit}>
          <button>+62</button>
          <input
            className="text-black"
            type="text"
            placeholder="type your phone number"
            value={inputVal}
            onChange={(e) => setInputVal(e.target.value)}
          />
          <button type="submit">arrrow</button>
        </form>
        <p>*Your data is safe, this website not save your phone number</p>
      </div>
    </div>
  );
}
