import React from 'react';

export default function PrivacyPolicy() {
  return (
    <div className="bg-[#020a0a] text-white min-h-screen pt-32 pb-20">
      <div className="max-w-4xl mx-auto px-6 lg:px-12">
        <h1 className="text-4xl font-bold mb-4 text-[#14b8a6]">Privacy Policy</h1>
        <p className="text-gray-400 mb-10">Effective Date: February 2026</p>

        <section className="space-y-10 text-gray-300 leading-relaxed">
          <div>
            <p>At <strong>Sirius Tech Solutions</strong>, your privacy and data security are our top priorities. This Privacy Policy explains how we collect, use, store, and protect your information.</p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-white mb-4 border-l-4 border-[#14b8a6] pl-4">1. Definitions</h2>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm mt-4">
              <li className="bg-white/5 p-3 rounded"><strong>Cookies:</strong> Small files stored on your device to track activity.</li>
              <li className="bg-white/5 p-3 rounded"><strong>Personal Data:</strong> Information that identifies an individual.</li>
              <li className="bg-white/5 p-3 rounded"><strong>Usage Data:</strong> Data collected automatically (IP, Browser).</li>
              <li className="bg-white/5 p-3 rounded"><strong>Service:</strong> The website and services provided by us.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-white mb-4 border-l-4 border-[#14b8a6] pl-4">2. Information We Collect</h2>
            <h3 className="text-emerald-400 font-medium mt-4">a. Personal Data</h3>
            <p>Name, email address, phone number, company, job title, and billing information.</p>
            <h3 className="text-emerald-400 font-medium mt-4">b. Usage Data</h3>
            <p>IP address, browser type, device info, and data collected through cookies or analytics.</p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-white mb-4 border-l-4 border-[#14b8a6] pl-4">3. How We Use Your Information</h2>
            <p>We use your data to provide services (BPO, IT, Marketing), respond to inquiries, analyze trends, and ensure legal compliance.</p>
          </div>

          <div className="bg-[#0f3d39]/20 p-6 rounded-lg border border-[#14b8a6]/20">
            <h2 className="text-xl font-semibold text-white mb-2">Contact Our Privacy Team</h2>
            <p>Email: <span className="text-[#14b8a6]">info@siriustechsolutions.com</span></p>
            <p>Phone: +92 311-5616556</p>
          </div>
        </section>
      </div>
    </div>
  );
}