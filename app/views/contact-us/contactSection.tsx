"use client";

import React, { useState, ChangeEvent, FormEvent, useRef } from "react";
import { Mail, Phone, MapPin, Send, Loader2 } from "lucide-react";
import emailjs from "@emailjs/browser";

/**
 * ContactSection Component for Sirius Tech Solutions
 * Integrated with EmailJS using variables mapped to your dashboard:
 * {{name}}, {{time}}, {{message}}
 */
const ContactSection: React.FC = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    service: "BPO Solutions",
    message: "",
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) => {
    const { name, value } = e.target;
    // We map the UI state to a local object, but the HTML 'name' attribute
    // handles the actual delivery to EmailJS
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // EmailJS Credentials from your setup
    const SERVICE_ID = process.env.NEXT_PUBLIC_SERVICE_ID!;
    const TEMPLATE_ID = process.env.NEXT_PUBLIC_TEMPLATE_ID!;
    const PUBLIC_KEY = process.env.NEXT_PUBLIC_KEY!;
    try {
      await emailjs.sendForm(
        SERVICE_ID,
        TEMPLATE_ID,
        formRef.current!,
        PUBLIC_KEY,
      );

      alert(
        "Message sent successfully! The Sirius team will contact you soon.",
      );

      // Reset form state
      setFormData({
        fullName: "",
        email: "",
        service: "BPO Solutions",
        message: "",
      });
    } catch (error) {
      console.error("EmailJS Error:", error);
      alert(
        "Failed to send message. Please try again or contact us via phone.",
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="bg-black text-white py-24 px-6">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-start">
        {/* Left Side: Contact Details & Branding */}
        <div className="space-y-12">
          <div className="space-y-6">
            <h3 className="text-teal-500 font-bold uppercase tracking-widest text-sm">
              Contact Information
            </h3>
            <h2 className="text-4xl md:text-5xl font-bold leading-tight">
              Ready to take your <br />
              <span className="text-zinc-500">business to the next level?</span>
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 gap-8">
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-teal-500">
                <Phone size={20} />
                <span className="font-bold">Call Us</span>
              </div>
              <p className="text-zinc-400 font-medium">+92-3115616556</p>
            </div>
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-teal-500">
                <Mail size={20} />
                <span className="font-bold">Email Us</span>
              </div>
              <p className="text-zinc-400 font-medium">
                info@siriustechsolutions.com
              </p>
            </div>
          </div>
        </div>

        {/* Right Side: Contact Form */}
        <div className="bg-[#0A0A0A] p-8 md:p-12 rounded-[2.5rem] border border-zinc-800 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-teal-500/10 blur-[80px]"></div>

          <form ref={formRef} onSubmit={handleSubmit} className="space-y-5">
            {/* Hidden field to populate {{time}} in your template */}
            <input
              type="hidden"
              name="time"
              value={new Date().toLocaleString()}
            />
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-wider text-zinc-500">
                Full Name
              </label>
              <input
                required
                name="name" // Matches {{name}} in your screenshot
                type="text"
                value={formData.fullName}
                onChange={(e) =>
                  setFormData({ ...formData, fullName: e.target.value })
                }
                placeholder="John Doe"
                className="w-full bg-zinc-900/50 border border-zinc-800 p-4 rounded-xl text-white focus:border-teal-500 outline-none transition-all"
              />
            </div>

            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-wider text-zinc-500">
                Email Address
              </label>
              <input
                required
                name="email" // Matches {{email}} (Note: add {{email}} to your template for reply-to)
                type="email"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                placeholder="john@example.com"
                className="w-full bg-zinc-900/50 border border-zinc-800 p-4 rounded-xl text-white focus:border-teal-500 outline-none transition-all"
              />
            </div>
<div className="group relative space-y-2">
  <label
    htmlFor="service"
    className="block text-[10px] font-black uppercase tracking-[0.15em] text-zinc-500 transition-colors group-focus-within:text-teal-500"
  >
    Service Interest
  </label>
  
  <div className="relative">
    <select
      id="service"
      name="service"
      value={formData.service}
      onChange={handleChange}
      className="w-full appearance-none rounded-xl border border-zinc-800 bg-zinc-900/50 p-4 text-sm text-zinc-100 
                 ring-offset-zinc-950 transition-all duration-200 
                 focus:border-teal-500/50 focus:bg-zinc-900 focus:ring-2 focus:ring-teal-500/20 outline-none
                 cursor-pointer hover:border-zinc-600"
    >
      <option value="" disabled className="bg-zinc-900">Choose a service...</option>
      <option value="BPO Solutions" className="bg-zinc-900">BPO Solutions</option>
      <option value="Software Development" className="bg-zinc-900">Software Development</option>
      <option value="HR Services" className="bg-zinc-900">HR Services</option>
      <option value="Digital Marketing" className="bg-zinc-900">Digital Marketing</option>
      <option value="Finance & Accounting" className="bg-zinc-900">Finance & Accounting</option>
      <option value="Virtual Assistant" className="bg-zinc-900">Virtual Assistant</option>
      <option value="Other" className="bg-zinc-900">Other</option>
    </select>

    {/* Custom Chevron Arrow */}
    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-zinc-500">
      <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
      </svg>
    </div>
  </div>
</div>

            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-wider text-zinc-500">
                Message
              </label>
              <textarea
                required
                name="message" // Matches {{message}} in your screenshot
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                placeholder="Hello sir..."
                rows={4}
                className="w-full bg-zinc-900/50 border border-zinc-800 p-4 rounded-xl text-white focus:border-teal-500 outline-none transition-all resize-none"
              ></textarea>
            </div>

            <button
              disabled={loading}
              type="submit"
              className="w-full bg-teal-500 hover:bg-teal-400 text-black font-extrabold py-5 rounded-xl transition-all flex items-center justify-center gap-3 disabled:opacity-50 shadow-lg shadow-teal-500/10"
            >
              {loading ? (
                <Loader2 className="animate-spin" size={20} />
              ) : (
                <>
                  Send Message <Send size={18} />
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
