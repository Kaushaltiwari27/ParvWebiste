import type { Metadata } from "next";
import { Sora, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import CustomCursor from "@/components/CustomCursor";
import AIChatbot from "@/components/AIChatbot";
import Preloader from "@/components/Preloader";

const sora = Sora({ 
  subsets: ["latin"], 
  variable: '--font-sora',
  display: 'swap',
});

const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-inter',
  display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({ 
  subsets: ["latin"],
  variable: '--font-jetbrains-mono',
  display: 'swap',
});

export const metadata: Metadata = {
  title: "ParvInfoSoft | AI Training Institute & IT Services Company in Surat, India",
  description: "Learn AI, automation, web development and business growth with ParvInfoSoft. Premium AI training institute and IT solutions company serving Surat, Gujarat, and all of India.",
  keywords: [
    "AI course in Surat", 
    "Best AI institute in Surat", 
    "Website development company Surat", 
    "AI automation company India", 
    "Lead generation agency Surat",
    "Digital skills training",
    "CRM development company",
    "ParvInfoSoft training",
    "IT company near me"
  ],
  alternates: {
    canonical: "https://www.parvinfosoft.com",
  },
  icons: {
    icon: '/icon.png',
  },
  openGraph: {
    title: "ParvInfoSoft | AI Training & IT Services in Surat",
    description: "Learn AI, automation, web development and business growth. Premium AI training institute and IT solutions company in Surat.",
    url: "https://www.parvinfosoft.com",
    siteName: "ParvInfoSoft",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "ParvInfoSoft - AI Training and IT Services",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ParvInfoSoft | AI Training & IT Services",
    description: "Premium AI training institute and IT solutions company in Surat, Gujarat.",
    images: ["/logo.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // JSON-LD Schema for Educational Organization and Local Business
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "EducationalOrganization",
        "@id": "https://www.parvinfosoft.com/#educational",
        "name": "ParvInfoSoft Training Institute",
        "url": "https://www.parvinfosoft.com/training",
        "logo": "https://www.parvinfosoft.com/logo.png",
        "founder": {
          "@type": "Person",
          "name": "Kaushal Tiwari"
        },
        "description": "Premium AI training and automation consulting firm based in Surat, India. India's most practical AI mastery program.",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "4019 The Palladium Mall, near Vijaynagar, Chikuwadi, Nana Varachha",
          "addressLocality": "Surat",
          "addressRegion": "Gujarat",
          "postalCode": "395010",
          "addressCountry": "IN"
        },
        "contactPoint": {
          "@type": "ContactPoint",
          "telephone": "+91-9081553331",
          "contactType": "customer service"
        },
        "sameAs": [
          "https://www.instagram.com/parvinfosoftai?igsh=MWVkdzFqb25hMXh2ZQ==",
          "https://www.linkedin.com/company/parvinfosoft/"
        ]
      },
      {
        "@type": "ProfessionalService",
        "@id": "https://www.parvinfosoft.com/#business",
        "name": "ParvInfoSoft IT & AI Automation Services",
        "url": "https://www.parvinfosoft.com",
        "image": "https://www.parvinfosoft.com/logo.png",
        "priceRange": "$$$",
        "telephone": "+91-9081553331",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "4019 The Palladium Mall, near Vijaynagar, Chikuwadi, Nana Varachha",
          "addressLocality": "Surat",
          "addressRegion": "Gujarat",
          "postalCode": "395010",
          "addressCountry": "IN"
        },
        "areaServed": ["Surat", "Gujarat", "India"],
        "description": "Top-rated IT company in Surat specializing in AI automation, website development, App development, CRM/ERP systems, and lead generation."
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Where is ParvInfoSoft located?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "We are located at 4019 The Palladium Mall, near Vijaynagar, Chikuwadi, Nana Varachha, Surat, Gujarat 395010, India. We serve clients globally."
            }
          },
          {
            "@type": "Question",
            "name": "Is ParvInfoSoft a training institute or an IT company?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "We are both. We are a premium IT solutions provider that builds real-world software and automation systems, and we use that exact expertise to train our students through our academy."
            }
          },
          {
            "@type": "Question",
            "name": "Who is the founder of ParvInfoSoft?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "ParvInfoSoft was founded by Kaushal Tiwari, an AI strategist and business builder dedicated to bringing premium AI education and automation to India."
            }
          }
        ]
      }
    ]
  };

  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link href="https://api.fontshare.com/v2/css?f[]=general-sans@200,300,400,500,600,700&display=swap" rel="stylesheet" />
      </head>
      <body className={`font-general antialiased bg-primary-dark text-white selection:bg-accent-electric selection:text-white`}>
        <Preloader />
        <CustomCursor />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
        {children}
        <AIChatbot />
      </body>
    </html>
  );
}
