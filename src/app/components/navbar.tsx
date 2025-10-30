"use client"
import { Briefcase, Menu, X } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';
import { NavLinks } from '../utils/data';

interface NavbarProps {
    onNavigate: (page: string) => void;
}

export function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const scrollToSection = (sectionId: string) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
            setIsMenuOpen(false);
        }
    };

    return (
        <nav className="bg-white shadow-sm fixed top-0 left-0 right-0 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-18">
                    <div
                        className="flex items-center space-x-2 cursor-pointer"
                        
                    >
                        <span className="text-2xl  font-extrabold text-primary">NetworkHER</span>
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-8 my-3">
                        {NavLinks.map((navLink, index) => (
                            <Link
                                href={navLink.href}
                                className="text-gray-700 hover:text-[#6A5ACD] transition-colors"
                            >
                                {navLink.text}
                            </Link>
                        ))}

                       
                        <button
                            className="bg-[#6A5ACD] text-white px-6 py-2 rounded-lg hover:bg-[#5a4abd] transition-colors"
                        >
                         Apply now
                        </button>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden text-gray-700"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                        {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <div className="md:hidden bg-white border-t">
                    <div className="px-4 py-6 flex flex-col space-y-8 h-[70vh]">
                    {NavLinks.map((navLink, index) => (
                            <Link
                                href={navLink.href}
                                className="text-gray-700 hover:text-[#6A5ACD] transition-colors"
                            >
                                {navLink.text}
                            </Link>
                        ))}
                       
                        <button
                            
                            className="block w-full bg-[#6A5ACD] text-white px-6 py-2 rounded-lg hover:bg-[#5a4abd] transition-colors"
                        >
                            Register
                        </button>
                    </div>
                </div>
            )}
        </nav>
    );
}
