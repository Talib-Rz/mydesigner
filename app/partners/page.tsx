'use client';

import { useState } from 'react';
import Hero from '@/components/Hero';
import { HiBriefcase, HiCheckCircle } from 'react-icons/hi';

export default function PartnersPage() {
  const [formData, setFormData] = useState({
    businessName: '',
    contactPerson: '',
    email: '',
    website: '',
    city: '',
    state: '',
    businessType: '',
    yearsOfExperience: '',
    introduction: '',
    services: '',
    portfolio: '',
    partnershipReason: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [successMessage, setSuccessMessage] = useState('');

  const businessTypes = [
    'Printing Services',
    'Fabrication',
    'Signage',
    'Event Production',
    'Branding Material Production',
    'Large Format Printing',
    'Other',
  ];

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.businessName.trim()) {
      newErrors.businessName = 'Business Name is required';
    }

    if (!formData.contactPerson.trim()) {
      newErrors.contactPerson = 'Contact Person is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email Address is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }

    if (!formData.city.trim()) {
      newErrors.city = 'City is required';
    }

    if (!formData.state.trim()) {
      newErrors.state = 'State is required';
    }

    if (!formData.businessType.trim()) {
      newErrors.businessType = 'Business Type is required';
    }

    if (!formData.introduction.trim()) {
      newErrors.introduction = 'Short Company Introduction is required';
    }

    if (!formData.services.trim()) {
      newErrors.services = 'Services description is required';
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
    setSuccessMessage('');

    try {
      const response = await fetch('/api/partner-application', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to submit application');
      }

      setSuccessMessage(
        '✓ Thank you for your interest in joining our partner network. Our team will review your application and reach out if there\'s a potential fit.'
      );
      setFormData({
        businessName: '',
        contactPerson: '',
        email: '',
        website: '',
        city: '',
        state: '',
        businessType: '',
        yearsOfExperience: '',
        introduction: '',
        services: '',
        portfolio: '',
        partnershipReason: '',
      });
      setSubmitted(true);

      // Reset success message after 7 seconds
      setTimeout(() => {
        setSuccessMessage('');
        setSubmitted(false);
      }, 7000);
    } catch (error) {
      setErrors({
        submit:
          error instanceof Error
            ? error.message
            : 'Failed to submit application. Please try again.',
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* Hero Section */}
      <Hero
        title="Join the myDesigner Partner Network"
        subtitle="Help brands, businesses and events bring great design to life through quality execution."
        showAnimation={true}
      />

      {/* Partner Application Section */}
      <section className="section-padding bg-gray-50">
        <div className="max-w-3xl mx-auto">
          {/* Info Box */}
          <div className="bg-gradient-to-br from-primary-50 to-accent/5 rounded-2xl p-8 md:p-12 border border-primary-100 mb-12">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-12 h-12 bg-primary-700 rounded-lg flex items-center justify-center text-white flex-shrink-0">
                <HiBriefcase size={24} />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-2">
                  Become a Partner
                </h2>
                <p className="text-gray-600">
                  We're building a network of trusted execution partners. If you're committed to quality,
                  professionalism, and customer satisfaction, we'd like to hear from you.
                </p>
              </div>
            </div>
          </div>

          {/* Partner Application Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Business Name */}
            <div>
              <label
                htmlFor="businessName"
                className="block text-sm font-semibold text-gray-900 mb-2"
              >
                Business Name *
              </label>
              <input
                type="text"
                id="businessName"
                name="businessName"
                value={formData.businessName}
                onChange={handleChange}
                className={`w-full px-4 py-3 border-2 rounded-lg focus:outline-none transition-colors ${
                  errors.businessName
                    ? 'border-red-500'
                    : 'border-gray-200 focus:border-primary-600'
                }`}
                placeholder="Your Business Name"
              />
              {errors.businessName && (
                <p className="text-red-600 text-sm mt-1">{errors.businessName}</p>
              )}
            </div>

            {/* Contact Person */}
            <div>
              <label
                htmlFor="contactPerson"
                className="block text-sm font-semibold text-gray-900 mb-2"
              >
                Contact Person *
              </label>
              <input
                type="text"
                id="contactPerson"
                name="contactPerson"
                value={formData.contactPerson}
                onChange={handleChange}
                className={`w-full px-4 py-3 border-2 rounded-lg focus:outline-none transition-colors ${
                  errors.contactPerson
                    ? 'border-red-500'
                    : 'border-gray-200 focus:border-primary-600'
                }`}
                placeholder="Full Name"
              />
              {errors.contactPerson && (
                <p className="text-red-600 text-sm mt-1">{errors.contactPerson}</p>
              )}
            </div>

            {/* Email Address */}
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
                className={`w-full px-4 py-3 border-2 rounded-lg focus:outline-none transition-colors ${
                  errors.email
                    ? 'border-red-500'
                    : 'border-gray-200 focus:border-primary-600'
                }`}
                placeholder="contact@business.com"
              />
              {errors.email && (
                <p className="text-red-600 text-sm mt-1">{errors.email}</p>
              )}
            </div>

            {/* Website */}
            <div>
              <label
                htmlFor="website"
                className="block text-sm font-semibold text-gray-900 mb-2"
              >
                Website
              </label>
              <input
                type="url"
                id="website"
                name="website"
                value={formData.website}
                onChange={handleChange}
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-primary-600 transition-colors"
                placeholder="https://www.yourwebsite.com"
              />
            </div>

            {/* City and State */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* City */}
              <div>
                <label
                  htmlFor="city"
                  className="block text-sm font-semibold text-gray-900 mb-2"
                >
                  City *
                </label>
                <input
                  type="text"
                  id="city"
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 border-2 rounded-lg focus:outline-none transition-colors ${
                    errors.city
                      ? 'border-red-500'
                      : 'border-gray-200 focus:border-primary-600'
                  }`}
                  placeholder="City"
                />
                {errors.city && (
                  <p className="text-red-600 text-sm mt-1">{errors.city}</p>
                )}
              </div>

              {/* State */}
              <div>
                <label
                  htmlFor="state"
                  className="block text-sm font-semibold text-gray-900 mb-2"
                >
                  State *
                </label>
                <input
                  type="text"
                  id="state"
                  name="state"
                  value={formData.state}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 border-2 rounded-lg focus:outline-none transition-colors ${
                    errors.state
                      ? 'border-red-500'
                      : 'border-gray-200 focus:border-primary-600'
                  }`}
                  placeholder="State"
                />
                {errors.state && (
                  <p className="text-red-600 text-sm mt-1">{errors.state}</p>
                )}
              </div>
            </div>

            {/* Business Type */}
            <div>
              <label
                htmlFor="businessType"
                className="block text-sm font-semibold text-gray-900 mb-2"
              >
                Business Type *
              </label>
              <select
                id="businessType"
                name="businessType"
                value={formData.businessType}
                onChange={handleChange}
                className={`w-full px-4 py-3 border-2 rounded-lg focus:outline-none transition-colors ${
                  errors.businessType
                    ? 'border-red-500'
                    : 'border-gray-200 focus:border-primary-600'
                }`}
              >
                <option value="">Select a business type</option>
                {businessTypes.map((type) => (
                  <option key={type} value={type}>
                    {type}
                  </option>
                ))}
              </select>
              {errors.businessType && (
                <p className="text-red-600 text-sm mt-1">{errors.businessType}</p>
              )}
            </div>

            {/* Years of Experience */}
            <div>
              <label
                htmlFor="yearsOfExperience"
                className="block text-sm font-semibold text-gray-900 mb-2"
              >
                Years of Experience
              </label>
              <input
                type="text"
                id="yearsOfExperience"
                name="yearsOfExperience"
                value={formData.yearsOfExperience}
                onChange={handleChange}
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-primary-600 transition-colors"
                placeholder="e.g., 5 years, 10+ years"
              />
            </div>

            {/* Short Company Introduction */}
            <div>
              <label
                htmlFor="introduction"
                className="block text-sm font-semibold text-gray-900 mb-2"
              >
                Short Company Introduction *
              </label>
              <textarea
                id="introduction"
                name="introduction"
                value={formData.introduction}
                onChange={handleChange}
                rows={4}
                className={`w-full px-4 py-3 border-2 rounded-lg focus:outline-none transition-colors resize-none ${
                  errors.introduction
                    ? 'border-red-500'
                    : 'border-gray-200 focus:border-primary-600'
                }`}
                placeholder="Tell us about your business, background, and what you do..."
              />
              {errors.introduction && (
                <p className="text-red-600 text-sm mt-1">{errors.introduction}</p>
              )}
            </div>

            {/* What Services Do You Provide */}
            <div>
              <label
                htmlFor="services"
                className="block text-sm font-semibold text-gray-900 mb-2"
              >
                What services do you provide? *
              </label>
              <textarea
                id="services"
                name="services"
                value={formData.services}
                onChange={handleChange}
                rows={4}
                className={`w-full px-4 py-3 border-2 rounded-lg focus:outline-none transition-colors resize-none ${
                  errors.services
                    ? 'border-red-500'
                    : 'border-gray-200 focus:border-primary-600'
                }`}
                placeholder="Describe the services you provide (e.g., offset printing, digital printing, fabrication, signage, etc.)"
              />
              {errors.services && (
                <p className="text-red-600 text-sm mt-1">{errors.services}</p>
              )}
            </div>

            {/* Portfolio / Website Links */}
            <div>
              <label
                htmlFor="portfolio"
                className="block text-sm font-semibold text-gray-900 mb-2"
              >
                Portfolio / Website Links
              </label>
              <textarea
                id="portfolio"
                name="portfolio"
                value={formData.portfolio}
                onChange={handleChange}
                rows={3}
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-primary-600 transition-colors resize-none"
                placeholder="Share links to your portfolio, past work, or website..."
              />
            </div>

            {/* Why Partner with myDesigner */}
            <div>
              <label
                htmlFor="partnershipReason"
                className="block text-sm font-semibold text-gray-900 mb-2"
              >
                Why would you like to partner with myDesigner?
              </label>
              <textarea
                id="partnershipReason"
                name="partnershipReason"
                value={formData.partnershipReason}
                onChange={handleChange}
                rows={3}
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-primary-600 transition-colors resize-none"
                placeholder="Tell us why you're interested in becoming a partner with myDesigner..."
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={loading}
              className="w-full btn-primary py-4 text-lg font-semibold disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {loading ? 'Submitting...' : 'Submit Application'}
            </button>

            {/* Success Message - Below Submit Button */}
            {successMessage && (
              <div className="bg-green-50 border-2 border-green-200 rounded-lg p-6">
                <div className="flex items-start gap-4">
                  <div className="text-green-600 flex-shrink-0">
                    <HiCheckCircle size={24} />
                  </div>
                  <p className="text-green-700 font-semibold">{successMessage}</p>
                </div>
              </div>
            )}

            {/* Error Message */}
            {errors.submit && (
              <div className="bg-red-50 border-2 border-red-200 rounded-lg p-6">
                <p className="text-red-700 font-semibold">{errors.submit}</p>
              </div>
            )}
          </form>

          {/* Info Message */}
          <div className="mt-12 p-6 bg-blue-50 rounded-lg border border-blue-200">
            <p className="text-blue-900 text-sm">
              <span className="font-semibold">Note:</span> All fields marked with * are required. We'll review your application and reach out if there's a good fit for partnership.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
