import { Mail } from "lucide-react";
import { NavLinks, socialLinks } from "../utils/data";
import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:justify-items-center">
          {/* logo */}
          <div className="max-w-90">
            <div className="flex items-center space-x-2 mb-4">
              <span className="text-xl font-bold">NetworkHER</span>
            </div>
            <p className="text-gray-200 text-base">
              Bridging learning and real-world experience through inclusive
              digital internships. Empowering the next generation of digital
              professionals.
            </p>
          </div>

          {/* quick links */}
          <div className="flex flex-col">
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <div className="flex flex-col space-y-3 ">
              {NavLinks.map((navLink, index) => (
                <Link
                  key={index}
                  href={navLink.href}
                  className="text-gray-200 hover:text-[#6A5ACD] transition-colors"
                >
                  {navLink.text}
                </Link>
              ))}
            </div>
          </div>

          {/* Social */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Get In Touch</h3>
            <Link href="mailto:NetworkHERcommunity@gmail.com">
              <p>Want to ask something now? Email us at </p>
              <div className="flex items-center space-x-2 text-gray-200 my-4 leading-0 leading-0.1">
                <Mail className="h-6 w-6" />
                <span className="text-base">NetworkHERcommunity@gmail.com</span>
              </div>
            </Link>
            <div className="flex space-x-4">
              <p>Follow us:</p>
              {socialLinks.map((socialLink, index) => (
                <Link
                  key={index}
                  href={socialLink.link}
                  className="text-gray-400 hover:text-primary transition-colors"
                  aria-label="LinkedIn"
                >
                  <socialLink.icon className="h-6 w-6" />
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-300 text-sm">
            © {currentYear} InternHub. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
