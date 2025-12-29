export interface LegalSection {
  title: string;
  content?: string;
  subsections?: Array<{
    title: string;
    content: string;
    items?: string[];
  }>;
  items?: string[];
}

export interface ContactInfo {
  email: string;
  phone: string;
  address: string;
}

export const privacyPolicyContent: LegalSection[] = [
  {
    title: "1. Introduction",
    content:
      'Borzi ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website and use our AI-powered pet healthcare platform. By using our website, you consent to the practices described in this policy.',
  },
  {
    title: "2. Information We Collect",
    content:
      "We collect various types of information to provide and improve our services:",
    subsections: [
      {
        title: "2.1 Information You Provide",
        content:
          "When you interact with our website, you may voluntarily provide:",
        items: [
          "Contact information (name, email, phone number) through forms",
          "Waitlist signup information",
          "Communication preferences for updates and newsletters",
          "Feedback and inquiries submitted through contact forms",
        ],
      },
      {
        title: "2.2 Automatically Collected Information",
        content:
          "We automatically collect certain information when you visit our website:",
        items: [
          "Device information (IP address, browser type, operating system)",
          "Usage data (pages visited, time spent, click patterns, referral sources)",
          "Cookie data and local storage information",
          "Location data (approximate, based on IP address)",
          "Performance metrics and error logs",
        ],
      },
      {
        title: "2.3 Platform Application Data",
        content:
          "When you sign up and use our full platform, we additionally collect:",
        items: [
          "Pet information (name, species, breed, age, weight, photos)",
          "Pet medical history, vaccination records, and health conditions",
          "Daily health logs (eating, drinking, activity, sleep patterns)",
          "Veterinary appointment details and preferences",
          "AI health monitoring data and insights",
          "Telemedicine consultation records (with consent)",
          "Home visit service addresses",
        ],
      },
    ],
  },
  {
    title: "3. How We Use Your Information",
    content: "We use the collected information for the following purposes:",
    items: [
      "Providing and maintaining our website and platform services",
      "Processing waitlist signups and communications",
      "Delivering AI-powered health monitoring and veterinary services",
      "Personalizing your experience with breed-specific insights",
      "Sending service updates, newsletters, and promotional content (with consent)",
      "Improving our website, services, and AI algorithms",
      "Analyzing usage patterns and user behavior through analytics",
      "Ensuring platform security and preventing fraud",
      "Complying with legal obligations and veterinary regulations",
      "Responding to customer support inquiries",
    ],
  },
  {
    title: "4. Cookies and Tracking Technologies",
    content:
      "We use cookies and similar tracking technologies to enhance your browsing experience and analyze usage patterns:",
    subsections: [
      {
        title: "4.1 Types of Cookies We Use",
        content:
          "We use cookies and similar tracking technologies to enhance your experience:",
        items: [
          "Essential cookies: Required for basic website functionality",
          "Analytics cookies: Google Analytics and Firebase Analytics to understand usage patterns",
          "Preference cookies: Remember your settings and language preferences",
          "Marketing cookies: Track effectiveness of advertising campaigns (with consent)",
        ],
      },
      {
        title: "4.2 Managing Cookies",
        content:
          "You can control cookies through your browser settings. Note that disabling certain cookies may limit website functionality. Most browsers accept cookies automatically, but you can modify your settings to decline cookies or alert you when cookies are being sent.",
      },
    ],
  },
  {
    title: "5. Information Sharing and Disclosure",
    content: "We may share your information in the following circumstances:",
    subsections: [
      {
        title: "5.1 Veterinary Professionals",
        content:
          "When you use our platform services, we share necessary information with veterinary professionals to provide care:",
        items: [
          "Licensed veterinarians for telemedicine consultations",
          "Clinic staff for appointment scheduling and management",
          "Home visit veterinarians for in-home services",
        ],
      },
      {
        title: "5.2 Service Providers",
        content:
          "We may share information with trusted third-party service providers:",
        items: [
          "Cloud hosting services (for infrastructure)",
          "Analytics providers (Google Analytics, Firebase)",
          "Email communication services (for newsletters and updates)",
          "AI and machine learning services (OpenAI for health insights)",
          "Payment processors (when applicable)",
          "Customer support tools",
        ],
      },
      {
        title: "5.3 Legal Requirements",
        content: "We may disclose your information when required by law or to:",
        items: [
          "Comply with legal processes, subpoenas, or government requests",
          "Protect our rights, property, or safety and that of our users",
          "Investigate potential violations of our terms of service",
          "Respond to veterinary regulatory requirements",
        ],
      },
      {
        title: "5.4 Business Transfers",
        content:
          "In the event of a merger, acquisition, or sale of assets, your information may be transferred to the acquiring entity. We will notify you of any such change via email or prominent notice on our website.",
      },
    ],
  },
  {
    title: "6. Data Security",
    content:
      "We implement appropriate technical and organizational security measures to protect your information:",
    items: [
      "Encryption of data in transit (TLS/SSL) and at rest",
      "Secure authentication with password hashing",
      "Role-based access controls for staff and administrators",
      "Regular security assessments and vulnerability testing",
      "Employee training on data protection and confidentiality",
      "Incident response and breach notification procedures",
      "Secure cloud infrastructure with redundancy and backups",
    ],
  },
  {
    title: "7. AI and Machine Learning Privacy",
    content:
      "Our AI-powered health monitoring services are designed with privacy in mind:",
    items: [
      "AI recommendations are for informational purposes only, not medical diagnoses",
      "Data anonymization for AI model training and improvement",
      "User consent required before accessing AI-powered features",
      "Transparency about AI decision-making and recommendations",
      "Regular AI model privacy and bias assessments",
      "Breed-specific data aggregation without identifying individual pets",
      "Users can opt-out of AI features while maintaining core services",
    ],
  },
  {
    title: "8. Your Privacy Rights",
    content: "Depending on your location, you may have the following rights:",
    items: [
      "Access: Request a copy of your personal information",
      "Correction: Request correction of inaccurate or incomplete data",
      "Deletion: Request deletion of your personal information (subject to legal obligations)",
      "Objection: Object to certain processing activities",
      "Portability: Request transfer of your data to another service",
      "Consent Withdrawal: Withdraw consent for specific processing activities",
      "Opt-Out: Unsubscribe from marketing communications at any time",
      "Cookie Management: Control cookie preferences through browser settings",
    ],
  },
  {
    title: "9. Data Retention",
    content: "We retain your information for as long as necessary to:",
    items: [
      "Provide our services and maintain your account",
      "Comply with veterinary record retention requirements (typically 3-7 years)",
      "Meet legal and regulatory obligations",
      "Resolve disputes and enforce agreements",
      "Improve our services and AI capabilities",
    ],
  },
  {
    title: "10. Children's Privacy",
    content:
      "Our Service is not intended for children under 13 years of age. We do not knowingly collect personal information from children under 13. If you are a parent or guardian and believe your child has provided us with personal information, please contact us immediately, and we will take steps to delete such information from our systems.",
  },
  {
    title: "11. International Data Transfers",
    content:
      "Your information may be transferred to and processed in countries other than your own, including the United States. We ensure appropriate safeguards are in place to protect your information in accordance with this Privacy Policy and applicable data protection laws, including GDPR for European users and adequate protection mechanisms.",
  },
  {
    title: "12. California Privacy Rights (CCPA)",
    content:
      "If you are a California resident, you have additional rights under the California Consumer Privacy Act (CCPA):",
    items: [
      "Right to know what personal information is collected, used, and shared",
      "Right to delete personal information (subject to exceptions)",
      "Right to opt-out of the sale of personal information (we do not sell your data)",
      "Right to non-discrimination for exercising your CCPA rights",
      "Right to limit use and disclosure of sensitive personal information",
    ],
  },
  {
    title: "13. European Privacy Rights (GDPR)",
    content:
      "If you are located in the European Economic Area (EEA) or United Kingdom, you have rights under the General Data Protection Regulation (GDPR). We process your data based on:",
    items: [
      "Consent: You have given clear consent for processing",
      "Contract: Processing is necessary for service delivery",
      "Legal obligation: Required by law",
      "Legitimate interests: For our business operations (where appropriate)",
    ],
  },
  {
    title: "14. Third-Party Links",
    content:
      "Our website may contain links to third-party websites, including social media platforms (Instagram, TikTok) and veterinary clinic websites. We are not responsible for the privacy practices of these third parties. We encourage you to review their privacy policies before providing any personal information.",
  },
  {
    title: "15. Changes to This Privacy Policy",
    content:
      "We may update this Privacy Policy from time to time to reflect changes in our practices, technology, or legal requirements. We will notify you of any material changes by:",
    items: [
      "Posting the updated Privacy Policy on this page",
      'Updating the "Last Updated" date at the top',
      "Sending email notifications for significant changes (when applicable)",
      "Providing prominent notice on our website or app",
    ],
  },
  {
    title: "16. Contact Us",
    content:
      "If you have any questions about this Privacy Policy, want to exercise your privacy rights, or have concerns about how we handle your information, please contact us:",
  },
];

export const contactInfo: ContactInfo = {
  email: "privacy@borzi.app",
  phone: "+1 (555) 123-4567",
  address: "Borzi, Inc., [Your Business Address]",
};

export const lastUpdated = "December 16, 2025";
