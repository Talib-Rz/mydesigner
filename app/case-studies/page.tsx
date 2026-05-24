import type { Metadata } from 'next';
import Hero from '@/components/Hero';
import CaseStudyCard from '@/components/CaseStudyCard';
import CTASection from '@/components/CTASection';
import { caseStudies } from '@/lib/data';

export const metadata: Metadata = {
  title: 'Case Studies - myDesigner',
  description: 'Explore our case studies showcasing successful branding and campaign projects across various industries and segments.',
  keywords: 'case studies, portfolio, branding projects, campaign work',
};

interface CaseStudyDetailProps {
  id: number;
  title: string;
  category: string;
  description: string;
  results: string[];
  challenge: string;
  solution: string;
  impact: string;
}

const caseStudyDetails: CaseStudyDetailProps[] = [
  {
    id: 1,
    title: 'TechCon 2024 Campaign',
    category: 'Event Identity',
    description: 'Complete visual identity system for India\'s largest tech conference with 5000+ attendees.',
    results: ['200% social media engagement increase', 'Unified visual presence across 8 platforms', 'Premium brand perception'],
    challenge: 'Create a distinctive visual identity for a major tech conference that appeals to both industry professionals and college students in a crowded market.',
    solution: 'We developed a modern, tech-forward visual system with a bold color palette and geometric iconography. The design system included social media templates, collateral, merchandise design, and event signage.',
    impact: 'The campaign generated significant buzz, with organic social media reach exceeding expectations by 3x. The visual system was so well-received that it became the benchmark for future events.',
  },
  {
    id: 2,
    title: 'EduStartup Rebranding',
    category: 'Brand Identity',
    description: 'Complete rebrand for an EdTech platform targeting college students with modern, AI-forward visual language.',
    results: ['40% increase in user retention', 'Enhanced brand recognition', 'Improved conversion rates by 35%'],
    challenge: 'The EdTech platform needed a rebrand to better communicate its AI-powered features while appealing to a younger, tech-savvy audience.',
    solution: 'We created a fresh, modern visual identity incorporating gradient elements and clean typography. The design emphasized the AI aspect through subtle motion and futuristic aesthetics, while maintaining approachability for students.',
    impact: 'Post-rebrand, the platform saw improved user engagement, higher conversion rates on sign-ups, and better brand recall among the target demographic.',
  },
  {
    id: 3,
    title: 'Fest Media Campaign',
    category: 'Content & Campaign',
    description: 'Designed comprehensive video and graphic content suite for annual college festival.',
    results: ['1.2M+ video views', 'Peak engagement on all channels', 'Record ticket sales'],
    challenge: 'Create a comprehensive media campaign that generates excitement and drives ticket sales for an annual college festival in a tight timeline.',
    solution: 'We developed a cohesive visual language with custom motion graphics, short-form video content optimized for social media, poster designs, and email campaigns. Each asset was designed for maximum shareability.',
    impact: 'The campaign went viral within the college community, generating organic shares and reaching 1.2M+ views. Festival ticket sales reached an all-time high.',
  },
  {
    id: 4,
    title: 'Real Estate Launch Campaign',
    category: 'Marketing Creative',
    description: 'Premium campaign design for luxury residential project targeting high-net-worth individuals.',
    results: ['Pre-launch interest 3x target', '85% unit sold in first month', 'Featured in 5 leading publications'],
    challenge: 'Launch a luxury residential project with premium positioning to high-net-worth individuals through coordinated visual campaigns.',
    solution: 'We created a sophisticated visual campaign featuring architectural rendering designs, luxury lifestyle photography concepts, premium brochures, and digital marketing assets. The design emphasized exclusivity and lifestyle aspirations.',
    impact: 'The campaign exceeded pre-launch interest targets by 3x. The project was featured in leading architectural and lifestyle publications, establishing premium positioning.',
  },
];

export default function CaseStudiesPage() {
  return (
    <>
      {/* Hero Section */}
      <Hero
        title="Case Studies"
        subtitle="Real projects, real results. Explore how we've helped brands and events succeed through strategic visual design."
        showAnimation={true}
      />

      {/* Case Studies Grid */}
      <section className="section-padding bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16 grid-center">
            {caseStudies.map((study, index) => (
              <CaseStudyCard key={study.id} {...study} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Case Study Section */}
      {caseStudyDetails.map((study, index) => (
        <section
          key={study.id}
          id={`study-${study.id}`}
          className={`section-padding ${index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}
        >
          <div className="max-w-5xl mx-auto">
            <div className="mb-8">
              <span className="inline-block px-4 py-2 bg-primary-100 text-primary-700 rounded-full text-sm font-bold mb-4">
                {study.category}
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                {study.title}
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed">
                {study.description}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 my-12 grid-center">
              {/* Challenge */}
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">The Challenge</h3>
                <p className="text-gray-700 leading-relaxed">{study.challenge}</p>
              </div>

              {/* Solution */}
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Solution</h3>
                <p className="text-gray-700 leading-relaxed">{study.solution}</p>
              </div>
            </div>

            {/* Impact */}
            <div className="bg-gradient-to-r from-primary-50 to-accent/10 rounded-2xl p-8 mb-12 border border-primary-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">The Impact</h3>
              <p className="text-gray-700 leading-relaxed mb-6">{study.impact}</p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 grid-center">
                {study.results.map((result, idx) => (
                  <div key={idx} className="bg-white rounded-lg p-4 border border-primary-100">
                    <p className="text-sm text-gray-600 mb-2">Result {idx + 1}</p>
                    <p className="font-semibold text-gray-900">{result}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* Key Metrics Section */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="section-title text-center mb-12">Our Track Record</h2>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 grid-center">
            {[
              { number: '50+', label: 'Active Clients' },
              { number: '150+', label: 'Projects Delivered' },
              { number: '95%', label: 'Client Satisfaction' },
              { number: '1B+', label: 'Combined Reach' },
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
        heading="Your Project Could Be Next"
        subheading="Let's create something equally impressive together."
        description="Schedule a consultation to discuss your branding or campaign goals."
      />
    </>
  );
}
