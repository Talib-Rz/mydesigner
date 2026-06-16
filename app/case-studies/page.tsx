import type { Metadata } from 'next';
import Hero from '@/components/Hero';
import CaseStudyCard from '@/components/CaseStudyCard';
import CTASection from '@/components/CTASection';
import Link from 'next/link';
import { caseStudies } from '@/lib/data';

export const metadata: Metadata = {
  title: 'Case Studies - myDesigner',
  description: 'Explore our case studies showcasing successful branding and campaign projects across various industries and segments.',
  keywords: 'case studies, portfolio, branding projects, campaign work',
};

export default function CaseStudiesPage() {
  return (
    <>
      {/* Hero Section */}
      <Hero
        title="Case Studies"
        subtitle="We solve communication problems with measurable business outcomes."
        showAnimation={true}
      />

      {/* Intro Section */}
      <section className="section-padding bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">We don't just create visuals. We solve communication problems.</h2>
          <p className="text-gray-600">
            Each project is scoped around a clear business objective from increasing registrations and engagement to improving sponsor visibility and conversion rates. Below you'll find concise summaries focused on Challenge → Solution → Impact → Results.
          </p>
        </div>
      </section>
      {/* Case Studies Grid */}
      <section className="section-padding bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <h2 className="section-title mb-4">All Case Studies</h2>
            <p className="section-subtitle max-w-3xl">Browse our complete portfolio of projects across events, startups, and agencies.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[...caseStudies].reverse().map((study, index) => (
              <CaseStudyCard key={study.id} {...study} index={index} variant="small" />
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Case Study Section */}
      {[...caseStudies].reverse().map((study, index) => (
        <section
          key={study.id}
          id={`study-${study.id}`}
          className={`section-padding ${index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}
        >
          <div className="max-w-5xl mx-auto px-4">
            <div className="mb-8">
              <span className="inline-block px-3 sm:px-4 py-1.5 sm:py-2 bg-primary-100 text-primary-700 rounded-full text-xs sm:text-sm font-bold mb-4">
                {study.category}
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
                {study.title}
              </h2>
              <p className="text-lg sm:text-xl text-gray-600 leading-relaxed">
                {study.description}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 my-8 sm:my-12">
              {/* Challenge */}
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">Challenge</h3>
                <p className="text-gray-700 leading-relaxed text-sm sm:text-base">{study.challenge}</p>
              </div>

              {/* Solution */}
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">Solution</h3>
                <p className="text-gray-700 leading-relaxed text-sm sm:text-base">{study.solution}</p>
              </div>
            </div>
            {/* Impact */}
            <div className="bg-gradient-to-r from-primary-50 to-accent/10 rounded-2xl p-6 sm:p-8 mb-6 sm:mb-8 border border-primary-100">
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6">Impact</h3>
              <p className="text-gray-700 leading-relaxed mb-4 text-sm sm:text-base">{study.impact}</p>
            </div>

            {/* Results */}
            <div className="mb-8">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Results</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
                {study.results.map((result, idx) => (
                  <div key={idx} className="bg-white rounded-lg p-4 border border-primary-100">
                    <p className="text-sm text-gray-600 mb-2">Outcome {idx + 1}</p>
                    <p className="font-semibold text-gray-900">{result}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 flex justify-center">
              <Link
                href={`/case-studies/${study.id}/designs`}
                className="inline-flex items-center gap-2 px-6 py-3 bg-primary-700 text-white rounded-md hover:bg-primary-800 shadow-sm"
              >
                Explore Designs
              </Link>
            </div>
          </div>
        </section>
      ))}

      {/* Key Metrics Section */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="section-title text-center mb-12">Our Track Record</h2>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { number: '3', label: 'Segments We Specialize In' },
              { number: '10+', label: 'Projects Delivered' },
              { number: '50+', label: 'Creative Assets Produced' },
              { number: '8+', label: 'Organizations Trusted Us' },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-4xl font-bold bg-gradient-to-r from-primary-700 to-accent bg-clip-text text-transparent mb-2">
                  {stat.number}
                </div>
                <p className="text-gray-600 font-medium">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection
        heading="Yours Could Be Next"
        subheading="Let's create something equally impressive together."
        description="Schedule a consultation to discuss your branding or campaign goals."
      />
    </>
  );
}
