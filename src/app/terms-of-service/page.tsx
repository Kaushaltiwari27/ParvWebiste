import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Terms of Service | ParvInfoSoft",
  description: "Read the Terms of Service and user agreements for ParvInfoSoft's IT solutions and AI training programs.",
};

export default function TermsOfServicePage() {
  return (
    <div className="min-h-screen bg-black text-white font-general selection:bg-accent-electric selection:text-white">
      <Navbar />
      
      <main className="pt-40 pb-24 container mx-auto px-6 max-w-4xl">
        <div className="prose prose-invert prose-lg max-w-none">
          <h1 className="text-4xl md:text-5xl font-medium mb-12">Terms of Service</h1>
          <p className="text-white/60 mb-8">Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}</p>

          <section className="mb-12">
            <h2 className="text-2xl font-medium text-white mb-4">1. Agreement to Terms</h2>
            <p className="text-white/70 leading-relaxed">
              These Terms of Service constitute a legally binding agreement made between you, whether personally or on behalf of an entity ("you") and ParvInfoSoft ("Company", "we", "us", or "our"), 
              concerning your access to and use of our website as well as any other media form, related services, or training programs. 
              By accessing our services, you agree that you have read, understood, and agreed to be bound by all of these Terms of Service.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-medium text-white mb-4">2. Services and Training Programs</h2>
            <p className="text-white/70 leading-relaxed mb-4">
              ParvInfoSoft operates as a dual-entity providing both IT solutions and educational training:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-white/70">
              <li><strong>Educational Training:</strong> We offer courses related to AI automation, prompt engineering, and digital skills. Course materials, curriculum, and strategies shared are intellectual property of ParvInfoSoft and may not be redistributed.</li>
              <li><strong>IT Services:</strong> We provide web development, app development, CRM/ERP implementation, and AI automation for businesses. Service timelines, deliverables, and exact pricing are defined in individual client contracts.</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-medium text-white mb-4">3. User Representations</h2>
            <p className="text-white/70 leading-relaxed mb-4">
              By using our Site and Services, you represent and warrant that:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-white/70">
              <li>All registration information you submit will be true, accurate, current, and complete.</li>
              <li>You will maintain the accuracy of such information and promptly update it as necessary.</li>
              <li>You have the legal capacity and you agree to comply with these Terms of Service.</li>
              <li>You will not access the Site through automated or non-human means (e.g., scraping), unless permitted by us in writing.</li>
              <li>You will not use the Site or our Services for any illegal or unauthorized purpose.</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-medium text-white mb-4">4. Intellectual Property Rights</h2>
            <p className="text-white/70 leading-relaxed">
              Unless otherwise indicated, the Site and all source code, databases, functionality, software, website designs, audio, video, text, photographs, and graphics on the Site 
              (collectively, the "Content") and the trademarks, service marks, and logos contained therein are owned or controlled by us or licensed to us, 
              and are protected by copyright and trademark laws.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-medium text-white mb-4">5. Modifications and Interruptions</h2>
            <p className="text-white/70 leading-relaxed">
              We reserve the right to change, modify, or remove the contents of the Site at any time or for any reason at our sole discretion without notice. 
              We cannot guarantee the Site will be available at all times. We may experience hardware, software, or other problems or need to perform maintenance related to the Site, resulting in interruptions, delays, or errors.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-medium text-white mb-4">6. Governing Law</h2>
            <p className="text-white/70 leading-relaxed">
              These conditions are governed by and interpreted following the laws of India, and the use of the United Nations Convention of Contracts for the International Sale of Goods is expressly excluded. 
              If your habitual residence is in the EU, and you are a consumer, you additionally possess the protection provided to you by obligatory provisions of the law of your country of residence. 
              ParvInfoSoft and yourself both agree to submit to the non-exclusive jurisdiction of the courts of Surat, Gujarat, India.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-medium text-white mb-4">7. Contact Information</h2>
            <p className="text-white/70 leading-relaxed">
              In order to resolve a complaint regarding the Site or to receive further information regarding use of the Site, please contact us at: <br/><br/>
              <strong>Email:</strong> parvinfosoftacademy@gmail.com<br/>
              <strong>Phone:</strong> +91 90815 53331<br/>
            </p>
          </section>

        </div>
      </main>

      <Footer />
    </div>
  );
}
