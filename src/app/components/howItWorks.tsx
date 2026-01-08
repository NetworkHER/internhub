import React from "react";
import { FileCheck, Send, CheckCircle, User } from "lucide-react";

export default function HowItWorks() {
  return (
    <div className="mt-16 pt-14 pb-20 bg-[#f9fafc]">
      <header className="">
        <h1 className="text-center font-bold text-3xl">How It Works</h1>
        <p className="text-center mt-3 w-[93%] text-[1.08rem] mx-auto">
          Simple. Structured. Impactful.
        </p>
      </header>
      <div className="about work how-it-works mt-13 md:grid grid-cols-3">
        <div>
          <div className="number">
            <p>1</p>
          </div>
          <article>
            <div>
              <FileCheck size={30} className="text-white" />
            </div>
            <h2>Apply</h2>
            <p>Tell us about yourself and your interest area.</p>
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
            <h2>Learn & Build</h2>
            <p>
              Complete role-specific mini-projects that teach and prove your
              skills.
            </p>
          </article>
        </div>
        <div>
          <div className="number">
            <p>3</p>
          </div>
          <article>
            <div>
              <User size={30} className="text-white" />
            </div>
            <h2>Team Capstone</h2>
            <p>
              Join a cross-functional team to build a bigger project and present
              it to the community.
            </p>
          </article>
        </div>
        <div>
          <div className="number">
            <p>4</p>
          </div>
          <article>
            <div>
              <CheckCircle size={30} className="text-white" />
            </div>
            <h2>Share & Grow</h2>
            <p>
              Post your work on LinkedIn, collect feedback, and add real
              experience to your portfolio.
            </p>
          </article>
        </div>
      </div>
    </div>
  );
}
