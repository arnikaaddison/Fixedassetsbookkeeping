/* =====================================================================
   FIXED ASSETS BOOKKEEPING & TAX SOLUTIONS — SITE CONFIGURATION
   Edit the values below to update business info across the whole site.
   This file is loaded by every page (see <script src="site-config.js">).
   ===================================================================== */

const FAB_CONFIG = {

  // ---- Business identity -------------------------------------------
  businessName: "Fixed Assets Bookkeeping & Tax Solutions",
  shortName: "FAB",
  domain: "fixedassetsbookkeeping.com",

  // ---- Contact info (shown in header, footer, contact page) --------
  phone: "205-623-7572",
  phoneHref: "tel:+12056237572",
  email: "info@fixedassetsbookkeeping.com",
  address: {
    line1: "166 Heritage Trace Parkway",
    city: "Montevallo",
    state: "AL",
    zip: "35115"
  },
  hours: "Monday – Friday, 9:00 AM – 5:00 PM CT",

  // ---- THIRD-PARTY INTEGRATIONS --------------------------------------
  // These require real accounts/credentials. Replace placeholders below
  // once each service is set up. Nothing will function until you do.

  // Scheduling — Calendly, GoDaddy Appointments, etc.
  bookingUrl: "#REPLACE-WITH-BOOKING-LINK",

  // Payment processor — QuickBooks Payment Links (per-service, generated
  // individually in your QuickBooks dashboard). One link per package/course.
  paymentLinks: {
    // example: starterPackage: "https://qb.link/REPLACE"
  },

  // Cross-promotion partner site
  addisonCollectiveUrl: "https://theaddisoncollective.com",

  // Email marketing provider (for lead magnets / abandoned cart follow-up)
  // Requires a backend or a third-party form action (e.g. Mailchimp,
  // ConvertKit, Flodesk form endpoint). Front-end alone cannot send email.
  emailMarketingFormAction: "#REPLACE-WITH-FORM-ENDPOINT",

  // Analytics — paste real IDs when ready; site works without them.
  analytics: {
    googleAnalyticsId: "",   // e.g. "G-XXXXXXX"
    metaPixelId: "",         // e.g. "000000000000000"
    googleAdsId: ""
  },

  // ---- Bookkeeping Academy course data --------------------------------
  // Add/edit courses here — course cards on the Academy page read from
  // this list. Prices left blank until supplied; UI hides price if empty.
  courses: [
    {
      id: "jumpstart",
      title: "Bookkeeping Jumpstart",
      description: "A beginner-friendly introduction to bookkeeping fundamentals.",
      price: "",
      buyLink: "#REPLACE-WITH-PAYMENT-LINK"
    },
    {
      id: "level-1",
      title: "Level 1",
      description: "Foundational bookkeeping skills for real client work.",
      price: "",
      buyLink: "#REPLACE-WITH-PAYMENT-LINK"
    },
    {
      id: "level-2",
      title: "Level 2",
      description: "Intermediate bookkeeping and day-to-day workflows.",
      price: "",
      buyLink: "#REPLACE-WITH-PAYMENT-LINK"
    },
    {
      id: "level-3",
      title: "Level 3",
      description: "Advanced client work and financial processes.",
      price: "",
      buyLink: "#REPLACE-WITH-PAYMENT-LINK"
    },
    {
      id: "level-4",
      title: "Level 4",
      description: "Advanced, professional-level training and business growth.",
      price: "",
      buyLink: "#REPLACE-WITH-PAYMENT-LINK"
    }
  ]
};
