/**
 * Google Analytics 4 Component
 * 
 * This component initializes Google Analytics 4 for the entire application.
 * It uses Next.js Script component for optimal performance and automatically
 * tracks page views on route changes in the App Router.
 * 
 * The Measurement ID is loaded from the environment variable:
 * NEXT_PUBLIC_GA_MEASUREMENT_ID
 * 
 * Features:
 * - Loads GA4 script asynchronously
 * - Automatic page view tracking on navigation
 * - Works with Next.js 14 App Router
 * - Prevents double-loading of GA scripts
 * - Production-ready and Vercel-compatible
 */

'use client';

import Script from 'next/script';
import { useEffect } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';
import { trackPageView } from '@/lib/analytics';

export default function GoogleAnalytics() {
  // Get the GA Measurement ID from environment variables
  const measurementId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;

  // Get current pathname and search params for page view tracking
  const pathname = usePathname();
  const searchParams = useSearchParams();

  /**
   * Track page views whenever the route changes
   * This is specific to Next.js App Router navigation
   * 
   * useEffect with pathname and searchParams dependency ensures tracking
   * happens when users navigate between pages
   */
  useEffect(() => {
    // Only track if measurement ID is configured
    if (!measurementId) {
      console.warn(
        'Google Analytics: NEXT_PUBLIC_GA_MEASUREMENT_ID environment variable is not set. Analytics tracking is disabled.'
      );
      return;
    }

    // Construct the full URL including search params for accurate tracking
    const url = new URL(pathname, window.location.origin);
    
    if (searchParams) {
      url.search = searchParams.toString();
    }

    /**
     * Call the analytics utility to track the page view
     * This sends a 'config' event to GA4 with the new page information
     */
    trackPageView({
      page_title: document.title,
      page_path: pathname,
      page_location: url.toString(),
    });
  }, [pathname, searchParams, measurementId]);

  // Don't render anything if measurement ID is not configured
  if (!measurementId) {
    return null;
  }

  return (
    <>
      {/* 
        GA4 Script - Main tracking script
        
        Strategy: "afterInteractive" ensures the script loads after the page
        becomes interactive, preventing it from blocking page load.
        
        This script initializes the gtag object that our analytics.ts utility
        functions use for tracking.
      */}
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${measurementId}`}
        strategy="afterInteractive"
        async
      />

      {/* 
        GA4 Configuration Script
        
        This inline script configures gtag and initializes analytics for your
        Measurement ID. It sets up the gtag function that all our tracking
        functions use (window.gtag).
        
        Configuration options:
        - anonymize_ip: true - Anonymizes user IP addresses for privacy
        - allow_google_signals: true - Enables remarketing and advertising features
        - allow_ad_personalization_signals: true - Allows personalized ads
      */}
      <Script
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            
            // Initialize gtag with your Measurement ID
            gtag('config', '${measurementId}', {
              // Anonymize IP for privacy compliance (GDPR, etc.)
              'anonymize_ip': true,
              // Allow Google signals for cross-device tracking
              'allow_google_signals': true,
              // Allow personalization signals for remarketing
              'allow_ad_personalization_signals': true,
              // Custom user ID (optional - set from your app if needed)
              // 'user_id': 'user_id_value',
            });
          `,
        }}
      />
    </>
  );
}
