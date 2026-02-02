import React from 'react';

export default function TermsConditions() {
  return (
    <div className="bg-[#020a0a] text-white min-h-screen pt-32 pb-20">
      <div className="max-w-4xl mx-auto px-6 lg:px-12">
        <h1 className="text-4xl font-bold mb-4 text-[#14b8a6]">Terms & Conditions</h1>
        <p className="text-gray-400 mb-10">Last Updated: February 2, 2026</p>

        <div className="space-y-8 text-gray-300">
          <p>Welcome to Sirius Tech Solutions! These Terms & Conditions outline the rules for using our website located at <span className="text-emerald-400">siriustechsolutions.com</span>.</p>

          <div className="grid gap-6">
            <div className="border-b border-gray-800 pb-6">
              <h2 className="text-xl font-bold text-white mb-3">1. Intellectual Property</h2>
              <p className="text-sm">All content including text, graphics, and logos is the property of Sirius Tech Solutions. You may not republish, sell, or duplicate content for commercial use without consent.</p>
            </div>

            <div className="border-b border-gray-800 pb-6">
              <h2 className="text-xl font-bold text-white mb-3">2. Services & Payments</h2>
              <p className="text-sm">Fees are agreed upon in advance. We reserve the right to suspend services for non-payment or breach of these terms. Refunds are processed based on the specific service agreement signed.</p>
            </div>

            <div className="border-b border-gray-800 pb-6">
              <h2 className="text-xl font-bold text-white mb-3">3. Limitation of Liability</h2>
              <p className="text-sm">We are not liable for any loss arising from the use or inability to use our services, third-party content, or unauthorized access to data.</p>
            </div>

            <div className="border-b border-gray-800 pb-6">
              <h2 className="text-xl font-bold text-white mb-3">4. Governing Law</h2>
              <p className="text-sm">These Terms are governed by the laws of Pakistan. Any disputes will be resolved in the courts of Pakistan.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}