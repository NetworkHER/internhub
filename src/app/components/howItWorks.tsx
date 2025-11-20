import React from "react";
import { FileCheck, Send, CheckCircle } from "lucide-react";

export default function HowItWorks() {
  return (
    <div className="mt-16 pt-14 pb-20 bg-[#f9fafc]">
      <header className="">
        <h1 className="text-center font-bold text-3xl">How It Works</h1>
        <p className="text-center mt-3 w-[93%] text-[1.08rem] mx-auto">
          Getting started is simple. Follow these three easy steps to begin your
          journey
        </p>
      </header>
      <div className="about how-it-works mt-13 md:grid grid-cols-3">
        <div>
          <div className="number">
            <p>1</p>
          </div>
          <article>
            <div>
              <FileCheck size={30} className="text-white" />
            </div>
            <h2>Apply</h2>
            <p>Submit your application and choose your preferred role</p>
          </article>
        </div>
        <div>
          <div className="number">
            <p>2</p>
          </div>
          <article>
            <div>
              <Send size={30} className="text-white" />
            </div>
            <h2>Get Matched</h2>
            <p>We review and match you with the perfect opportunity</p>
          </article>
        </div>
        <div>
          <div className="number">
            <p>3</p>
          </div>
          <article>
            <div>
              <CheckCircle size={30} className="text-white" />
            </div>
            <h2>Start Learning</h2>
            <p>Begin your internship journey with full support</p>
          </article>
        </div>
      </div>
    </div>
  );
}
