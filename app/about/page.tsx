'use client';

import { motion } from 'framer-motion';
import Hero from '@/components/Hero';
import CTASection from '@/components/CTASection';

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <Hero
        title="More Than Just Design"
        subtitle="We help organizations communicate professionally through branding, content and visual experiences."
        showAnimation={true}
      />

      {/* Mission & Vision Section */}
      <section className="section-padding bg-gradient-to-b from-white via-primary-50/30 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-16">
            {/* Mission */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-8 md:p-10 border border-gray-100 card-shadow hover:shadow-lg transition-shadow"
            >
              <div className="text-6xl mb-6 text-primary-700">🎯</div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Mission</h2>
              <p className="text-base text-gray-600 leading-relaxed mb-4 font-medium">
                To help events, businesses and agencies build trust and credibility through structured, strategic visual systems.
              </p>
              <p className="text-gray-600 leading-relaxed">
                We believe that consistent, well-designed visual communication is essential for success. Whether you're organizing a major event, launching a startup, or running a creative agency, we create cohesive visual experiences that communicate your values clearly and leave lasting impressions.
              </p>
            </motion.div>

            {/* Vision */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-8 md:p-10 border border-gray-100 card-shadow hover:shadow-lg transition-shadow"
            >
              <div className="text-6xl mb-6 text-accent">🚀</div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Vision</h2>
              <p className="text-base text-gray-600 leading-relaxed mb-4 font-medium">
                To become the preferred visual identity and experience partner for events, startups and agencies across India.
              </p>
              <p className="text-gray-600 leading-relaxed">
                We're building a studio where design is deeply strategic, where every visual element serves a purpose, and where our clients' success is our success. We want myDesigner to be synonymous with premium, cohesive visual systems that deliver measurable results.
              </p>
            </motion.div>
          </div>

          {/* Values Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="mt-16 sm:mt-20"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 text-center">Our Core Values</h2>
            <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
              These principles guide every decision we make and shape how we work with our clients
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { icon: '🎯', title: 'Strategic Thinking', description: 'Every design decision is backed by strategy and serves a clear purpose.' },
                { icon: '✓', title: 'Consistency', description: 'We create cohesive visual systems that work seamlessly across all platforms.' },
                { icon: '⏰', title: 'Reliability', description: 'High-quality work delivered on time, every time, without compromise.' },
                { icon: '🤝', title: 'Partnership', description: 'Your success is our success. We align deeply with your vision.' },
                { icon: '⚡', title: 'Execution Excellence', description: 'We deliver polished, production-ready work that exceeds expectations.' },
                { icon: '📈', title: 'Continuous Improvement', description: 'We evolve our craft, embrace new tools, and stay ahead of trends.' },
              ].map((value, idx) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: idx * 0.08 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -8 }}
                  className="p-6 bg-gradient-to-br from-white to-primary-50/30 rounded-xl border border-gray-100 card-shadow hover:shadow-lg transition-all"
                >
                  <div className="text-5xl mb-4">{value.icon}</div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{value.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Why Work With Us */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-12 text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Why Work With Us?</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Six key reasons why leading brands and organizations choose myDesigner
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { number: '01', title: 'Diverse Portfolio', description: 'Experience across events, startups, agencies, and enterprises gives us unique insights into what drives results.' },
              { number: '02', title: 'Strategic Foundation', description: 'We don\'t just design. Every decision is grounded in strategy aligned with your business objectives.' },
              { number: '03', title: 'Speed & Quality', description: 'Fast turnarounds without compromising excellence—we\'re built for the pace of modern business.' },
              { number: '04', title: 'Flexible Engagement', description: 'From one-off projects to ongoing retainers, we adapt our services to match your needs and budget.' },
              { number: '05', title: 'Client Success Focus', description: 'Your wins are our wins. We invest deeply in understanding your brand and delivering measurable results.' },
              { number: '06', title: 'Innovation-Ready', description: 'Latest tools, AI-assisted workflows, and design thinking methodologies keep us ahead of the curve.' },
            ].map((item, idx) => (
              <motion.div
                key={item.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: (idx % 3) * 0.08 }}
                viewport={{ once: true }}
                whileHover={{ y: -8 }}
                className="flex flex-col items-start p-8 bg-gradient-to-br from-white to-primary-50/30 rounded-xl border border-gray-100 card-shadow hover:shadow-lg transition-all"
              >
                <div className="flex items-center justify-center h-14 w-14 rounded-lg bg-gradient-to-br from-primary-600 to-accent text-white text-xl font-bold mb-4">
                  {item.number}
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Founder Section */}
      <section className="section-padding bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Meet The Founder</h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-primary-50 via-white to-accent/10 rounded-2xl p-10 md:p-14 border border-primary-100 card-shadow"
          >
            {/* Profile Image - Top */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mb-8 flex justify-center"
            >
              <div className="w-full max-w-sm">
                <div className="w-full aspect-square rounded-full overflow-hidden border-4 border-primary-200">
                  <img
                    src="/images/team/talib-raza.jpg"
                    alt="Talib Raza"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </motion.div>

            {/* Name & Title - Middle */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-center mb-8"
            >
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-1">Talib Raza</h3>
              <p className="text-primary-600 font-semibold text-base">Founder & Creative Designer</p>
            </motion.div>

            {/* Description & Paragraph - Bottom */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="space-y-4 text-gray-600 leading-relaxed"
            >
            <p>
              With <span className="font-semibold text-gray-900">5+ years of experience</span> in design and creative problem-solving, I've had the opportunity to work across branding, digital products, marketing creatives, and user experiences. Collaborating with businesses, startups, and teams has helped me understand that great design isn't just about looking good—it's about communicating clearly, building trust, and creating meaningful impact.
            </p>

            <p>
              I believe the best designs are the ones that solve problems without making a fuss about it. My focus is on creating <span className="font-semibold text-gray-900">clean, effective, and purpose-driven designs</span> that help brands stand out and connect with the right audience. Every project starts with strategy, grows through creativity, and ends with a solution that works in the real world. Simple. Thoughtful. Effective.
            </p>

            <p>
              Beyond client work, I enjoy exploring new design trends, learning emerging technologies, and constantly refining my craft. I'm always curious about how design can create better experiences and stronger connections between brands and people. When I'm not designing, you'll probably find me discovering creative inspiration, reading about branding and strategy, or exchanging ideas with fellow creatives. <span className="font-semibold text-gray-900"><br /><br />Toh, kuch aisa banaye? jo sirf accha nhi, balki yaad bhi rahe.</span>
            </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Metrics Section */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Track Record</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Proven results across diverse projects, industries, and client segments
            </p>
          </motion.div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-8">
            {[
              { number: '3', label: 'Segments We Specialize In' },
              { number: '10+', label: 'Projects Delivered' },
              { number: '50+', label: 'Creative Assets Produced' },
              { number: '8+', label: 'Organizations Trusted Us' },
            ].map((stat, idx) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary-700 to-accent bg-clip-text text-transparent mb-2">
                  {stat.number}
                </div>
                <p className="text-gray-600 font-medium text-sm md:text-base">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <CTASection
        heading="Let's Create Something Extraordinary Together"
        subheading="Ready to transform your visual communication?"
        description="Whether you're planning an event, launching a startup, or running an agency, we're here to help you communicate with confidence and impact."
        buttonText="Get In Touch"
        buttonHref="/contact"
      />
    </>
  );
}
