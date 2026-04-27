export interface PageContent {
  title: string;
  subtitle: string;
  description: string;
  features: string[];
  pricing?: string;
  imageUrl?: string;
  workflowSteps?: { title: string; desc: string }[];
  modules?: { title: string; desc: string }[];
  testimonials?: { name: string; review: string; role: string }[];
  faqs?: { q: string; a: string }[];
  outcomes?: string[];
  targetAudience?: string;
  portfolioSamples?: { title: string; result: string }[];
}

export const servicesData: Record<string, PageContent> = {
  "ai-automation": {
    title: "AI Automation Solutions",
    subtitle: "Scale your operations without scaling your headcount.",
    description: "We build custom AI agents and workflows that automate repetitive tasks, customer support, and internal operations. Stop burning capital on manual data entry and let intelligent systems handle the heavy lifting while your team focuses on high-leverage growth.",
    features: ["Custom AI Chatbots using GPT-4 & Claude", "Workflow Automation (Zapier/Make/n8n)", "Internal Knowledge Base Retrieval Systems", "Automated Client Onboarding Flows"],
    pricing: "Starting at ₹1.5L / project",
    imageUrl: "/images/solutions_dashboard.png",
    workflowSteps: [
      { title: "Discovery Audit", desc: "We map out your current bottlenecks and manual tasks." },
      { title: "Architecture Design", desc: "We design the optimal AI tech stack and workflow blueprint." },
      { title: "Development & Testing", desc: "We build, train, and rigorously test the AI agents on your data." },
      { title: "Deployment & Training", desc: "We launch the system and train your team on how to manage it." }
    ],
    testimonials: [
      { name: "Rahul V.", role: "CEO, ScaleTech", review: "The AI agent they built handles 80% of our tier-1 support tickets. It's flawless." },
      { name: "Sneha M.", role: "Operations Lead", review: "Our onboarding went from taking 3 days to taking 5 minutes. Incredible ROI." }
    ],
    portfolioSamples: [
      { title: "E-commerce Support Bot", result: "Reduced support costs by 65%" },
      { title: "Automated Lead Routing", result: "Saved 40 hours per week" }
    ],
    faqs: [
      { q: "Is my data secure?", a: "Absolutely. We use enterprise-grade APIs where your data is never used to train public models." },
      { q: "How long does implementation take?", a: "Most automation projects are delivered within 3-4 weeks depending on complexity." }
    ]
  },
  "web-development": {
    title: "Web Development",
    subtitle: "High-performance, scalable web platforms.",
    description: "From luxury landing pages to complex full-stack SaaS platforms, we engineer modern web applications built for speed and conversion. We don't use clunky templates; everything is custom-coded using Next.js and React for maximum performance.",
    features: ["Next.js / React Web Apps", "High-Converting Landing Pages", "Custom Dashboards & Portals", "E-commerce Stores (Shopify Headless)"],
    pricing: "Starting at ₹80,000 / project",
    imageUrl: "/images/services_tech.png",
    workflowSteps: [
      { title: "UI/UX Strategy", desc: "Wireframing and conversion rate optimization planning." },
      { title: "High-Fidelity Design", desc: "Creating the premium visual language and motion graphics." },
      { title: "Frontend Engineering", desc: "Pixel-perfect translation of design to code using React/Next.js." },
      { title: "Backend & Launch", desc: "Connecting databases, APIs, and deploying to Vercel/AWS." }
    ],
    faqs: [
      { q: "Do you use WordPress?", a: "We primarily build custom React/Next.js applications for better performance, but we do integrate with Headless CMS solutions." },
      { q: "Can you redesign my existing site?", a: "Yes, we specialize in taking legacy websites and transforming them into premium digital experiences." }
    ],
    portfolioSamples: [
      { title: "SaaS Launch Page", result: "Achieved 12% conversion rate" },
      { title: "Real Estate Portal", result: "Handling 50k+ monthly visitors" }
    ]
  },
  "app-development": {
    title: "App Development",
    subtitle: "Mobile experiences your users will love.",
    description: "Native and cross-platform mobile applications designed to bring your business directly to your customers' pockets. We specialize in React Native and Flutter to deliver lightning-fast iOS and Android apps from a single codebase.",
    features: ["iOS & Android Native Apps", "React Native & Flutter Cross-Platform", "Custom API Integrations", "App Store Optimization (ASO)", "Real-time Push Notifications", "In-App Purchases Setup"],
    pricing: "Starting at ₹2L / project",
    imageUrl: "/images/mobile_app.png",
    workflowSteps: [
      { title: "Product Discovery", desc: "Mapping user journeys, feature requirements, and monetization strategies." },
      { title: "Interactive Prototyping", desc: "Building click-through Figma prototypes to visualize the flow before coding." },
      { title: "Agile Development", desc: "Sprints-based coding using modern frameworks for rapid iteration." },
      { title: "App Store Launch", desc: "Handling Apple and Google review processes and final deployment." }
    ],
    testimonials: [
      { name: "Vikram S.", role: "Founder, FitLife", review: "The app they built is incredibly fast and intuitive. Our user retention doubled in the first month." },
      { name: "Pooja K.", role: "Product Manager", review: "ParvInfoSoft handled everything from the complex backend architecture to the beautiful frontend UI." }
    ],
    faqs: [
      { q: "Do you build for both iOS and Android?", a: "Yes, we use cross-platform technologies like React Native to build for both platforms simultaneously." },
      { q: "Will I own the source code?", a: "Absolutely. Once the project is fully paid for, 100% of the IP and source code belongs to you." }
    ]
  },
  "crm-erp": {
    title: "CRM / ERP Systems",
    subtitle: "Centralize and scale your business operations.",
    description: "We build and integrate custom CRM and ERP solutions tailored exactly to how your unique business operates. Ditch the messy spreadsheets and switch to a centralized, automated dashboard.",
    features: ["Sales Pipeline Automation", "Inventory & Order Management", "Custom Analytics Dashboards", "Data Migration from Legacy Systems", "WhatsApp API Integration", "Automated Follow-ups"],
    pricing: "Custom Pricing",
    imageUrl: "/images/solutions_dashboard.png",
    workflowSteps: [
      { title: "Business Process Mapping", desc: "We analyze your exact sales and operational workflows to identify inefficiencies." },
      { title: "Database Architecture", desc: "Designing a robust, scalable database schema to hold all your business data." },
      { title: "Custom Development", desc: "Building the internal dashboards and automating data entry." },
      { title: "Team Onboarding", desc: "Extensive training sessions to ensure your team actually adopts the new system." }
    ]
  },
  "branding": {
    title: "Branding Solutions",
    subtitle: "Premium digital identities that build instant trust.",
    description: "We don't just build software. We craft high-end brand identities, logos, and design systems that build absolute trust from the moment a user lands on your site.",
    features: ["Custom Logo Design", "Comprehensive Brand Guidelines", "UI/UX Design Systems", "Marketing Asset Creation", "Social Media Templates", "Typography & Color Theory"],
    pricing: "Starting at ₹40,000 / project",
    imageUrl: "/images/services_tech.png",
    workflowSteps: [
      { title: "Brand Audit & Research", desc: "Understanding your market positioning, competitors, and target audience." },
      { title: "Moodboarding & Concepts", desc: "Presenting multiple visual directions to align on the core aesthetic." },
      { title: "Identity Design", desc: "Crafting the logo, selecting typography, and defining the color palette." },
      { title: "Asset Delivery", desc: "Providing all vector files, guidelines, and templates for immediate use." }
    ]
  },
  "consulting": {
    title: "Strategy & Consulting",
    subtitle: "Strategic guidance for the AI era.",
    description: "Not sure where to start? Our strategy team audits your business to identify exact areas where AI, automation, and modern web tech will maximize your ROI. We provide the blueprint, you decide how to build it.",
    features: ["Comprehensive Business Audits", "Tech Stack Architecture Design", "AI Growth Strategy Planning", "Digital Transformation Roadmaps", "Vendor Vetting & Selection", "Security & Compliance Review"],
    pricing: "₹15,000 / Consultation",
    imageUrl: "/images/training_class.png",
    workflowSteps: [
      { title: "Initial Deep Dive", desc: "A 2-hour intensive session to map your current business state." },
      { title: "Vulnerability & Opportunity Audit", desc: "Identifying bottlenecks costing you money and areas where AI can accelerate growth." },
      { title: "Blueprint Creation", desc: "We deliver a massive, step-by-step technical roadmap for your business." },
      { title: "Follow-up Strategy", desc: "Ongoing monthly check-ins to ensure implementation stays on track." }
    ]
  }
};

export const trainingData: Record<string, PageContent> = {
  "ai-foundation": {
    title: "AI Foundation Program",
    subtitle: "The absolute beginner's guide to artificial intelligence.",
    description: "Master the basics of AI, prompt engineering, and everyday AI tools to become 10x more productive in your current role. No coding experience required.",
    features: ["ChatGPT Mastery", "Prompt Engineering Basics", "Everyday AI Tools", "Productivity Hacks"],
    pricing: "₹4,500",
    imageUrl: "/images/training_class.png",
    targetAudience: "Students, non-technical professionals, and anyone looking to understand the AI revolution.",
    outcomes: ["Save 10+ hours a week", "Write better emails and reports", "Understand AI capabilities"],
    modules: [
      { title: "Module 1: Introduction to LLMs", desc: "Understanding how ChatGPT and Claude actually work." },
      { title: "Module 2: Prompt Engineering Frameworks", desc: "The secret to getting exactly what you want from AI." },
      { title: "Module 3: AI for Daily Productivity", desc: "Automating emails, summaries, and research." }
    ],
    faqs: [
      { q: "Do I need to know how to code?", a: "No! This course is designed specifically for non-coders." },
      { q: "Is the content updated?", a: "Yes, we update the curriculum monthly to include the latest model releases." }
    ]
  },
  "skill-builder": {
    title: "AI Skill Builder",
    subtitle: "Turn AI skills into a high-paying career.",
    description: "Our bestselling program. Learn to build automated workflows, generate content, and land high-paying freelance clients. This is the exact blueprint for starting an AI agency.",
    features: ["Advanced Prompting", "Content Automation", "Freelance Guide", "1-on-1 Support", "Real Projects"],
    pricing: "₹8,500",
    imageUrl: "/images/services_tech.png",
    modules: [
      { title: "Module 1: Zapier & Make Mastery", desc: "Building multi-step autonomous workflows." },
      { title: "Module 2: Custom GPTs", desc: "Training AI on specific business data." },
      { title: "Module 3: Client Acquisition", desc: "How to package and sell your AI services." }
    ],
    testimonials: [
      { name: "Karan D.", role: "Freelancer", review: "I landed my first $1,000 client within 2 weeks of finishing this course." }
    ],
    faqs: [
      { q: "Do you provide job placement?", a: "While we don't guarantee jobs, we provide extensive training on how to acquire freelance clients and build a portfolio." }
    ]
  },
  "income-accelerator": {
    title: "AI Income Accelerator",
    subtitle: "For serious entrepreneurs and agencies.",
    description: "Learn to build complete AI automation systems for businesses. This is the exact blueprint we use to run our agency. You will learn high-ticket sales, complex bot building, and agency scaling.",
    features: ["Complete Automation Setup", "Custom CRM Integration", "Lead Gen Workflows", "Agency Growth Blueprint", "Priority Mentorship", "Private Community Access"],
    pricing: "₹20,000",
    imageUrl: "/images/solutions_dashboard.png",
    modules: [
      { title: "Module 1: High-Ticket Sales Psychology", desc: "How to confidently close $5k+ retainers for AI services." },
      { title: "Module 2: Advanced AI Agents", desc: "Building multi-agent systems using LangChain and advanced APIs." },
      { title: "Module 3: Scaling Operations", desc: "How to outsource, manage teams, and build recurring revenue." }
    ]
  },
  "corporate": {
    title: "Corporate AI Training",
    subtitle: "Upskill your entire workforce overnight.",
    description: "Customized, private training sessions for your team to integrate AI safely and effectively into your corporate workflows. Stop your employees from leaking secure data to public models and teach them enterprise-grade prompt engineering.",
    features: ["Private Enterprise Sessions", "Custom-Tailored Curriculum", "Security & Compliance Guidelines", "Post-Training Support", "Hands-on Workshops", "Certification of Completion"],
    pricing: "Custom Team Pricing",
    imageUrl: "/images/training_class.png",
    modules: [
      { title: "Module 1: AI Security & Ethics", desc: "Ensuring your team understands data privacy and safe AI usage policies." },
      { title: "Module 2: Role-Specific Prompting", desc: "Custom training for marketing, HR, operations, and sales teams." },
      { title: "Module 3: Internal Knowledge Bases", desc: "Teaching your team how to query company data securely using custom GPTs." }
    ],
    testimonials: [
      { name: "Aditi S.", role: "VP of HR, TechCorp", review: "The corporate training session completely transformed how our team works. Everyone is saving at least an hour a day." }
    ],
    faqs: [
      { q: "Can you train us on-site?", a: "Yes, we offer both virtual training and on-site intensive workshops across major Indian cities." }
    ]
  },
  "workshops": {
    title: "Live Implementation Workshops",
    subtitle: "Intense, weekend implementation bootcamps.",
    description: "Join our intensive live workshops where you don't just learn—you actually build and deploy an AI system in a single weekend alongside industry experts.",
    features: ["Live Implementation", "Q&A Sessions", "Networking with Founders", "Ready-to-use Templates", "Lifetime Recording Access", "Bonus Cheat Sheets"],
    pricing: "₹1,999 / Session",
    imageUrl: "/images/mobile_app.png",
    faqs: [
      { q: "Are the workshops recorded?", a: "Yes, all attendees receive lifetime access to the 4K recordings of the workshop." },
      { q: "What if I miss the live session?", a: "You can watch the recording or join the next scheduled live batch at no extra cost." }
    ]
  }
};

export const solutionsData: Record<string, PageContent> = {
  "business-automation": { 
    title: "Business Automation", 
    subtitle: "Streamline everything. Remove human error.", 
    description: "End-to-end operational automation designed to remove human error and drastically reduce overhead costs. We connect your entire tech stack so data flows seamlessly from your website to your CRM to your accounting software.", 
    features: ["Zapier/Make Setup", "Data Synchronization", "Automated Reporting Dashboards", "Invoice Automation", "Employee Onboarding Flows"],
    imageUrl: "/images/solutions_dashboard.png",
    workflowSteps: [
      { title: "Process Mapping", desc: "Documenting your manual SOPs and identifying automation targets." },
      { title: "API Integration", desc: "Connecting your apps (Slack, CRM, Email) via secure webhooks." },
      { title: "Testing & QA", desc: "Running edge-case scenarios to ensure the automation never breaks." },
      { title: "Go Live", desc: "Activating the automated workflows and monitoring performance." }
    ],
    testimonials: [
      { name: "Rishabh K.", role: "Operations Director", review: "Our entire invoicing and client onboarding is now 100% automated. Absolute game changer." }
    ],
    faqs: [
      { q: "What software do you integrate with?", a: "We can connect to almost any software that has an open API, including Salesforce, HubSpot, Stripe, Shopify, and more." }
    ]
  },
  "lead-generation": { 
    title: "Lead Generation Systems", 
    subtitle: "Never run out of qualified prospects.", 
    description: "We build automated funnels to capture and nurture leads 24/7. From high-converting landing pages to complex email drip campaigns, we ensure your sales calendar stays full.", 
    features: ["High-Converting Landing Pages", "Automated Email Sequences", "CRM Integration", "Lead Scoring Algorithms", "A/B Testing Setup", "Retargeting Infrastructure"],
    imageUrl: "/images/services_tech.png",
    workflowSteps: [
      { title: "Offer Creation", desc: "Helping you design a compelling lead magnet to attract your target audience." },
      { title: "Funnel Engineering", desc: "Building the landing pages, opt-in forms, and thank you pages." },
      { title: "Automation Setup", desc: "Connecting the forms to your CRM and writing the 5-day email sequence." }
    ],
    faqs: [
      { q: "Do you run the ads as well?", a: "We focus exclusively on building the conversion infrastructure. You or your media buyer will drive traffic to the systems we build." }
    ]
  },
  "chatbots": { 
    title: "Custom AI Chatbots", 
    subtitle: "24/7 intelligent customer support.", 
    description: "Train an AI on your company data to answer queries perfectly. Stop losing sales because a customer had a question at 2 AM. Our chatbots act like your best sales rep, available around the clock.", 
    features: ["Custom Knowledge Base Training", "Website Integration", "Human Handoff Protocols", "Multi-language Support", "Lead Capture Capabilities", "WhatsApp Integration"],
    imageUrl: "/images/mobile_app.png",
    workflowSteps: [
      { title: "Data Ingestion", desc: "We scrape your website, PDFs, and past support tickets to build the AI's brain." },
      { title: "Prompt Tuning", desc: "Configuring the bot's personality and restrictions so it stays on-brand." },
      { title: "Widget Deployment", desc: "Embedding the chat interface directly into your website." }
    ],
    testimonials: [
      { name: "Ananya D.", role: "E-com Owner", review: "The bot answers 90% of sizing and shipping queries instantly. Our support costs dropped drastically." }
    ]
  },
  "ai-agents": { 
    title: "Autonomous AI Agents", 
    subtitle: "Digital employees that execute tasks.", 
    description: "Deploy advanced AI agents capable of multi-step reasoning and action. These aren't just chatbots; they are autonomous programs that can research competitors, scrape websites, and draft proposals without human intervention.", 
    features: ["Task Execution", "Web Scraping & Research", "Autonomous Outreach", "Data Analysis", "Custom Tool Usage (APIs)"],
    imageUrl: "/images/training_class.png",
    faqs: [
      { q: "How is an agent different from a chatbot?", a: "A chatbot just talks. An agent takes action—it can browse the web, write to a database, or send an email on its own based on a goal you give it." }
    ]
  },
  "ecommerce-growth": { 
    title: "E-commerce Growth", 
    subtitle: "Scale your store intelligently.", 
    description: "Data-driven systems to increase AOV (Average Order Value) and LTV (Lifetime Value). We implement advanced email marketing, SMS flows, and AI product recommendations.", 
    features: ["Abandoned Cart Recovery AI", "Personalized Product Recommendations", "Inventory Sync Automation", "Post-Purchase Upsell Flows", "VIP Customer Segmentation"],
    imageUrl: "/images/services_tech.png",
    workflowSteps: [
      { title: "Store Audit", desc: "Analyzing your conversion rate drops and abandoned cart metrics." },
      { title: "Flow Implementation", desc: "Setting up Klaviyo/Omnisend automated email and SMS sequences." },
      { title: "Conversion Optimization", desc: "Tweaking the checkout process and adding one-click upsells." }
    ]
  }
};

export const resourcesData: Record<string, PageContent> = {
  "blog": { title: "The ParvInfoSoft Blog", subtitle: "Insights from the frontier of AI.", description: "Read our latest articles on AI automation, web development, and digital scaling.", features: ["Weekly Updates", "Deep Dives", "Case Studies"] },
  "tools": { title: "Free Tools", subtitle: "Accelerate your workflow.", description: "Access our internal library of prompt templates, automation blueprints, and calculators.", features: ["Prompt Library", "ROI Calculator", "Audit Checklists"] },
  "case-studies": { title: "Case Studies", subtitle: "Real results.", description: "See exactly how we've helped businesses increase revenue and cut costs using AI.", features: ["Revenue Breakdowns", "Architecture Overviews", "Client Interviews"] },
  "faqs": { 
    title: "Frequently Asked Questions", 
    subtitle: "Everything you need to know.", 
    description: "Find answers about our training programs, agency services, and pricing.", 
    features: ["Admissions Info", "Service Timelines", "Payment Plans"],
    imageUrl: "/images/solutions_dashboard.png",
    faqs: [
      { q: "How do I get started with a service?", a: "Click the 'Get Started' button anywhere on the site and fill out the Business Services form. Our team will contact you within 24 hours." },
      { q: "Are the training programs pre-recorded?", a: "Most of our foundational courses are high-quality pre-recorded videos, while our workshops are conducted live via Zoom." },
      { q: "Do you offer refunds on training?", a: "We offer a 7-day money-back guarantee on all our recorded training programs if you have completed less than 20% of the content." },
      { q: "Where is your office located?", a: "We are headquartered in Surat, Gujarat, but we serve clients and students globally." }
    ]
  },
  "support": { 
    title: "Contact Support", 
    subtitle: "We're here to help.", 
    description: "Need assistance with your account or have a specific business inquiry? Reach out to our dedicated support team.", 
    features: ["Priority Email Support", "WhatsApp Support", "Extensive Knowledge Base", "1-on-1 Consultation Calls"],
    imageUrl: "/images/mobile_app.png"
  }
};
