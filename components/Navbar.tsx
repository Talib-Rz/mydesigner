'use client';

import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { HiMenu, HiX } from 'react-icons/hi';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/solutions', label: 'Solutions' },
    { href: '/gallery', label: 'Gallery' },
    { href: '/case-studies', label: 'Case Studies' },
    { href: '/about', label: 'About' },
    { href: '/feedback', label: 'Feedback' },
    { href: '/contact', label: 'Contact' },
  ];

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-lg' : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="w-full px-6 md:px-8 lg:px-12">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center flex-shrink-0">
            <img
              src="/logo/logo.png"
              alt="myDesigner Logo"
              className="h-10 w-auto"
            />
          </Link>

          {/* Desktop Menu */}
          {/* <div className="hidden md:flex gap-6 items-center justify-center flex-1 px-8"> */}
          <div className="hidden md:flex gap-10 items-center justify-center flex-[1.4] px-12">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`font-semibold transition-colors duration-200 text-sm whitespace-nowrap ${
                    isActive
                      ? 'text-primary-700 border-b-2 border-primary-700 pb-1'
                      : 'text-gray-700 hover:text-primary-700'
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>

          {/* CTA Button */}
          <div className="hidden md:block flex-shrink-0">
            <Link href="/contact" className="btn-primary whitespace-nowrap">
              Get In Touch
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-2xl text-gray-900"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <HiX /> : <HiMenu />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <>
            {/* Backdrop Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden pointer-events-auto"
              onClick={() => setIsOpen(false)}
              style={{ top: '80px' }}
            />

            {/* Mobile Menu Dropdown */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="absolute top-full left-0 right-0 w-full bg-white border-t border-gray-100 shadow-lg z-50 md:hidden max-h-[calc(100vh-80px)] overflow-y-auto"
            >
              <div className="flex flex-col gap-1 pt-4 pb-6 px-4 sm:px-6">
                {navLinks.map((link) => {
                  const isActive = pathname === link.href;
                  return (
                    <Link
                      key={link.href}
                      href={link.href}
                      className={`font-medium transition-colors py-3 px-4 rounded text-sm ${
                        isActive
                          ? 'text-primary-700 bg-primary-50 border-l-4 border-primary-700'
                          : 'text-gray-700 hover:text-primary-700 hover:bg-gray-50'
                      }`}
                      onClick={() => setIsOpen(false)}
                    >
                      {link.label}
                    </Link>
                  );
                })}
                <div className="pt-3 border-t border-gray-200 mt-3">
                  <Link
                    href="/contact"
                    className="btn-primary w-full justify-center"
                    onClick={() => setIsOpen(false)}
                  >
                    Get In Touch
                  </Link>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </div>
    </motion.nav>
  );
}
