"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    q: "Is this beginner friendly?",
    a: "Absolutely. We start from the absolute basics of AI and gradually move into advanced automation systems. No prior coding or technical experience is required."
  },
  {
    q: "Will I get recordings?",
    a: "Yes, all live sessions are recorded and uploaded to your student portal within 24 hours. You have lifetime access to these recordings."
  },
  {
    q: "Is certificate included?",
    a: "Yes. Upon successful completion of the mastery program and your final project, you will receive an industry-recognized certificate from ParvInfoSoft."
  },
  {
    q: "Do you offer business services?",
    a: "Yes, apart from training, we operate as a full-scale IT and AI agency. We build custom CRMs, websites, apps, and AI automation workflows for businesses globally."
  },
  {
    q: "Can I learn freelancing?",
    a: "Our Income Accelerator program specifically covers how to package your AI skills, find high-paying clients, and build a scalable freelance business."
  },
  {
    q: "How can I join?",
    a: "Simply choose a plan from our pricing section and click 'Get Started', or fill out the contact form below to speak with our admissions team."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-32 bg-black relative border-t border-white/5">
      <div className="container mx-auto px-6 max-w-4xl">
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20 text-center"
        >
          <h2 className="text-[40px] md:text-[56px] font-medium text-white leading-[1.1] mb-6">
            Questions? We’ve Got Answers
          </h2>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="border border-white/10 bg-[#050505] rounded-xl overflow-hidden transition-colors hover:border-white/20"
            >
              <button
                className="w-full flex items-center justify-between p-6 text-left"
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
              >
                <span className={`text-lg font-medium transition-colors ${openIndex === i ? 'text-accent-electric' : 'text-white'}`}>
                  {faq.q}
                </span>
                <span className="text-white/50">
                  {openIndex === i ? <Minus size={20} className="text-accent-electric" /> : <Plus size={20} />}
                </span>
              </button>
              
              <AnimatePresence>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  >
                    <div className="px-6 pb-6 text-white/60 leading-relaxed">
                      {faq.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
