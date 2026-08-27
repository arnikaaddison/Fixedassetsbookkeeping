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
  // No exact street address is published on the site by design (privacy/safety
  // decision). Service area is shown instead of a physical address or map pin.
  serviceArea: "Montevallo, AL and surrounding areas — clients served remotely nationwide",
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
  // this list. Checkout happens on The Addison Collective, since this
  // site can't process payments directly. Once each course has its own
  // product page there, replace the buyLink placeholder below with the
  // real product URL for that specific course.
  courses: [
    {
      id: "jumpstart",
      title: "Bookkeeping Jumpstart",
      tagline: "Start here if bookkeeping is brand new to you.",
      whoFor: "Complete beginners, and business owners who want to understand their own books rather than hire it out just yet.",
      modules: [
        "Core bookkeeping terms: assets, liabilities, equity, income, expenses",
        "Understanding debits and credits without the confusion",
        "Setting up a basic chart of accounts",
        "Navigating QuickBooks: the essentials",
        "Reading a simple Profit & Loss statement",
        "Common beginner mistakes and how to avoid them"
      ],
      price: "",
      buyLink: "https://theaddisoncollective.com"
    },
    {
      id: "level-1",
      title: "Level 1",
      tagline: "Foundational skills for real client work.",
      whoFor: "Aspiring bookkeepers ready to move from theory into doing the work for real.",
      modules: [
        "Categorizing transactions correctly the first time",
        "Bank and credit card reconciliation, step by step",
        "Accounts receivable and accounts payable basics",
        "Month-end close checklist",
        "Setting up a new client's QuickBooks file",
        "What to do when the bank feed doesn't match"
      ],
      price: "",
      buyLink: "https://theaddisoncollective.com"
    },
    {
      id: "level-2",
      title: "Level 2",
      tagline: "Intermediate bookkeeping and day-to-day workflows.",
      whoFor: "Bookkeepers with Level 1 skills ready to manage multiple clients and more complex transactions.",
      modules: [
        "Managing workflow across multiple client files",
        "Handling loans, owner draws, and equity transactions",
        "Payroll basics and how it hits the books",
        "Interpreting financial statements for clients",
        "Client communication: explaining numbers in plain language",
        "Building a monthly close routine that scales"
      ],
      price: "",
      buyLink: "https://theaddisoncollective.com"
    },
    {
      id: "level-3",
      title: "Level 3",
      tagline: "Advanced client work and financial processes.",
      whoFor: "Bookkeepers ready to take on cleanup projects and more complex or industry-specific clients.",
      modules: [
        "Running catch-up and cleanup projects from start to finish",
        "Industry-specific bookkeeping: contractors, service businesses, e-commerce",
        "Advanced QuickBooks features: classes, tags, and custom reports",
        "Financial reporting that supports real business decisions",
        "Working alongside a client's tax preparer",
        "Spotting and correcting prior bookkeeping errors"
      ],
      price: "",
      buyLink: "https://theaddisoncollective.com"
    },
    {
      id: "level-4",
      title: "Level 4",
      tagline: "Advanced, professional-level training and business growth.",
      whoFor: "Bookkeepers ready to build or scale their own practice, not just do the technical work.",
      modules: [
        "Pricing your services with confidence",
        "Finding and qualifying the right clients",
        "Systems and processes for running a bookkeeping business",
        "Building referral relationships with tax professionals",
        "Deciding when and how to bring on help",
        "Positioning yourself for long-term, recurring income"
      ],
      price: "",
      buyLink: "https://theaddisoncollective.com"
    }
  ]
};
