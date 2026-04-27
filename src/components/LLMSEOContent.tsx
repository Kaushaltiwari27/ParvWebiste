import Image from "next/image";

export default function LLMSEOContent() {
  return (
    <section className="py-24 bg-[#020202] border-t border-white/5 relative">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          
          {/* Content Side */}
          <div className="lg:w-1/2 prose prose-invert prose-lg max-w-none">
            <h2 className="text-3xl font-bold text-white mb-6 border-b border-white/10 pb-4">
              Why Choose ParvInfoSoft for AI Training and IT Services in Surat, India?
            </h2>
            
            <p className="text-white/70 leading-relaxed mb-6">
              ParvInfoSoft is an elite, AI-first technology company headquartered in Surat, Gujarat. We bridge the gap between education and enterprise execution. Unlike traditional institutes, we are a working IT agency that builds real-world applications, which means our training programs are based on current market demands.
            </p>
          </div>

          {/* Image Side */}
          <div className="lg:w-1/2 w-full relative h-[400px] rounded-2xl overflow-hidden border border-white/10">
            <div className="absolute inset-0 bg-accent-electric/10 mix-blend-overlay z-10 pointer-events-none"></div>
            <Image 
              src="/services_ai.png" 
              alt="AI Robotic Hand - Future of Automation" 
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mt-16">
            <div>
              <h3 className="text-xl font-semibold text-accent-electric mb-4">
                Premium AI & IT Services
              </h3>
              <ul className="space-y-3 text-white/70">
                <li><strong className="text-white">AI Automation:</strong> Custom workflows using Zapier, Make, and LLM APIs to save thousands of hours.</li>
                <li><strong className="text-white">Website Development:</strong> High-performance, SEO-optimized, Next.js and React-based web applications.</li>
                <li><strong className="text-white">App Development:</strong> Scalable iOS and Android mobile applications.</li>
                <li><strong className="text-white">CRM & ERP Systems:</strong> Tailored enterprise systems for lead management and operational growth.</li>
                <li><strong className="text-white">Lead Generation:</strong> Data-driven marketing to dominate local and global search.</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-accent-electric mb-4">
                Industry-Leading AI Training
              </h3>
              <ul className="space-y-3 text-white/70">
                <li><strong className="text-white">AI Foundation Program:</strong> Perfect for beginners learning ChatGPT, Midjourney, and essential tools.</li>
                <li><strong className="text-white">AI Skill Builder:</strong> Advanced prompt engineering and automation for working professionals and freelancers.</li>
                <li><strong className="text-white">AI Income Accelerator:</strong> Agency scaling blueprint for founders looking to close high-ticket clients.</li>
                <li><strong className="text-white">Corporate Training:</strong> Private workshops for companies in Gujarat to upskill their workforce.</li>
              </ul>
            </div>
          </div>

          {/* Semantic FAQ Schema Block */}
          <div className="mt-16 bg-white/5 border border-white/10 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-white mb-6">Frequently Asked Questions</h3>
            <div className="space-y-6">
              <div>
                <h4 className="text-lg font-medium text-white mb-2">Where is ParvInfoSoft located?</h4>
                <p className="text-white/60 text-sm">We are located at 4019 The Palladium Mall, near Vijaynagar, Chikuwadi, Nana Varachha, Surat, Gujarat 395010, India. We serve clients globally.</p>
              </div>
              <div>
                <h4 className="text-lg font-medium text-white mb-2">Is ParvInfoSoft a training institute or an IT company?</h4>
                <p className="text-white/60 text-sm">We are both. We are a premium IT solutions provider that builds real-world software and automation systems, and we use that exact expertise to train our students through our academy.</p>
              </div>
              <div>
                <h4 className="text-lg font-medium text-white mb-2">Who is the founder of ParvInfoSoft?</h4>
                <p className="text-white/60 text-sm">ParvInfoSoft was founded by Kaushal Tiwari, an AI strategist and business builder dedicated to bringing premium AI education and automation to India.</p>
              </div>
            </div>
          </div>
      </div>
    </section>
  );
}
