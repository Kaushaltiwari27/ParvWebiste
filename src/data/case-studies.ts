export interface CaseStudyContent {
  slug: string;
  title: string;
  subtitle: string;
  client: string;
  location: string;
  challenge: string;
  executiveSummary: string;
  techStack: { name: string; desc: string }[];
  architecture: {
    title: string;
    description: string;
    codeSnippet?: { language: string; code: string };
  }[];
  security: { title: string; desc: string }[];
  metrics: { label: string; preValue: string; postValue: string }[];
  conclusion: string;
}

export const caseStudiesData: Record<string, CaseStudyContent> = {
  "ai-hospital-receptionist": {
    slug: "ai-hospital-receptionist",
    title: "AI Voice Receptionist for Healthcare Infrastructure",
    subtitle: "Architecting a low-latency, autonomous patient intake and scheduling agent.",
    client: "Surat Metro Healthcare Group",
    location: "Surat, Gujarat, India",
    challenge: "Managing high-volume patient inquiries, verifying complex insurance details, and handling calendar logistics manually, which caused long hold times, front-desk staff fatigue, and booking errors.",
    executiveSummary: "Managing high-volume patient inquiries, verifying complex insurance details, and handling calendar logistics create significant bottlenecks for healthcare facilities. This project outlines the development of a fully autonomous, low-latency AI voice agent capable of executing sophisticated scheduling workflows and real-time database queries without human intervention.",
    techStack: [
      { 
        name: "Retell AI", 
        desc: "Conversational Interface providing sub-800ms latency, WebSocket-driven real-time audio streams, and human-like interruption handling (barge-in)." 
      },
      { 
        name: "Custom LLM (Fine-tuned)", 
        desc: "Cognitive engine fine-tuned on medical scheduling protocols and structured data formats, with built-in HIPAA-compliant data masking." 
      },
      { 
        name: "n8n Orchestration", 
        desc: "Self-hosted workflow manager acting as the central nervous system, connecting WebSockets, database systems, and third-party APIs." 
      },
      { 
        name: "Cal.com API", 
        desc: "Headless booking engine utilized for absolute calendar synchronization, slot locking, and availability checking via RESTful endpoints." 
      }
    ],
    architecture: [
      {
        title: "1. The Inbound Trigger & Intent Parsing (Retell AI + LLM)",
        description: "The system intercepts inbound patient calls using a dedicated SIP trunk routed to Retell AI. Instead of traditional, rigid IVR menus, the AI uses natural language understanding. The LLM is structured with a strict system prompt to classify the caller's intent into three distinct categories: New Appointment, Reschedule/Cancellation, or General Inquiry. The agent is programmed to handle natural conversational interruptions (barge-ins) smoothly, ensuring a premium patient experience.",
        codeSnippet: {
          language: "json",
          code: `{
  "agent_id": "agent_healthcare_receptionist_prod",
  "llm_config": {
    "model": "custom-fine-tuned-llama-70b",
    "temperature": 0.1,
    "system_prompt": "You are a professional medical receptionist. Route queries: 1. NEW_APP, 2. RESCHEDULE, 3. INQUIRY. Always ask for Patient Name, Date of Birth, and Insurance ID when booking."
  },
  "voice_id": "premium_conversational_female_indian",
  "ambient_noise": "clinic_lobby_soft"
}`
        }
      },
      {
        title: "2. Intelligent Orchestration & Data Verification (n8n)",
        description: "Once the caller's intent is established, n8n takes over the data processing via secure webhooks. n8n parses the JSON payload from the voice agent, extracting entities like Patient Name, Date of Birth, and Insurance Provider. Using n8n's Switch nodes, the workflow forks. If insurance verification is required, an HTTP Request node pings the hospital’s internal CRM or a third-party healthcare API. n8n instantly returns the verification status back to Retell AI. If the insurance is invalid, the agent politely informs the patient and offers alternative payment pathways.",
        codeSnippet: {
          language: "javascript",
          code: `// n8n Javascript Node for Insurance ID Verification
const insuranceId = items[0].json.body.insurance_id;
const patientDob = items[0].json.body.dob;

// Mock verification call payload to internal Surat Hospital ERP
const response = await fetch("https://erp.surathealthcare.org/api/v1/insurance/verify", {
  method: "POST",
  headers: { "Content-Type": "application/json", "Authorization": "Bearer " + env.API_KEY },
  body: JSON.stringify({ insuranceId, patientDob })
});

const data = await response.json();
return {
  json: {
    verified: data.status === "ACTIVE",
    provider: data.carrier_name,
    copay: data.copay_amount
  }
};`
        }
      },
      {
        title: "3. Headless Scheduling Engine (Cal.com API)",
        description: "For successful verifications, the system transitions to scheduling. n8n executes a GET request to the Cal.com /availability endpoint to fetch open slots for the requested specialist. The voice agent reads out 2-3 immediate options to the patient. Upon verbal confirmation, n8n sends a POST request to the /bookings endpoint, passing the patient's parsed data to lock the slot. A subsequent n8n node triggers an automated confirmation message (via WhatsApp/SMS API) containing the digital calendar invite and clinic coordinates.",
        codeSnippet: {
          language: "json",
          code: `// POST https://api.cal.com/v1/bookings
{
  "eventTypeId": 4019,
  "start": "2026-07-05T10:30:00+05:30",
  "end": "2026-07-05T11:00:00+05:30",
  "responses": {
    "name": "Amit Sharma",
    "email": "amit.sharma@gmail.com",
    "notes": "Intake completed by AI Receptionist. Insurance verified: LIC Health."
  },
  "metadata": {
    "source": "AI_Receptionist_Retell"
  }
}`
        }
      }
    ],
    security: [
      {
        title: "Fallback Human Handoff Protocol",
        desc: "If the LLM confidence score drops below 75% (e.g., due to background noise or accent differences), n8n automatically bridges the call to a human receptionist. The human receptionist dashboard displays the real-time transcript context, preventing the caller from having to repeat themselves."
      },
      {
        title: "Timezone Normalization (IST/UTC)",
        desc: "To prevent appointment shifts, all date-time inputs are converted to UTC dynamically inside n8n before pushing to Cal.com, and translated back to Indian Standard Time (IST) when verbalized by the Retell AI voice agent."
      },
      {
        title: "HIPAA-Compliant Data Masking",
        desc: "The fine-tuned LLM includes strict system guardrails that automatically mask sensitive medical history or diagnoses (PHI) from log systems, retaining only structural booking and insurance verification entities."
      }
    ],
    metrics: [
      { label: "Average Hold Time", preValue: "4.5 Minutes", postValue: "0 Seconds (Concurrent handling)" },
      { label: "Booking Accuracy", preValue: "88% (Human error prone)", postValue: "100% (API-driven logic)" },
      { label: "System Uptime", preValue: "Office Hours Only", postValue: "24/7/365" },
      { label: "Front-Desk Load", preValue: "100% manual handling", postValue: "75% reduction in call volume" }
    ],
    conclusion: "By decoupling the communication layer (Retell AI) from the logic layer (n8n) and scheduling layer (Cal.com), this modular architecture provides a highly scalable solution. It transforms a traditional cost-center into an automated, error-free operational asset."
  }
};
