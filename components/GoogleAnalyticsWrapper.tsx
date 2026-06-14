/**
 * Google Analytics Wrapper with Suspense Boundary
 * 
 * This wrapper component is necessary because useSearchParams() from next/navigation
 * requires a Suspense boundary to work correctly during static generation in Next.js 14.
 * 
 * The GoogleAnalytics component is wrapped here to prevent build-time errors.
 */

'use client';

import { Suspense } from 'react';
import GoogleAnalytics from './GoogleAnalytics';

/**
 * Fallback component shown while analytics loads
 * Minimal to not impact performance
 */
function GoogleAnalyticsFallback() {
  return null;
}

/**
 * GoogleAnalyticsWrapper
 * 
 * Provides a Suspense boundary for the GoogleAnalytics component.
 * This allows useSearchParams() to work correctly during both
 * static generation and runtime.
 */
export default function GoogleAnalyticsWrapper() {
  return (
    <Suspense fallback={<GoogleAnalyticsFallback />}>
      <GoogleAnalytics />
    </Suspense>
  );
}
