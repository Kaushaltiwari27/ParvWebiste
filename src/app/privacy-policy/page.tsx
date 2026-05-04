import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Privacy Policy | ParvInfoSoft",
  description: "Read the Privacy Policy of ParvInfoSoft to understand how we collect, use, and protect your data.",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-black text-white font-general selection:bg-accent-electric selection:text-white">
      <Navbar />
      
      <main className="pt-40 pb-24 container mx-auto px-6 max-w-4xl">
        <div className="prose prose-invert prose-lg max-w-none">
          <h1 className="text-4xl md:text-5xl font-medium mb-12">Privacy Policy</h1>
          <p className="text-white/60 mb-8">Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}</p>

          <section className="mb-12">
            <h2 className="text-2xl font-medium text-white mb-4">1. Introduction</h2>
            <p className="text-white/70 leading-relaxed">
              Welcome to ParvInfoSoft ("we," "our," or "us"). We are committed to protecting your personal information and your right to privacy. 
              This Privacy Policy applies to our website (parvinfosoft.com), our AI training programs, and our IT/software development services. 
              If you have any questions or concerns about our policy, or our practices with regards to your personal information, please contact us at parvinfosoftacademy@gmail.com.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-medium text-white mb-4">2. Information We Collect</h2>
            <p className="text-white/70 leading-relaxed mb-4">
              We collect personal information that you voluntarily provide to us when you:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-white/70">
              <li>Register for our AI training programs or courses.</li>
              <li>Request a consultation for business services (Web Development, CRM, Automation).</li>
              <li>Sign up for our newsletter or contact us via forms.</li>
            </ul>
            <p className="text-white/70 leading-relaxed mt-4">
              The personal information that we collect depends on the context of your interactions with us, but can include the following: 
              <strong> Names, phone numbers, email addresses, city of residence, and professional details.</strong>
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-medium text-white mb-4">3. How We Use Your Information</h2>
            <p className="text-white/70 leading-relaxed mb-4">
              We use personal information collected via our Website for a variety of business purposes described below:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-white/70">
              <li><strong>To facilitate course enrollment:</strong> Processing your application for AI Foundation, Skill Builder, or Income Accelerator programs.</li>
              <li><strong>To deliver IT services:</strong> Communicating with you regarding your CRM, App, or Web development project requirements.</li>
              <li><strong>To send administrative information:</strong> Sending product, service, and new feature information and/or information about changes to our terms, conditions, and policies.</li>
              <li><strong>To request feedback:</strong> Contacting you about your experience with our training or services.</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-medium text-white mb-4">4. Will Your Information Be Shared?</h2>
            <p className="text-white/70 leading-relaxed">
              We only share information with your consent, to comply with laws, to provide you with services, to protect your rights, or to fulfill business obligations. 
              We do not sell, rent, or trade your personal information to third parties for their promotional purposes.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-medium text-white mb-4">5. Data Security</h2>
            <p className="text-white/70 leading-relaxed">
              We have implemented appropriate technical and organizational security measures designed to protect the security of any personal information we process. 
              However, despite our safeguards and efforts to secure your information, no electronic transmission over the Internet or information storage technology can be guaranteed to be 100% secure.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-medium text-white mb-4">6. Contact Us</h2>
            <p className="text-white/70 leading-relaxed">
              If you have questions or comments about this notice, you may email us at <strong>parvinfosoftacademy@gmail.com</strong> or contact us by post at:<br/><br/>
              ParvInfoSoft<br/>
              4019 The Palladium Mall, Near Vijaynagar, Chikuwadi<br/>
              Nana Varachha, Surat, Gujarat 395010<br/>
              India
            </p>
          </section>

        </div>
      </main>

      <Footer />
    </div>
  );
}
