import type { Metadata } from 'next';
import Hero from '@/components/Hero';
import SegmentCard from '@/components/SegmentCard';
import CTASection from '@/components/CTASection';
import { segments } from '@/lib/data';

export const metadata: Metadata = {
  title: 'Market Segments - myDesigner',
  description: 'Explore the diverse range of B2C and B2B segments we serve with specialized visual branding and campaign solutions.',
  keywords: 'market segments, B2C, B2B, branding solutions',
};

export default function SegmentsPage() {
  const b2cSegments = segments.filter((s) => s.type === 'B2C');
  const b2bSegments = segments.filter((s) => s.type === 'B2B');

  return (
    <>
      {/* Hero Section */}
      <Hero
        title="Market Segments"
        subtitle="We serve a diverse range of clients across B2C and B2B sectors, each with unique visual branding needs."
        showAnimation={true}
      />

      {/* B2C Segments Section */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <h2 className="section-title">B2C: Direct to Consumer</h2>
            <p className="section-subtitle">
              Consumer-focused businesses and events that need bold, modern visual identities to engage their audiences.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 grid-center\">
            {b2cSegments.map((segment, index) => (
              <SegmentCard key={segment.id} {...segment} index={index} />
            ))}
          </div>

          <div className="mt-12 bg-blue-50 rounded-xl border-2 border-blue-200 p-8">
            <h3 className="text-xl font-bold text-blue-900 mb-3">Why B2C Needs Strong Branding</h3>
            <p className="text-blue-800 leading-relaxed">
              Direct consumer engagement requires visual identities that stand out in crowded markets. Whether it's a college fest or an online course platform, your brand needs to capture attention, build trust, and inspire action. We create visual systems that resonate with your target audience and drive engagement.
            </p>
          </div>
        </div>
      </section>

      {/* B2B Segments Section */}
      <section className="section-padding bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <h2 className="section-title">B2B: Business to Business</h2>
            <p className="section-subtitle">
              Agencies, organizations, and companies that need reliable creative partners for client and internal projects.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 grid-center\">
            {b2bSegments.map((segment, index) => (
              <SegmentCard key={segment.id} {...segment} index={index + b2cSegments.length} />
            ))}
          </div>

          <div className="mt-12 bg-purple-50 rounded-xl border-2 border-purple-200 p-8">
            <h3 className="text-xl font-bold text-purple-900 mb-3">B2B Creative Partnerships</h3>
            <p className="text-purple-800 leading-relaxed">
              Agencies, event organizers, and marketing companies need design partners they can trust. Our retainer model and project-based services provide the flexibility and reliability your organization needs. From campaign execution to full brand systems, we deliver consistently excellent work.
            </p>
          </div>
        </div>
      </section>

      {/* Segment Comparison Table */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="section-title mb-12 text-center">Our Segment Expertise</h2>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b-2 border-gray-200">
                  <th className="text-left py-4 px-6 font-bold text-gray-900">Segment</th>
                  <th className="text-left py-4 px-6 font-bold text-gray-900">Typical Projects</th>
                  <th className="text-left py-4 px-6 font-bold text-gray-900">Our Expertise</th>
                </tr>
              </thead>
              <tbody>
                {[
                  {
                    segment: 'College Events',
                    projects: 'Fests, Conferences, Workshops',
                    expertise: 'Student-centric design, viral campaigns, event theming',
                  },
                  {
                    segment: 'Startups',
                    projects: 'Brand identity, product launches, pitch decks',
                    expertise: 'Modern design systems, scalable branding, growth marketing',
                  },
                  {
                    segment: 'EdTech',
                    projects: 'Platform design, course branding, content creation',
                    expertise: 'Educational aesthetics, user engagement, video production',
                  },
                  {
                    segment: 'Real Estate',
                    projects: 'Project launches, luxury branding, marketing collateral',
                    expertise: 'Premium positioning, architectural visualization, luxury design',
                  },
                  {
                    segment: 'Marketing Agencies',
                    projects: 'Client campaigns, retainer work, campaign conceptualization',
                    expertise: 'Fast turnarounds, diverse styles, scalable solutions',
                  },
                  {
                    segment: 'NGOs',
                    projects: 'Brand identity, campaign design, donor materials',
                    expertise: 'Impact-focused design, limited budgets, mission-driven work',
                  },
                ].map((row) => (
                  <tr key={row.segment} className="border-b border-gray-100 hover:bg-gray-50">
                    <td className="py-4 px-6 font-semibold text-gray-900">{row.segment}</td>
                    <td className="py-4 px-6 text-gray-700">{row.projects}</td>
                    <td className="py-4 px-6 text-gray-700">{row.expertise}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection
        heading="Tell Us About Your Project"
        subheading="Whether B2C or B2B, we have the expertise for your segment."
        description="Schedule a consultation to discuss how we can help position your brand or organization for success."
      />
    </>
  );
}
