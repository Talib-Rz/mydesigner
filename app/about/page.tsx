import type { Metadata } from 'next';
import Hero from '@/components/Hero';
import CTASection from '@/components/CTASection';

export const metadata: Metadata = {
  title: 'About Us - myDesigner',
  description: 'Learn about myDesigner\'s mission, values, and the team behind India\'s leading visual branding and campaign studio.',
  keywords: 'about us, team, mission, vision, values',
};

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <Hero
        title="About myDesigner"
        subtitle="A premium visual branding and campaign studio dedicated to creating bold, structured designs that position brands for success."
        showAnimation={true}
      />

      {/* Mission & Vision Section */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-16 mb-16 sm:mb-20">
            {/* Mission */}
            <div>
              <div className="text-5xl mb-6">🎯</div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Mission</h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-4">
                To empower brands and organizations through structured, premium visual design. We believe every brand deserves a cohesive visual identity that communicates its values and resonates with its audience.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Whether you're organizing a college event, launching a startup, or managing a marketing campaign, we create visual systems that stand out, build trust, and drive results.
              </p>
            </div>

            {/* Vision */}
            <div>
              <div className="text-5xl mb-6">🚀</div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Vision</h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-4">
                To become India's most trusted visual branding and campaign studio, known for strategic creativity and consistent excellence across all project types.
              </p>
              <p className="text-gray-600 leading-relaxed">
                We're building a studio where design is deeply strategic, where every visual element serves a purpose, and where our clients' success is our success. We want myDesigner to be synonymous with premium, structured visual design.
              </p>
            </div>
          </div>

          {/* Values */}
          <div className="bg-gradient-to-br from-primary-50 to-accent/5 rounded-2xl p-12 border border-primary-100">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Our Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  icon: '💎',
                  title: 'Excellence',
                  description: 'We pursue excellence in every project, every detail, every interaction with our clients.',
                },
                {
                  icon: '🎯',
                  title: 'Strategy First',
                  description: 'Beautiful design without strategy is just decoration. We design with purpose and intent.',
                },
                {
                  icon: '⚡',
                  title: 'Innovation',
                  description: 'We stay ahead of design trends and embrace new tools to deliver cutting-edge solutions.',
                },
                {
                  icon: '🤝',
                  title: 'Collaboration',
                  description: 'Your success is our success. We work closely with you to understand and exceed your expectations.',
                },
                {
                  icon: '⏰',
                  title: 'Reliability',
                  description: 'We deliver high-quality work on time, every time. You can count on us to show up.',
                },
                {
                  icon: '🌟',
                  title: 'Impact Focus',
                  description: 'Every design decision is made to create measurable impact for your brand or organization.',
                },
              ].map((value) => (
                <div key={value.title} className="text-center">
                  <div className="text-4xl mb-4">{value.icon}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="section-padding bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="section-title text-center mb-12">Why Work With Us?</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            {[
              {
                number: '01',
                title: 'Diverse Experience',
                description: 'We\'ve worked across B2C and B2B segments, from college events to enterprise brands. This diverse portfolio gives us unique insights into what works.',
              },
              {
                number: '02',
                title: 'Strategic Thinking',
                description: 'We don\'t just create pretty designs. Every visual decision is grounded in strategy and designed to achieve your specific objectives.',
              },
              {
                number: '03',
                title: 'Fast Turnarounds',
                description: 'In the fast-paced world of events and campaigns, speed matters. We\'re equipped to deliver high-quality work quickly without compromising excellence.',
              },
              {
                number: '04',
                title: 'Scalable Solutions',
                description: 'Whether you need a single project or ongoing retainer support, we have flexible engagement models that grow with your needs.',
              },
              {
                number: '05',
                title: 'Client-Centric',
                description: 'Your success is our metric. We take time to understand your brand, your audience, and your goals, then design accordingly.',
              },
              {
                number: '06',
                title: 'Modern Tools & Techniques',
                description: 'We leverage the latest design tools, AI-assisted workflows, and design thinking methodologies to deliver forward-thinking solutions.',
              },
            ].map((item) => (
              <div key={item.number} className="flex gap-8">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-16 w-16 rounded-lg bg-gradient-to-br from-primary-700 to-accent text-white text-2xl font-bold">
                    {item.number}
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Founder Section */}
      <section className="section-padding bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="section-title text-center mb-4">Meet The Founder</h2>

          <p className="section-subtitle text-center mb-12">
            Passionate about creating meaningful designs that help brands communicate,
            connect, and grow.
          </p>

          <div className="max-w-3xl mx-auto">
            <div className="bg-gradient-to-br from-primary-50 to-accent/10 rounded-2xl p-10 md:p-12 border border-primary-100 shadow-sm">
              
              <div className="text-center mb-8">
                <div className="w-40 h-40 rounded-full mx-auto mb-6 overflow-hidden">
                  <img
                    src="/images/team/talib-raza.jpg"
                    alt="Talib Raza"
                    className="w-full h-full object-cover"
                  />
                </div>

                <h3 className="text-3xl font-bold text-gray-900 mb-2">
                  Talib Raza
                </h3>

                <p className="text-primary-700 font-semibold text-lg">
                  Founder & Creative Designer
                </p>
              </div>
              <div className="max-w-2xl mx-auto text-gray-600 leading-8 text-center space-y-5">
                <p>
                  With over 5 years of experience in design and creative problem-solving,
                  projects have been delivered across branding, digital products,
                  marketing creatives, and user experiences. Working closely with clients
                  and leading teams has built a strong understanding of how thoughtful
                  design helps businesses communicate clearly and establish a lasting
                  presence.
                </p>

                <p>
                  The focus is on creating clean, effective, and purpose-driven designs
                  that balance aesthetics with functionality. Every project is approached
                  with attention to detail, collaboration, and a commitment to delivering
                  work that not only looks great but also supports meaningful business
                  goals.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-12 bg-blue-50 rounded-xl border-2 border-blue-200 p-8 text-center">
            <p className="text-lg text-blue-900">
              Every project is approached with creativity, precision, and a
              commitment to delivering meaningful results that help businesses grow
              and connect with their audience.
            </p>
          </div>
        </div>
      </section>

      {/* AI-Forward Workflow Section */}
      <section className="section-padding bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="section-title mb-4">AI-Enhanced Workflow</h2>
          <p className="section-subtitle mb-12">
            We leverage modern AI tools to enhance our creative process while maintaining the human touch that makes design exceptional.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">How We Use AI</h3>
              <ul className="space-y-4">
                {[
                  'Rapid concept ideation and mood board creation',
                  'Design system automation and consistency checks',
                  'Color palette generation and accessibility verification',
                  'Content optimization and copywriting support',
                  'Trend analysis and market research',
                  'Design refinement and quality assurance',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-gray-700">
                    <span className="text-accent font-bold mt-1">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white rounded-xl p-8 border border-gray-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Why This Matters</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                AI tools help us work faster and smarter, not replacing our creativity but amplifying it. We spend less time on repetitive tasks and more time on strategic thinking and originality.
              </p>
              <p className="text-gray-600 leading-relaxed">
                The result? Higher quality work delivered faster, better design decisions informed by data, and more time for the creative exploration that makes design truly exceptional.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="section-title mb-4">Metrics</h2>
            <p className="section-subtitle">
              A snapshot of experience, impact, and the results delivered over the years.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
            {[
              { number: '5+', label: 'Years of Experience' },
              { number: '150+', label: 'Projects Delivered' },
              { number: '50+', label: 'Happy Clients' },
              { number: '95%', label: 'Client Satisfaction' },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary-700 to-accent bg-clip-text text-transparent mb-2">
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
        heading="Let's Work Together"
        subheading="We'd love to learn about your project and how we can help."
        description="Get in touch with us to discuss your branding or campaign needs. We're always excited about new projects and new challenges."
      />
    </>
  );
}
