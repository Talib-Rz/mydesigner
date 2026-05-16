'use client';

import { useState } from 'react';
import type { Metadata } from 'next';
import Hero from '@/components/Hero';
import { HiMail, HiPhone } from 'react-icons/hi';
import { FaMapMarker, FaWhatsapp } from 'react-icons/fa';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    projectType: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[name];
        return next;
      });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setLoading(true);

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to send email');
      }

      setSubmitted(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        projectType: '',
        message: '',
      });

      // Reset success message after 5 seconds
      setTimeout(() => {
        setSubmitted(false);
      }, 5000);
    } catch (error) {
      setErrors({
        submit: error instanceof Error ? error.message : 'Failed to send message. Please try again.',
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* Hero Section */}
      <Hero
        title="Get In Touch"
        subtitle="Ready to discuss your project? We'd love to hear from you. Let's create something amazing together."
        showAnimation={true}
      />

      {/* Contact Section */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Information */}
            <div className="lg:col-span-1">
              <div className="space-y-8">
                {/* Email */}
                <div>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center text-primary-700">
                      <HiMail size={24} />
                    </div>
                    <h3 className="text-lg font-bold text-gray-900">Email</h3>
                  </div>
                  <a
                    href="mailto:mydesigner2024@gmail.com"
                    className="text-gray-600 hover:text-primary-700 transition-colors break-all"
                  >
                    mydesigner2024@gmail.com
                  </a>
                </div>

                {/* Phone */}
                <div>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center text-primary-700">
                      <HiPhone size={24} />
                    </div>
                    <h3 className="text-lg font-bold text-gray-900">Phone</h3>
                  </div>
                  <a
                    href="tel:+918252348421"
                    className="text-gray-600 hover:text-primary-700 transition-colors"
                  >
                    +91 82523 48421
                  </a>
                </div>

                {/* WhatsApp */}
                <div>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center text-green-700">
                      <FaWhatsapp size={24} />
                    </div>
                    <h3 className="text-lg font-bold text-gray-900">WhatsApp</h3>
                  </div>
                  <a
                    href="https://wa.me/918252348421"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-green-700 transition-colors"
                  >
                    +91 82523 48421
                  </a>
                </div>

                {/* Location */}
                <div>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center text-primary-700">
                      <FaMapMarker size={24} />
                    </div>
                    <h3 className="text-lg font-bold text-gray-900">Location</h3>
                  </div>
                  <p className="text-gray-600">
                    India
                    <br />
                    Primarily serving India with projects nationwide
                  </p>
                </div>

                {/* Response Time */}
                <div className="bg-blue-50 border-2 border-blue-200 rounded-lg p-6 mt-8">
                  <p className="text-sm text-blue-900">
                    <span className="font-bold">Response Time:</span> We typically respond to all inquiries within 24 hours.
                  </p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              {submitted && (
                <div className="mb-8 bg-green-50 border-2 border-green-200 rounded-lg p-6">
                  <h3 className="text-lg font-bold text-green-900 mb-2">
                    ✓ Thank You!
                  </h3>
                  <p className="text-green-800">
                    We've received your message and will get back to you shortly.
                  </p>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name */}
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-semibold text-gray-900 mb-2"
                  >
                    Your Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 border-2 rounded-lg focus:outline-none focus:border-primary-600 transition-colors ${
                      errors.name
                        ? 'border-red-500'
                        : 'border-gray-200 focus:border-primary-600'
                    }`}
                    placeholder="John Doe"
                  />
                  {errors.name && (
                    <p className="text-red-600 text-sm mt-1">{errors.name}</p>
                  )}
                </div>

                {/* Email */}
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-semibold text-gray-900 mb-2"
                  >
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 border-2 rounded-lg focus:outline-none focus:border-primary-600 transition-colors ${
                      errors.email
                        ? 'border-red-500'
                        : 'border-gray-200 focus:border-primary-600'
                    }`}
                    placeholder="john@example.com"
                  />
                  {errors.email && (
                    <p className="text-red-600 text-sm mt-1">{errors.email}</p>
                  )}
                </div>

                {/* Phone */}
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-semibold text-gray-900 mb-2"
                  >
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-primary-600 transition-colors"
                    placeholder="+91 98765 43210"
                  />
                </div>

                {/* Company */}
                <div>
                  <label
                    htmlFor="company"
                    className="block text-sm font-semibold text-gray-900 mb-2"
                  >
                    Company / Organization
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-primary-600 transition-colors"
                    placeholder="Your Company"
                  />
                </div>

                {/* Project Type */}
                <div>
                  <label
                    htmlFor="projectType"
                    className="block text-sm font-semibold text-gray-900 mb-2"
                  >
                    Project Type
                  </label>
                  <select
                    id="projectType"
                    name="projectType"
                    value={formData.projectType}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-primary-600 transition-colors"
                  >
                    <option value="">Select a project type</option>
                    <option value="brand-identity">Brand Identity System</option>
                    <option value="event-campaign">Event & Launch Campaign</option>
                    <option value="content-design">Content & Media Design</option>
                    <option value="retainer">Creative Retainer</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-semibold text-gray-900 mb-2"
                  >
                    Tell us about your project *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={6}
                    className={`w-full px-4 py-3 border-2 rounded-lg focus:outline-none focus:border-primary-600 transition-colors resize-none ${
                      errors.message
                        ? 'border-red-500'
                        : 'border-gray-200 focus:border-primary-600'
                    }`}
                    placeholder="What's your vision? What are you trying to achieve?"
                  />
                  {errors.message && (
                    <p className="text-red-600 text-sm mt-1">{errors.message}</p>
                  )}
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full btn-primary py-4 text-lg font-semibold disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {loading ? 'Sending...' : 'Send Message'}
                </button>

                {errors.submit && (
                  <div className="bg-red-50 border-2 border-red-200 rounded-lg p-4">
                    <p className="text-red-600 text-sm">{errors.submit}</p>
                  </div>
                )}

                <p className="text-sm text-gray-500 text-center">
                  We'll typically respond within 24 hours.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="section-title text-center mb-12">Frequently Asked Questions</h2>

          <div className="space-y-6">
            {[
              {
                question: 'What\'s your typical project timeline?',
                answer: 'It depends on the scope. A simple logo design takes 2-3 weeks, while a complete brand identity system takes 4-8 weeks. Event campaigns can be expedited based on your deadline.',
              },
              {
                question: 'How much do your services cost?',
                answer: 'Pricing varies based on project scope and complexity. We offer flexible engagement models from project-based to retainer partnerships. Get in touch to discuss your budget and we\'ll create a tailored proposal.',
              },
              {
                question: 'Can you work with tight deadlines?',
                answer: 'Yes! We\'re experienced with fast turnarounds. Whether it\'s a last-minute campaign or an urgent event rebrand, we have processes to deliver high-quality work quickly. Just let us know your timeline.',
              },
              {
                question: 'Do you offer revisions?',
                answer: 'Absolutely. Revision rounds are included in our standard process. We believe in getting it right with your feedback. The number of revisions varies by project type.',
              },
              {
                question: 'What\'s your team size?',
                answer: 'We\'re a small, focused team of designers and strategists. This means you\'ll work with senior-level expertise on every project, not junior staff.',
              },
              {
                question: 'Can you help with licensing and asset formats?',
                answer: 'Yes. We deliver all final assets in multiple formats (SVG, PNG, PDF, etc.) with proper licensing. You\'ll have everything you need to use your designs across all platforms.',
              },
            ].map((faq, index) => (
              <details
                key={index}
                className="bg-white rounded-lg border border-gray-200 p-6 cursor-pointer hover:border-primary-300 transition-colors"
              >
                <summary className="font-bold text-gray-900 flex items-center justify-between">
                  {faq.question}
                  <span className="text-primary-700">+</span>
                </summary>
                <p className="text-gray-600 mt-4">{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
