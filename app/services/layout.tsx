import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Services - myDesigner',
  description: 'Explore our four core service pillars: Brand Identity Systems, Campaign Systems, Content & Media Design, and Creative Retainer Support.',
  keywords: 'design services, branding, campaign design, graphic design',
};

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
