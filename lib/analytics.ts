/**
 * Google Analytics 4 Tracking Utilities
 * 
 * This module provides a comprehensive set of functions for tracking user interactions
 * across the myDesigner website using Google Analytics 4.
 * 
 * All tracking functions use the gtag.event() method which is automatically loaded
 * by the GoogleAnalytics component in the root layout.
 * 
 * Environment Variable Required:
 * - NEXT_PUBLIC_GA_MEASUREMENT_ID: Your GA4 Measurement ID (e.g., G-XXXXXXXXXX)
 */

/**
 * Interface for page view tracking parameters
 * Used to standardize page view event data
 */
interface PageViewParams {
  page_title?: string;
  page_path?: string;
  page_location?: string;
}

/**
 * Interface for custom event parameters
 * Used for tracking user interactions like clicks, form submissions, etc.
 */
interface CustomEventParams {
  [key: string]: string | number | boolean | undefined;
}

/**
 * Track page views automatically via App Router
 * This is called automatically by GoogleAnalytics component
 * 
 * @param params - Page view parameters (title, path, location)
 * 
 * @example
 * trackPageView({
 *   page_title: 'Services Page',
 *   page_path: '/services',
 * });
 */
export const trackPageView = (params: PageViewParams = {}): void => {
  if (typeof window === 'undefined') return;

  window.gtag?.('config', process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || '', {
    page_title: params.page_title || document.title,
    page_path: params.page_path || window.location.pathname,
    page_location: params.page_location || window.location.href,
  });
};

/**
 * Track WhatsApp button clicks
 * Fires when user clicks the WhatsApp floating button or WhatsApp links
 * 
 * @param phoneNumber - The phone number being contacted (optional, for reference)
 * @param source - Where the WhatsApp click originated (e.g., 'floating_button', 'contact_page', 'footer')
 * 
 * @example
 * trackWhatsAppClick('918252348421', 'floating_button');
 * trackWhatsAppClick('918252348421', 'contact_page');
 */
export const trackWhatsAppClick = (
  phoneNumber?: string,
  source: string = 'whatsapp_button'
): void => {
  if (typeof window === 'undefined') return;

  window.gtag?.('event', 'whatsapp_click', {
    event_category: 'engagement',
    event_label: source,
    phone_number: phoneNumber || 'not_provided',
    timestamp: new Date().toISOString(),
  });
};

/**
 * Track contact form submission
 * Fires when the contact form is successfully submitted
 * 
 * @param formData - The form data submitted (optional, use only non-sensitive data)
 * @param projectType - The type of project selected in the form
 * 
 * @example
 * trackContactFormSubmission({
 *   name: 'John Doe',
 *   email: 'john@example.com',
 *   company: 'Acme Corp'
 * }, 'branding');
 */
export const trackContactFormSubmission = (
  formData?: Record<string, string>,
  projectType?: string
): void => {
  if (typeof window === 'undefined') return;

  window.gtag?.('event', 'form_submit', {
    event_category: 'conversion',
    event_label: 'contact_form',
    project_type: projectType || 'not_specified',
    form_fields: Object.keys(formData || {}).join(','),
    timestamp: new Date().toISOString(),
  });
};

/**
 * Track phone call button clicks
 * Fires when user clicks on phone number to initiate a call
 * 
 * @param phoneNumber - The phone number being called
 * @param source - Where the phone click originated (e.g., 'contact_page', 'footer', 'header')
 * 
 * @example
 * trackPhoneCallClick('+918252348421', 'contact_page');
 */
export const trackPhoneCallClick = (
  phoneNumber: string,
  source: string = 'phone_link'
): void => {
  if (typeof window === 'undefined') return;

  window.gtag?.('event', 'phone_call', {
    event_category: 'engagement',
    event_label: source,
    phone_number: phoneNumber,
    timestamp: new Date().toISOString(),
  });
};

/**
 * Track service card clicks/interactions
 * Fires when user interacts with a service card (hover, click, etc.)
 * 
 * @param serviceName - The name of the service card clicked
 * @param serviceCategory - Category of the service (e.g., 'b2c', 'b2b', 'brand_identity')
 * @param index - Position of the card in the list (for ranking purposes)
 * 
 * @example
 * trackServiceCardClick('Logo Design', 'brand_identity', 0);
 * trackServiceCardClick('Event Branding', 'b2c', 2);
 */
export const trackServiceCardClick = (
  serviceName: string,
  serviceCategory?: string,
  index?: number
): void => {
  if (typeof window === 'undefined') return;

  window.gtag?.('event', 'service_card_click', {
    event_category: 'engagement',
    event_label: serviceName,
    service_category: serviceCategory || 'general',
    card_index: index !== undefined ? index : 0,
    timestamp: new Date().toISOString(),
  });
};

/**
 * Track feedback form submission
 * Fires when user submits feedback through the feedback form
 * 
 * @param rating - User's rating/satisfaction level (1-5 or similar)
 * @param feedbackType - Type of feedback (e.g., 'positive', 'negative', 'suggestion')
 * 
 * @example
 * trackFeedbackSubmission(5, 'positive');
 * trackFeedbackSubmission(3, 'suggestion');
 */
export const trackFeedbackSubmission = (
  rating?: string | number,
  feedbackType?: string
): void => {
  if (typeof window === 'undefined') return;

  window.gtag?.('event', 'feedback_submit', {
    event_category: 'conversion',
    event_label: feedbackType || 'feedback',
    rating: rating || 'not_provided',
    timestamp: new Date().toISOString(),
  });
};

/**
 * Track portfolio/gallery item clicks
 * Fires when user clicks on or views a gallery/portfolio item
 * 
 * @param itemName - The name or title of the gallery item
 * @param itemCategory - The category of the item (e.g., 'brochure', 'certificate', 'poster', 'logo')
 * @param itemId - Unique identifier for the item (optional)
 * 
 * @example
 * trackGalleryClick('Spring Festival Brochure', 'brochure', 'item_001');
 * trackGalleryClick('Company Certificate Design', 'certificate', 'cert_2024_001');
 */
export const trackGalleryClick = (
  itemName: string,
  itemCategory?: string,
  itemId?: string
): void => {
  if (typeof window === 'undefined') return;

  window.gtag?.('event', 'gallery_item_click', {
    event_category: 'engagement',
    event_label: itemName,
    item_category: itemCategory || 'general',
    item_id: itemId || 'not_provided',
    timestamp: new Date().toISOString(),
  });
};

/**
 * Track portfolio/case study clicks
 * Fires when user clicks on case studies or portfolio items
 * 
 * @param caseStudyTitle - Title of the case study
 * @param companyName - Company or client name
 * @param industryType - Industry type (e.g., 'saas', 'ecommerce', 'education')
 * 
 * @example
 * trackCaseStudyClick('Event Marketing Campaign', 'Tech Summit 2024', 'conference');
 */
export const trackCaseStudyClick = (
  caseStudyTitle: string,
  companyName?: string,
  industryType?: string
): void => {
  if (typeof window === 'undefined') return;

  window.gtag?.('event', 'case_study_click', {
    event_category: 'engagement',
    event_label: caseStudyTitle,
    company_name: companyName || 'not_provided',
    industry_type: industryType || 'general',
    timestamp: new Date().toISOString(),
  });
};

/**
 * Track navigation/menu clicks
 * Fires when user navigates using the main navigation menu
 * 
 * @param destination - The page or section being navigated to
 * @param menuType - Type of menu (e.g., 'navbar', 'footer', 'mobile_menu')
 * 
 * @example
 * trackNavigation('/services', 'navbar');
 * trackNavigation('/gallery', 'mobile_menu');
 */
export const trackNavigation = (
  destination: string,
  menuType: string = 'navbar'
): void => {
  if (typeof window === 'undefined') return;

  window.gtag?.('event', 'page_navigate', {
    event_category: 'navigation',
    event_label: destination,
    menu_type: menuType,
    timestamp: new Date().toISOString(),
  });
};

/**
 * Track partner application/inquiry
 * Fires when user submits a partner inquiry or application
 * 
 * @param partnerType - Type of partnership (e.g., 'event_organizer', 'marketing_agency', 'ngo')
 * @param businessName - Name of the business applying (optional)
 * 
 * @example
 * trackPartnerApplicationClick('event_organizer', 'ABC Events Pvt Ltd');
 */
export const trackPartnerApplicationClick = (
  partnerType: string,
  businessName?: string
): void => {
  if (typeof window === 'undefined') return;

  window.gtag?.('event', 'partner_application', {
    event_category: 'conversion',
    event_label: partnerType,
    business_name: businessName || 'not_provided',
    timestamp: new Date().toISOString(),
  });
};

/**
 * Track brochure/resource downloads
 * Fires when user downloads a brochure or resource
 * 
 * @param resourceName - Name of the resource/brochure
 * @param resourceType - Type (e.g., 'brochure', 'guide', 'whitepaper', 'template')
 * @param downloadFormat - File format (e.g., 'pdf', 'doc', 'zip')
 * 
 * @example
 * trackResourceDownload('Portfolio Brochure', 'brochure', 'pdf');
 */
export const trackResourceDownload = (
  resourceName: string,
  resourceType: string = 'brochure',
  downloadFormat: string = 'pdf'
): void => {
  if (typeof window === 'undefined') return;

  window.gtag?.('event', 'file_download', {
    event_category: 'engagement',
    event_label: resourceName,
    file_type: resourceType,
    file_format: downloadFormat,
    timestamp: new Date().toISOString(),
  });
};

/**
 * Track generic custom events
 * Use this for tracking events not covered by the specific functions above
 * 
 * @param eventName - The name of the event
 * @param eventCategory - Category classification
 * @param params - Additional custom parameters
 * 
 * @example
 * trackCustomEvent('video_play', 'engagement', {
 *   video_title: 'Portfolio Video',
 *   video_duration: 120
 * });
 */
export const trackCustomEvent = (
  eventName: string,
  eventCategory: string = 'custom',
  params: CustomEventParams = {}
): void => {
  if (typeof window === 'undefined') return;

  window.gtag?.('event', eventName, {
    event_category: eventCategory,
    ...params,
    timestamp: new Date().toISOString(),
  });
};

/**
 * Type augmentation for window object to include gtag function
 * This allows TypeScript to recognize gtag without errors
 */
declare global {
  interface Window {
    gtag?: (
      command: string,
      action: string,
      params?: Record<string, unknown>
    ) => void;
  }
}
