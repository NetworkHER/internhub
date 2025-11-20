import React from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTrigger,
} from "@/components/ui/dialog";
import Form from "./form";

export default function Hero() {
  return (
    <div className="pt-26 pb-14 bg-[#eff3f3] h-[90vh] flex flex-col justify-center gap-6 items-center">
      <header className="text-center leading-8 font-bold">
        <h1 className="text-[3.3rem] md:text-6xl leading-12 text-foreground">
          Launch Your Career
        </h1>
        <h1 className="text-[3.3rem] md:text-6xl leading-15 mt-3 text-primary">
          With Real Experience
        </h1>
      </header>
      <p className="mt-6 text-center text-[1.08rem] md:text-[1.15rem] w-[85%] mx-auto text-gray-700 md:w-[60%]">
        Join our internship program to gain hands-on experience, build your
        network and accelerate your professional growth.
      </p>

      <div className=" w-full mt-8 md:mt-5 flex flex-col justify-center items-center md:flex md:w-[40%] md:p-0 md:flex-row md:gap-2 mx-auto ">
        <Dialog>
          <DialogTrigger className="bg-primary text-white text-[1rem] transition-all hover:shadow-2xl w-[95%] hover:translate-0.5 mt-2 py-4 md:py-3 rounded-lg border-2 border-primary font-bold">
            {" "}
            Register Now
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <Form />
            </DialogHeader>
          </DialogContent>
        </Dialog>
        <Dialog>
          <DialogTrigger className="hover:bg-primary hover:text-white text-[1rem] transition-all hover:shadow-2xl w-[95%] hover:translate-0.5 mt-2 py-4 md:py-3 rounded-lg bg-white border-2 border-primary text-primary font-bold">
            {" "}
            Join Waitlist
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <Form />
            </DialogHeader>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
}
