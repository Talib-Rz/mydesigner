import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Solutions',
  description:
    'Explore how myDesigner helps events, startups, businesses, and agencies build stronger visual identities, campaigns, content systems, and memorable experiences.',
};

export default function SolutionsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
