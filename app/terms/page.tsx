"use client";

import React from "react";

export default function TermsConditions() {
  return (
    <div className="bg-[#020a0a] text-white min-h-screen pt-32 pb-20">
      <div className="max-w-4xl mx-auto px-6 lg:px-12">
        <h1 className="text-4xl font-bold mb-4 text-[#14b8a6]">
          Terms & Conditions – Sirius Tech Solutions
        </h1>
        <p className="text-gray-400 mb-10">Last Updated: February 2, 2026</p>

        <div className="space-y-10 text-gray-300 leading-relaxed">
          <p>
            Welcome to Sirius Tech Solutions! These Terms & Conditions outline
            the rules and regulations for using our website and services,
            located at{" "}
            <span className="text-emerald-400">siriustechsolutions.com</span>.
            By accessing this website or using our services, you agree to these
            terms. If you do not agree, please do not use our website or
            services.
          </p>

          <p>
            <strong>Website:</strong> siriustechsolutions.com <br />
            <strong>Email:</strong>{" "}
            <span className="text-emerald-400">info@siriustechsolutions.com</span>{" "}
            <br />
            <strong>Phone:</strong> +92 311-5616556
          </p>

          {/* Sectioned Terms */}
          <div className="space-y-8">
            {[
              {
                title: "1. Definitions",
                content: `“Company”, “We”, “Us”, or “Our” refers to Sirius Tech Solutions.
                “You” or “Client” refers to the individual or business accessing or using our website or services.
                “Services” include BPO, HR, IT, Virtual Assistance, Digital Marketing, Finance & Accounting, and related services offered by Sirius Tech Solutions.
                “Website” refers to siriustechsolutions.com.`,
              },
              {
                title: "2. Acceptance of Terms",
                content: `By accessing or using our website or services, you confirm that you are legally capable of entering into contracts, agree to comply with these Terms & Conditions and our Privacy Policy, and understand that our Services are provided according to these Terms. We reserve the right to modify these Terms at any time. Continued use of our website constitutes acceptance of the updated Terms.`,
              },
              {
                title: "3. Intellectual Property Rights",
                content: `All content on this website, including text, graphics, logos, images, videos, software, and designs, is the property of Sirius Tech Solutions or our licensors and is protected under Pakistani and international intellectual property laws. You may view or download content for personal use only. You may not republish, sell, rent, or sub-license material; reproduce, duplicate, or copy content for commercial use; or redistribute content without prior written consent.`,
              },
              {
                title: "4. Cookies and Tracking",
                content: `We use cookies, web beacons, and similar technologies to enhance website functionality, track usage and improve services, and deliver personalized content and marketing campaigns. By using our website, you consent to our use of cookies in accordance with our Privacy Policy.`,
              },
              {
                title: "5. User Content and Comments",
                content: `Users may post comments and reviews on certain areas of our website. Sirius Tech Solutions does not endorse user comments and is not responsible for their content. You warrant that your content does not infringe on third-party rights, is not defamatory, offensive, or illegal, and does not promote commercial activity without consent. You grant us a non-exclusive license to use, reproduce, and edit your content.`,
              },
              {
                title: "6. Hyperlinking and iFrames",
                content: `Certain organizations (government agencies, search engines, news organizations, accredited businesses) may link to our website without approval, provided the link is not deceptive, misleading, or harmful. No frames or iFrames may be created around our website without written consent.`,
              },
              {
                title: "7. Services, Payment & Refunds",
                content: `Sirius Tech Solutions provides professional services (BPO, HR, IT, Virtual Assistance, Digital Marketing, Finance & Accounts) to clients globally. Fees for services are agreed upon in advance. Payment must be made according to the invoice terms. Refunds or service cancellations are processed based on individual agreements and the scope of work completed. We reserve the right to suspend services for non-payment or breach of Terms.`,
              },
              {
                title: "8. Disclaimers & Limitation of Liability",
                content: `While we strive to provide accurate information, Sirius Tech Solutions does not guarantee completeness or accuracy of website content. We are not liable for any loss or damage arising from use or inability to use the website or services, third-party content, links, or services, or unauthorized access or data breaches. Nothing in this section limits liability for death, personal injury, or fraud.`,
              },
              {
                title: "9. Privacy & Do Not Call (DNC) Compliance",
                content: `We respect your privacy and follow our Privacy Policy, including collection, processing, and storage of personal data. We comply with Do Not Call (DNC) regulations in Pakistan and internationally. Clients may opt-out of marketing communications by contacting us at info@siriustechsolutions.com.`,
              },
              {
                title: "10. Governing Law & Jurisdiction",
                content: `These Terms are governed by the laws of Pakistan. Any disputes will be resolved in the courts of Pakistan, unless otherwise specified in a service agreement with international clients.`,
              },
              {
                title: "11. External Links",
                content: `Our website may contain links to third-party websites. We are not responsible for content, privacy practices, or policies of third-party websites.`,
              },
              {
                title: "12. Changes to Terms",
                content: `We may update these Terms at any time without prior notice. Updated Terms will be posted on this page. Continued use of the website or services constitutes acceptance of changes.`,
              },
              {
                title: "13. Contact Us",
                content: `For questions, concerns, or requests regarding these Terms: Sirius Tech Solutions
                Website: siriustechsolutions.com
                Email: info@siriustechsolutions.com
                Phone: +92 311-5616556`,
              },
            ].map((section, i) => (
              <div
                key={i}
                className="border-b border-gray-800 pb-6 last:border-none"
              >
                <h2 className="text-xl font-bold text-white mb-3">
                  {section.title}
                </h2>
                <p className="text-sm whitespace-pre-line">{section.content}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}