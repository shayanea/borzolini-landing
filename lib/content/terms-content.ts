export interface LegalSection {
  title: string;
  content: string;
  items?: string[];
}

export const termsContent: LegalSection[] = [
  {
    title: "1. Acceptance of Terms",
    content:
      'By accessing and using the Borzi website and platform ("Service"), you accept and agree to be bound by the terms and provisions of this agreement. If you do not agree to abide by these terms, please do not use this Service. Your continued use of the Service constitutes acceptance of these Terms and Conditions.',
  },
  {
    title: "2. Description of Service",
    content: "Borzi is an AI-powered pet healthcare platform that provides:",
    items: [
      "Pet appointment scheduling and management for in-person and home visits",
      "Video and voice telemedicine consultation services with licensed veterinarians",
      "AI-powered health monitoring with proactive alerts and breed-specific insights",
      "Pet health records and medical history tracking",
      "Communication tools between pet owners and veterinary professionals",
      "Clinic discovery with quality-based ratings and reviews",
      "Educational resources and pet care recommendations",
    ],
  },
  {
    title: "3. User Accounts and Registration",
    content:
      "To access certain features of the Service, you must register for an account. You agree to:",
    items: [
      "Provide accurate, current, and complete information during registration",
      "Maintain and promptly update your account information",
      "Maintain the security and confidentiality of your password and account",
      "Accept responsibility for all activities that occur under your account",
      "Notify us immediately of any unauthorized use of your account",
      "Not share your account credentials with others",
      "Be at least 18 years of age or have parental consent to use the Service",
    ],
  },
  {
    title: "4. Acceptable Use",
    content:
      "You agree not to use the Service to engage in any of the following prohibited activities:",
    items: [
      "Violate any applicable local, state, national, or international laws or regulations",
      "Infringe upon the intellectual property rights of others",
      "Upload, transmit, or distribute harmful, offensive, defamatory, or inappropriate content",
      "Harass, abuse, or harm veterinary professionals or other users",
      "Attempt to gain unauthorized access to the Service, servers, or systems",
      "Interfere with, disrupt, or create undue burden on the Service or networks",
      "Use the Service for commercial purposes without written authorization",
      "Impersonate any person or entity or falsely represent your affiliation",
      "Collect or harvest information about other users without consent",
      "Use automated systems (bots, scrapers) to access the Service without permission",
    ],
  },
  {
    title: "5. Veterinary Services and Medical Disclaimer",
    content:
      "IMPORTANT: This platform facilitates veterinary services but does NOT provide veterinary medical advice, diagnosis, or treatment. You acknowledge and agree that:",
    items: [
      "This Service is not a substitute for professional veterinary care",
      "Emergency situations require immediate contact with a veterinarian or emergency animal hospital",
      "All medical decisions should be made in consultation with qualified, licensed veterinary professionals",
      "We are not responsible for the quality, accuracy, or outcome of veterinary services provided by third-party clinics or professionals",
      "Telemedicine consultations have limitations and may not be sufficient for comprehensive diagnosis or treatment",
      "In-person or home visit appointments should be used for complete physical examinations",
      "You remain solely responsible for your pet's health and veterinary care decisions",
    ],
  },
  {
    title: "6. AI Health Monitoring and Recommendations",
    content:
      "Our Service includes AI-powered features that provide health monitoring, insights, and recommendations. By using these features, you acknowledge and agree that:",
    items: [
      "AI recommendations are for informational and educational purposes only and are NOT medical diagnoses or professional veterinary advice",
      "Human veterinary oversight and professional judgment should always prevail over AI recommendations",
      "AI systems may occasionally provide inaccurate, incomplete, or misleading information",
      "You remain responsible for all final decisions regarding your pet's care and treatment",
      "AI health alerts and notifications should prompt consultation with licensed veterinary professionals, not replace it",
      "Breed-specific recommendations are based on general patterns and statistical data and may not apply to your individual pet",
      "Accuracy of AI health monitoring depends on regular, accurate user input and data updates",
      "We make no warranties or guarantees regarding the accuracy, completeness, or reliability of AI-generated insights",
    ],
  },
  {
    title: "7. Telemedicine Services",
    content:
      "Video and voice consultation services are subject to the following terms:",
    items: [
      "Telemedicine consultations require a stable internet connection and compatible devices",
      "Consultations are conducted by independent, licensed veterinary professionals",
      "Telemedicine may not be appropriate for all medical situations or emergencies",
      "Recording of consultations requires explicit consent from all parties",
      "Technical issues may interrupt or prevent consultations (we are not liable for such issues)",
      "Veterinarians reserve the right to recommend in-person visits when telemedicine is insufficient",
      "Prescriptions and treatments are at the discretion of the consulting veterinarian",
    ],
  },
  {
    title: "8. Payment and Transactions",
    content:
      "Currently, Borzi operates as a booking and communication platform. Payment terms include:",
    items: [
      "Payment arrangements are handled directly between pet owners and veterinary clinics",
      "Pricing, payment methods, and terms are determined by individual clinics",
      "Borzi is not responsible for payment disputes between users and clinics",
      "Future platform features may include integrated payment processing with transparent fee structures",
      "Any commission or subscription fees will be clearly communicated before implementation",
      "Refund policies are determined by individual veterinary providers",
    ],
  },
  {
    title: "9. User-Generated Content",
    content:
      "Users may submit reviews, photos, comments, and other content. By submitting content, you:",
    items: [
      "Grant Borzi a worldwide, non-exclusive, royalty-free license to use, display, reproduce, and distribute such content",
      "Represent and warrant that you own or have permission to share any content you submit",
      "Agree not to submit content that is unlawful, defamatory, obscene, or infringes on others' rights",
      "Understand that we may remove or modify user-generated content at our discretion",
      "Acknowledge that reviews and ratings may be displayed publicly on the platform",
    ],
  },
  {
    title: "10. Intellectual Property",
    content:
      "The Service and its original content, features, design, functionality, and branding are owned by Borzi and are protected by international copyright, trademark, patent, trade secret, and other intellectual property laws. You may not:",
    items: [
      "Copy, modify, distribute, sell, or lease any part of the Service",
      "Reverse engineer or attempt to extract source code from the Service",
      "Use our trademarks, logos, or branding without written permission",
      "Remove, alter, or obscure any copyright, trademark, or proprietary notices",
      "Create derivative works based on the Service without authorization",
    ],
  },
  {
    title: "11. Privacy and Data Protection",
    content:
      "Your privacy is important to us. Our collection, use, and sharing of personal information, including pet health data, is governed by our Privacy Policy, which is incorporated into these Terms by reference. By using the Service, you consent to our data practices as described in the Privacy Policy.",
  },
  {
    title: "12. Limitation of Liability",
    content:
      "TO THE MAXIMUM EXTENT PERMITTED BY LAW, IN NO EVENT SHALL Borzi, NOR ITS DIRECTORS, EMPLOYEES, PARTNERS, AGENTS, SUPPLIERS, OR AFFILIATES, BE LIABLE FOR:",
    items: [
      "Any indirect, incidental, special, consequential, or punitive damages",
      "Loss of profits, data, use, goodwill, or other intangible losses",
      "Unauthorized access to our servers or databases",
      "Any interruption or cessation of transmission to or from the Service",
      "Any bugs, viruses, or harmful code transmitted through the Service",
      "Errors, inaccuracies, or omissions in Service content",
      "The conduct, quality, or outcome of veterinary services provided by third-party professionals",
      "AI health monitoring recommendations, alerts, or insights",
      "Personal injury or property damage resulting from your use of the Service",
    ],
  },
  {
    title: "13. Disclaimer of Warranties",
    content:
      'THE SERVICE IS PROVIDED ON AN "AS IS" AND "AS AVAILABLE" BASIS WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO:',
    items: [
      "Implied warranties of merchantability, fitness for a particular purpose, or non-infringement",
      "Any warranty that the Service will be uninterrupted, secure, or error-free",
      "Any warranty regarding the accuracy, reliability, or quality of information or services obtained through the platform",
      "Any warranty that defects will be corrected",
    ],
  },
  {
    title: "14. Indemnification",
    content:
      "You agree to indemnify, defend, and hold harmless Borzi and its officers, directors, employees, agents, and affiliates from and against any claims, liabilities, damages, losses, costs, or expenses (including reasonable attorneys' fees) arising out of or related to:",
    items: [
      "Your use or misuse of the Service",
      "Your violation of these Terms and Conditions",
      "Your violation of any rights of another party",
      "Your user-generated content",
      "Any decisions made based on AI recommendations",
    ],
  },
  {
    title: "15. Service Availability and Modifications",
    content:
      "While we strive to maintain high availability, we reserve the right to:",
    items: [
      "Modify, suspend, or discontinue the Service (or any part thereof) at any time",
      "Perform scheduled maintenance with advance notice when possible",
      "Make changes to features, functionality, or pricing",
      "Update, change, or discontinue AI algorithms and health monitoring features",
    ],
  },
  {
    title: "16. Termination",
    content:
      "We may terminate or suspend your account and access to the Service immediately, without prior notice or liability, for any reason, including but not limited to:",
    items: [
      "Breach of these Terms and Conditions",
      "Violation of applicable laws or regulations",
      "Fraudulent, abusive, or harmful behavior",
      "Upon your request for account deletion",
      "Extended periods of inactivity",
    ],
  },
  {
    title: "17. Changes to Terms",
    content:
      "We reserve the right to modify or replace these Terms and Conditions at any time. Material changes will be communicated through:",
    items: [
      "Email notification to registered users",
      "Prominent notice on the website or platform",
      "At least 30 days' notice before new terms take effect (for material changes)",
      'Updated "Last Updated" date on this page',
    ],
  },
  {
    title: "18. Governing Law and Dispute Resolution",
    content:
      "These Terms shall be interpreted and governed by the laws of the jurisdiction in which Borzi operates, without regard to its conflict of law provisions. Any disputes arising from these Terms or use of the Service shall be subject to:",
    items: [
      "Exclusive jurisdiction of the courts in that jurisdiction",
      "Binding arbitration (if agreed upon by both parties)",
      "Mediation as a first step in dispute resolution (encouraged)",
    ],
  },
  {
    title: "19. Severability",
    content:
      "If any provision of these Terms is found to be invalid, illegal, or unenforceable, the remaining provisions shall continue in full force and effect. The invalid provision shall be modified to the minimum extent necessary to make it valid and enforceable.",
  },
  {
    title: "20. Entire Agreement",
    content:
      "These Terms and Conditions, together with our Privacy Policy and any other legal notices published on the Service, constitute the entire agreement between you and Borzi regarding the use of the Service and supersede all prior agreements and understandings.",
  },
  {
    title: "21. Contact Information",
    content:
      "If you have any questions, concerns, or feedback about these Terms and Conditions, please contact us:",
  },
];

export const contactInfo = {
  email: "legal@borzi.app",
  phone: "+1 (555) 123-4567",
  address: "Borzi, Inc., [Your Business Address]",
};

export const lastUpdated = "December 16, 2025";
