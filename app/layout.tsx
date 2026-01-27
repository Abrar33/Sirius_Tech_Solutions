import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Footer from "./components/Footer/Footer";
import Navbar from "./views/Navbar/navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// 1. Separate Viewport configuration (Required in Next.js 15)
export const viewport: Viewport = {
  themeColor: "#000000", // Change to your brand's primary color
  width: "device-width",
  initialScale: 1,
};

// 2. Enhanced SEO Metadata
export const metadata: Metadata = {
  title: {
    template: "%s | Sirius Tech Solutions",
    default: "Sirius Tech Solutions | Premium Business & IT Services",
  },
  description: "Empowering businesses with HR solutions, Digital Marketing, Virtual Assistants, and cutting-edge IT services.",
  keywords: ["HR Solutions", "Digital Marketing", "Virtual Assistant", "IT Services", "Business Outsourcing", "Sirius Tech"],
  metadataBase: new URL("https://siriustechsolutions.com"),
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: "Sirius Tech Solutions",
    description: "Your partner in Digital Transformation and Business Growth.",
    url: "https://siriustechsolutions.com",
    siteName: "Sirius Tech Solutions",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/og-image.png", // Ensure this exists in your /public folder
        width: 1200,
        height: 630,
        alt: "Sirius Tech Solutions - HR and IT Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sirius Tech Solutions",
    description: "Premium Business & IT Services",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // 3. JSON-LD for "Professional Service"
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "Sirius Tech Solutions",
    "image": "https://siriustechsolutions.com/logo.png",
    "url": "https://siriustechsolutions.com",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "US", // Update to your specific country
    },
    "serviceType": [
      "HR Solutions",
      "Digital Marketing",
      "Virtual Assistant",
      "IT Services"
    ]
  };

  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {/* Injecting Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
        <Navbar/>
        <Footer/>
      </body>
    </html>
  );
}