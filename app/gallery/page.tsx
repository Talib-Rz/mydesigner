import type { Metadata } from 'next';
import { Suspense } from 'react';
import Hero from '@/components/Hero';
import GalleryClient from '@/components/GalleryClient';

export const metadata: Metadata = {
  title: 'Gallery - myDesigner',
  description: 'Explore our complete portfolio of design work, campaigns, and creative projects.',
  keywords: 'gallery, portfolio, design work, creative portfolio',
};

export default function GalleryPage() {
  return (
    <>
      {/* Hero Section */}
      <Hero
        title="Design Gallery"
        subtitle="Explore our complete collection of design work, campaigns, and creative projects."
        primaryCta={{ label: 'Get In Touch', href: '/contact' }}
        showAnimation={true}
      />

      {/* Gallery Section */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12 text-center">
            <h2 className="section-title mb-4">Our Design Work</h2>
            <p className="section-subtitle max-w-2xl mx-auto">
              A showcase of our latest design projects, creative campaigns, and visual solutions. 
              Scroll through to see videos autoplay and explore our creative range.
            </p>
          </div>

          {/* Dynamic Gallery Grid */}
          <Suspense fallback={<GalleryLoadingSkeleton />}>
            <GalleryClient />
          </Suspense>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-primary-700 to-accent/80">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to create something amazing?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Let's discuss your next project and bring your vision to life with stunning design.
          </p>
          <a
            href="/contact"
            className="inline-block px-8 py-4 bg-white text-primary-700 font-bold rounded-lg hover:bg-gray-100 transition-colors"
          >
            Start Your Project
          </a>
        </div>
      </section>
    </>
  );
}

function GalleryLoadingSkeleton() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 xl:gap-8">
      {Array.from({ length: 9 }).map((_, i) => (
        <div
          key={i}
          className="aspect-square rounded-lg bg-gradient-to-br from-gray-200 to-gray-300 animate-pulse"
        />
      ))}
    </div>
  );
}
