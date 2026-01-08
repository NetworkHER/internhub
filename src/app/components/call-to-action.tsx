import Link from "next/link";
import React from "react";

export default function CallToAction() {
  return (
    <div className="mt-16 pt-14 pb-20 bg-primary text-[#f9fafc] bg-[linear-gradient(rgba(0,0,0,0.8),rgba(0,0,0,0.8)),url('/call.jpg')] bg-no-repeat bg-center bg-cover">
      <header className="">
        <h1 className="text-center font-bold text-3xl">
          Ready to build something real?
        </h1>
        <h3 className="text-center font- text-xl">
          {" "}
          <Link
            href={
              "https://docs.google.com/forms/d/e/1FAIpQLSenbPi1oFgTrblxE_vjs1IbgyL1By4FZwFEyWKgrSaEYDHjHA/viewform"
            }
            target="_blank"
            className="w-[95%]  text-white text-[1rem] mt-2 py-4 md:py-3  font-bold text-center"
          >
            <button className=" ">Apply to join this cycle</button>
          </Link>{" "}
          spots are limited.
        </h3>
        <p className="text-center mt-3 max-w-4xl text-[1.08rem] mx-auto">
          No heavy CV required show us your interest, not just past experience.
        </p>
      </header>
    </div>
  );
}
