import React from "react";
import { Target, Users, Award, Linkedin, Book } from "lucide-react";
export default function About() {
  return (
    <div className="pt-16" id="about">
      <header className=" ">
        <h1 className="font-bold text-[2.8rem] md:text-[2.3rem] leading-12 text-center text-foreground">
          What you get from our intership
        </h1>
        <p className="mt-6 md:mt-2 text-center text-[1.1rem] md:text-[1.2rem] w-[90%] mx-auto text-gray-700">
          What you’ll gain at NetworkHER
        </p>
      </header>
      <div className="about mt-14 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <article>
          <div>
            <Target size={30} className="text-primary" />
          </div>
          <h2>Real-World Experience</h2>
          <p>Practical tasks and projects you can show on your portfolio. </p>
        </article>

        <article className="extra-padding">
          <div>
            <Users size={30} className="text-primary" />
          </div>
          <h2>Cross-discipline skills</h2>
          <p>Tech, design, content, product and community roles.</p>
        </article>

        <article className="extra-padding">
          <div>
            <Award size={30} className="text-primary" />
          </div>
          <h2>Community support</h2>
          <p>Peer feedback, accountability and shared learning.</p>
        </article>
        <article className="extra-padding">
          <div>
            <Linkedin size={30} className="text-primary" />
          </div>
          <h2>LinkedIn visibility</h2>
          <p>We encourage public posting and tagging to boost your profile.</p>
        </article>
        <article className="extra-padding">
          <div>
            <Book size={30} className="text-primary" />
          </div>
          <h2>Flexible learning</h2>
          <p>Work at your pace with clear milestones and team sprints.</p>
        </article>
      </div>
    </div>
  );
}
