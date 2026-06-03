import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Market Segments - myDesigner',
  description: 'We serve three primary segments: Events, Startups & Businesses, and Agencies. Discover if myDesigner is right for your organization.',
  keywords: 'market segments, events, startups, agencies, branding solutions',
};

export default function SegmentsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
