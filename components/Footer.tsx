'use client';

import Link from 'next/link';
import { HiMail, HiPhone } from 'react-icons/hi';
import { FaMapMarker } from 'react-icons/fa';
import { FaLinkedin, FaTwitter, FaInstagram } from 'react-icons/fa';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    { label: 'Services', href: '/services' },
    { label: 'Case Studies', href: '/case-studies' },
    { label: 'About Us', href: '/about' },
    { label: 'Contact', href: '/contact' },
  ];

  const socialLinks = [
    { icon: FaLinkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
    { icon: FaInstagram, href: 'https://instagram.com', label: 'Instagram' },
    { icon: FaTwitter, href: 'https://twitter.com', label: 'Twitter' },
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold bg-gradient-to-r from-primary-400 to-accent bg-clip-text text-transparent mb-4">
              myDesigner
            </h3>
            <p className="text-gray-400 mb-6">
              Premium visual branding and campaign studio for brands and events that demand excellence.
            </p>
            <div className="flex gap-4">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="text-gray-400 hover:text-accent transition-colors duration-200"
                >
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-lg mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-accent transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold text-lg mb-6">Services</h4>
            <ul className="space-y-3 text-gray-400">
              <li>Brand Identity Systems</li>
              <li>Campaign Systems</li>
              <li>Content & Media Design</li>
              <li>Creative Retainer</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-bold text-lg mb-6">Contact</h4>
            <ul className="space-y-4 text-gray-400">
              <li className="flex gap-3 items-start">
                <HiMail size={20} className="mt-1 flex-shrink-0 text-accent" />
                <a href="mailto:mydesigner2024@gmail.com" className="hover:text-accent transition-colors">
                  mydesigner2024@gmail.com
                </a>
              </li>
              <li className="flex gap-3 items-start">
                <HiPhone size={20} className="mt-1 flex-shrink-0 text-accent" />
                <a href="tel:+918252348421" className="hover:text-accent transition-colors">
                  +91 82523 48421
                </a>
              </li>
              <li className="flex gap-3 items-start">
                <FaMapMarker size={20} className="mt-1 flex-shrink-0 text-accent" />
                <span>India</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-gray-400 text-sm">
            <p>&copy; {currentYear} myDesigner. All rights reserved.</p>
            <div className="flex gap-6">
              <Link href="#" className="hover:text-accent transition-colors">
                Privacy Policy
              </Link>
              <Link href="#" className="hover:text-accent transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
