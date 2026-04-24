"use client";
import { Briefcase, Menu, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { NavLinks } from "../utils/data";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTrigger,
} from "@/components/ui/dialog";
import Form from "./form";
import { NexusFellowshipForm } from "./formsPage";

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [nexusOpen, setNexusOpen] = useState(false);

  return (
    <nav className=" bg-white shadow-sm fixed top-0 left-0 right-0 z-50 w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-center w-full">
        <div className="flex justify-between items-center w-full py-[0.75rem]">
          <Link href={"/"} className="flex items-center">
            <div className="flex items-center space-x-2 cursor-pointer top-6">
              <Briefcase className="h-6 w-6 text-[#6A5ACD]" />
              <span className="text-[1.15rem] font-medium ml-0.5">
                BuildLabs Internship
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex justify-end items-center space-x-8 my-3 w-3/4">
            {NavLinks.map((navLink, index) => (
              <Link
                key={index}
                href={navLink.href}
                className="text-gray-700 hover:text-[#6A5ACD] transition-colors"
              >
                {navLink.text}
              </Link>
            ))}
            {/* <Link
              href={
                "https://docs.google.com/forms/d/e/1FAIpQLSenbPi1oFgTrblxE_vjs1IbgyL1By4FZwFEyWKgrSaEYDHjHA/viewform"
              }
              target="_blank"
              className="w-[20%] bg-primary text-white text-[1rem] transition-all hover:shadow-2xl  hover:translate-0.5 mt-2 py-4 md:py-3 rounded-lg border-2 border-primary font-bold text-center"
            >
              <button className=" "> Join Our Community</button>{" "}
            </Link> */}
            <Dialog>
              <DialogTrigger className="bg-[#6A5ACD] text-white px-6 py-2 rounded-lg hover:bg-[#5a4abd] transition-colors">
                {" "}
                Join Our Community
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <NexusFellowshipForm onSuccess={() => setNexusOpen(false)} />
                </DialogHeader>
              </DialogContent>
            </Dialog>

            {/* <button className="bg-[#6A5ACD] text-white px-6 py-2 rounded-lg hover:bg-[#5a4abd] transition-colors">
              Apply now
            </button> */}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-700"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="px-4 py-6 flex flex-col space-y-8 h-[70vh]">
            {NavLinks.map((navLink, index) => (
              <Link
                key={index}
                href={navLink.href}
                className="text-gray-700 hover:text-[#6A5ACD] transition-colors"
              >
                {navLink.text}
              </Link>
            ))}

            <Dialog>
              <DialogTrigger className="bg-[#6A5ACD] text-white px-6 py-2 rounded-lg hover:bg-[#5a4abd] transition-colors">
                {" "}
                Join Our Community
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <NexusFellowshipForm onSuccess={() => setNexusOpen(false)} />
                </DialogHeader>
              </DialogContent>
            </Dialog>
            {/* <button className="block w-full bg-[#6A5ACD] text-white px-6 py-2 rounded-lg hover:bg-[#5a4abd] transition-colors">
              Register
            </button> */}
          </div>
        </div>
      )}
    </nav>
  );
}
