import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Us - myDesigner',
  description: 'Learn about myDesigner\'s mission, values, and how we help events, startups and agencies build trust through visual systems.',
  keywords: 'about us, visual branding, experience partner, design studio',
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
