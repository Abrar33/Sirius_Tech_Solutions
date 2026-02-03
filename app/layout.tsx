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

// 1. Separate Viewport configuration
export const viewport: Viewport = {
  themeColor: "#000000",
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
  // Unified Favicon & Icon logic
icons: {
  icon: [
    { url: "/assets/3.png" }, // Standard favicon
    { url: "/assets/3.png", sizes: "192x192", type: "image/png" }, // Specific size for Google
  ],
  apple: "/assets/logo.png", 
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
        url: "/assets/3.png", 
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
    images: ["/assets/3.png"],
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
    "image": "https://siriustechsolutions.com/assets/logo.png", // Updated to /assets
    "url": "https://siriustechsolutions.com",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "Pakistan",
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
        
        {/* Layout Wrapper */}
        <div className="flex flex-col min-h-screen">
          <Navbar />
          <main className="grow">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}