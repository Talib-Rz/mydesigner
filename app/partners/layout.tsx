import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Become an Execution Partner - myDesigner',
  description:
    'Join the myDesigner Partner Network. Help brands, businesses and events bring great design to life through quality execution.',
};

export default function PartnersLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
