import React from "react";
import { Target, Users, Award } from "lucide-react";
export default function About() {
  return (
    <div className="pt-16">
      <header className=" ">
        <h1 className="font-bold text-[2.8rem] md:text-[2.3rem] leading-12 text-center text-foreground">
          why Choose InternHub?
        </h1>
        <p className="mt-6 md:mt-2 text-center text-[1.1rem] md:text-[1.2rem] w-[90%] mx-auto text-gray-700">
          We connect ambitious students with meaningful opportunities that
          prepare them for successful careers.
        </p>
      </header>
      <div className="about mt-14 md:grid grid-cols-3">
        <article>
          <div>
            <Target size={30} className="text-primary" />
          </div>
          <h2>Real-World Experience</h2>
          <p>Work on actual projects that make an impact </p>
        </article>

        <article className="extra-padding">
          <div>
            <Users size={30} className="text-primary" />
          </div>
          <h2>Expert Mentorship</h2>
          <p>Learn from industry professionals</p>
        </article>

        <article className="extra-padding">
          <div>
            <Award size={30} className="text-primary" />
          </div>
          <h2>Certificate $ Credits</h2>
          <p>Earn recognition for your achievements</p>
        </article>
      </div>
    </div>
  );
}
