'use client';

import { FaWhatsapp } from 'react-icons/fa';
// Import analytics tracking function for WhatsApp interactions
import { trackWhatsAppClick } from '@/lib/analytics';

export default function WhatsAppButton() {
  /**
   * Handle WhatsApp button click
   * Tracks the user interaction in Google Analytics before navigating
   */
  const handleWhatsAppClick = () => {
    // Track the WhatsApp click event
    // Parameters: phone number (optional), source identifier
    trackWhatsAppClick('918252348421', 'floating_button');
  };

  return (
    <a
      href="https://wa.me/918252348421"
      onClick={handleWhatsAppClick}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contact us on WhatsApp"
      className="fixed bottom-6 right-6 w-14 h-14 bg-green-500 hover:bg-green-600 text-white rounded-full flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-110 z-30"
    >
      <FaWhatsapp size={28} />
    </a>
  );
}
