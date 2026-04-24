import React from "react";
import { Target, Users, Award, Linkedin, Book } from "lucide-react";
export default function About() {
  return (
    <div className="pt-16 mx-8" id="about">
      <header className="  ">
        <h1 className="font-bold text-lg md:text-xl text-foreground md:w-3/4 mx-auto text-center my-2">
          {" "}
          About BuildLabs
        </h1>
        <h1 className="font-normal text-lg md:text-xl text-foreground md:w-3/4 mx-auto text-lef my-">
          BuildLabs is a project-based internship under Nexus Fellowship,
          designed to give you real-world experience, help you build a strong
          portfolio, and develop practical skills through collaboration.
        </h1>
        <h1 className="font-normal text-lg md:text-xl text-foreground md:w-3/4 mx-auto text-left my-2">
          {" "}
          Participants will gain hands-on experience working on real projects in
          a structured team environment, while building practical,
          industry-ready skills for the workplace.
        </h1>
        <h1 className="font-normal text-lg md:text-xl text-foreground md:w-3/4 mx-auto text-left my-2">
          {" "}
          Upon successful completion of the program, participants will receive a
          certificate of completion and a letter of recommendation. Outstanding
          interns will also receive job recommendations and referrals to partner
          organizations and opportunities.
        </h1>
        <p className="mt-4 font-bold md:mt-8 text-center text-[1.1rem] md:text-[1.2rem] w-[90%] mx-auto text-gray-700">
          What you gain from our internship?
        </p>
      </header>
      <div className="about mt-5 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
          <h2> Cross-disciplinary skills</h2>
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
        <article className="extra-padding">
          <div>
            <Book size={30} className="text-primary" />
          </div>
          <h2> Certification & Opportunities </h2>
          <p>
            {" "}
            Participants receive a certificate and letter of recommendation upon
            completion, with job referral opportunities for top performers.
          </p>
        </article>
      </div>
    </div>
  );
}
