import type { Metadata } from "next";
import { Sora, Inter, JetBrains_Mono } from "next/font/google"; // Force Vercel Rebuild 2
import "./globals.css";
import CustomCursor from "@/components/CustomCursor";
import AIChatbot from "@/components/AIChatbot";
import Preloader from "@/components/Preloader";
import InteractiveBackground from "@/components/InteractiveBackground";

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
  description: "ParvInfoSoft is a leading AI Institute in Surat, Gujarat, delivering hands-on AI training, AI tools mastery, and automation skills that help students and professionals build real income opportunities. We also provide expert web development, app development, and digital marketing services, enabling businesses to scale with AI automation, CRM solutions, and custom software. Serving clients across India and worldwide.",
  keywords: [
    "AI course online","Artificial Intelligence training","Learn AI from scratch","AI certification course",
    "Machine learning course online","Data science course online","Deep learning course","Generative AI course",
    "ChatGPT course for beginners","AI tools training","AI automation tools","AI agents development",
    "No code AI course","Python for AI","AI for beginners",

    "Best AI course in India","AI training institute India","Data science institute India","AI certification India",
    "IT training institute India","Software training India","Digital skills training India","AI development company India",
    "Automation company India","IT services company India","Startup tech services India",

    "AI course in Surat","Best AI institute in Surat","Data science course Surat","IT training institute Surat",
    "Software company in Surat","Website development company Surat","Digital marketing agency Surat",
    "AI automation company Surat","Lead generation company Surat","AI course in Gujarat",
    "Best IT institute in Gujarat","Data science training Gujarat","Software development Gujarat","AI training Gujarat",
    "Tech institute Gujarat",

    "AI automation services","AI development company","Web development services","Custom software development",
    "SaaS development company","CRM development services","Lead generation services worldwide",
    "Digital transformation company","Business automation services","AI consulting services",
    "IT outsourcing company","Remote development team","AI solutions for business","Automation agency global",

    "Hire AI developer","Hire web developer","Hire software developer India","AI solutions for startups",
    "Automation for small business","CRM for small business","AI chatbot for business",
    "WhatsApp automation services","Marketing automation agency","Lead generation for business",
    "Growth hacking agency","Build AI chatbot for website","Business process automation",

    "Best AI course for beginners 2026","Learn AI step by step","AI course with placement India",
    "Affordable AI course online","Learn AI without coding","AI tools for business growth",
    "Automation tools for startups","How to start AI agency","AI for freelancers","AI for business owners",
    "Best data science course for beginners","Online AI classes with certificate","AI course for students India",
    "Practical AI training program",

    "Future of AI careers","AI vs human jobs","AI tools you must know","Top AI tools 2026",
    "AI trends 2026","Best tools for productivity","Automation hacks for business",
    "AI side hustle ideas","Earn money using AI","AI business ideas"
  ],
  alternates: {
    canonical: "https://www.parvinfosoft.com",
  },
  icons: {
    icon: '/parv-logo-icon.png',
  },
  openGraph: {
    title: "ParvInfoSoft | AI Training & IT Services in Surat",
    description: "ParvInfoSoft is a leading AI Institute in Surat, Gujarat, delivering hands-on AI training, AI tools mastery, and automation skills that help students and professionals build real income opportunities. We also provide expert web development, app development, and digital marketing services, enabling businesses to scale with AI automation, CRM solutions, and custom software. Serving clients across India and worldwide.",
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
    description: "ParvInfoSoft is a leading AI Institute in Surat, Gujarat, delivering hands-on AI training, AI tools mastery, and automation skills that help students and professionals build real income opportunities. We also provide expert web development, app development, and digital marketing services, enabling businesses to scale with AI automation, CRM solutions, and custom software. Serving clients across India and worldwide.",
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
      <body className={`font-general antialiased bg-transparent text-white selection:bg-accent-electric selection:text-white`}>
        <InteractiveBackground />
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
