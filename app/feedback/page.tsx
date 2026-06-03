'use client';

import { useState } from 'react';
import Hero from '@/components/Hero';
import { HiMail, HiStar } from 'react-icons/hi';

export default function FeedbackPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    feedbackType: 'general',
    message: '',
    rating: '5',
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [successMessage, setSuccessMessage] = useState('');

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
      newErrors.message = 'Feedback message is required';
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
      const response = await fetch('/api/send-feedback', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to send feedback');
      }

      setSuccessMessage('✓ Thank you! Your feedback has been sent successfully.');
      setFormData({
        name: '',
        email: '',
        subject: '',
        feedbackType: 'general',
        message: '',
        rating: '5',
      });
      setSubmitted(true);

      // Reset success message after 5 seconds
      setTimeout(() => {
        setSuccessMessage('');
        setSubmitted(false);
      }, 5000);
    } catch (error) {
      setErrors({
        submit: error instanceof Error ? error.message : 'Failed to send feedback. Please try again.',
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* Hero Section */}
      <Hero
        title="We Value Your Feedback"
        subtitle="Help us improve! Share your thoughts about our work and suggestions for our website."
        showAnimation={true}
      />

      {/* Feedback Form Section */}
      <section className="section-padding bg-gray-50">
        <div className="max-w-3xl mx-auto">
          <div className="bg-gradient-to-br from-primary-50 to-accent/5 rounded-2xl p-8 md:p-12 border border-primary-100 mb-8">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-12 h-12 bg-primary-700 rounded-lg flex items-center justify-center text-white flex-shrink-0">
                <HiStar size={24} />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-2">Your Feedback Matters</h2>
                <p className="text-gray-600">
                  Whether you have a suggestion, found a bug, or just want to share your experience, we'd love to hear from you. Your input helps us create better experiences.
                </p>
              </div>
            </div>
          </div>

          {/* Feedback Form */}
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
                className={`w-full px-4 py-3 border-2 rounded-lg focus:outline-none transition-colors ${
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
                className={`w-full px-4 py-3 border-2 rounded-lg focus:outline-none transition-colors ${
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

            {/* Subject */}
            <div>
              <label
                htmlFor="subject"
                className="block text-sm font-semibold text-gray-900 mb-2"
              >
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-primary-600 transition-colors"
                placeholder="e.g., Website improvement suggestion"
              />
            </div>

            {/* Feedback Type */}
            <div>
              <label
                htmlFor="feedbackType"
                className="block text-sm font-semibold text-gray-900 mb-2"
              >
                Feedback Type
              </label>
              <select
                id="feedbackType"
                name="feedbackType"
                value={formData.feedbackType}
                onChange={handleChange}
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-primary-600 transition-colors"
              >
                <option value="general">General Feedback</option>
                <option value="design">Design Feedback</option>
                <option value="work">About Our Work</option>
                <option value="improvement">Website Improvement</option>
                <option value="bug">Bug Report</option>
                <option value="feature">Feature Request</option>
              </select>
            </div>

            {/* Rating */}
            <div>
              <label
                htmlFor="rating"
                className="block text-sm font-semibold text-gray-900 mb-2"
              >
                How would you rate your experience?
              </label>
              <div className="flex items-center gap-2">
                <select
                  id="rating"
                  name="rating"
                  value={formData.rating}
                  onChange={handleChange}
                  className="px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-primary-600 transition-colors"
                >
                  <option value="5">⭐ Excellent (5/5)</option>
                  <option value="4">⭐ Very Good (4/5)</option>
                  <option value="3">⭐ Good (3/5)</option>
                  <option value="2">⭐ Fair (2/5)</option>
                  <option value="1">⭐ Poor (1/5)</option>
                </select>
              </div>
            </div>

            {/* Message */}
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-semibold text-gray-900 mb-2"
              >
                Your Feedback *
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={6}
                className={`w-full px-4 py-3 border-2 rounded-lg focus:outline-none transition-colors resize-none ${
                  errors.message
                    ? 'border-red-500'
                    : 'border-gray-200 focus:border-primary-600'
                }`}
                placeholder="Tell us what you think about our work, our website, or how we can improve..."
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
              {loading ? 'Sending...' : 'Send Feedback'}
            </button>

            {/* Success Message - Below Submit Button */}
            {successMessage && (
              <div className="bg-green-50 border-2 border-green-200 rounded-lg p-4 mt-4">
                <p className="text-green-700 font-semibold text-center">{successMessage}</p>
              </div>
            )}

            {/* Error Message */}
            {errors.submit && (
              <div className="bg-red-50 border-2 border-red-200 rounded-lg p-4">
                <p className="text-red-600 text-sm">{errors.submit}</p>
              </div>
            )}

            <p className="text-sm text-gray-500 text-center">
              We read and appreciate all feedback. Thank you for helping us improve!
            </p>
          </form>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="section-title text-center mb-12">Frequently Asked Questions</h2>

          <div className="space-y-6">
            {[
              {
                question: 'Will you respond to my feedback?',
                answer: 'Absolutely! We read every piece of feedback. For specific issues or suggestions, our team will reach out to you directly at the email you provide.',
              },
              {
                question: 'What kind of feedback are you looking for?',
                answer: 'We welcome all feedback - from compliments about our work, to suggestions for website improvements, bug reports, feature requests, or general thoughts about our services.',
              },
              {
                question: 'Is my feedback anonymous?',
                answer: 'We ask for your name and email so we can follow up if needed. However, we never share your information with third parties. Your feedback is confidential.',
              },
              {
                question: 'How long does it take to get a response?',
                answer: 'We typically review and respond to feedback within 2-3 business days. For urgent issues, please contact us directly via WhatsApp or email.',
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
