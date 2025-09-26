import { InlineWidget } from "react-calendly";

export default function CalendlyInline() {
  return (
    <div className="container mx-auto py-8">
      <h2 className="text-2xl font-semibold mb-4">Prendre rendez-vous</h2>
      <div style={{ minHeight: 720 }}>
        <InlineWidget
          url="https://calendly.com/TON_ORGANISATION/TON_EVENT_TYPE"
          styles={{ height: "720px", width: "100%" }}
          pageSettings={{
            backgroundColor: "ffffff",
            hideEventTypeDetails: false,
            hideGdprBanner: false,
            primaryColor: "0d6efd",
            textColor: "222222",
          }}
          prefill={{
            name: "Kevin",
            email: "kevin@example.com",
            customAnswers: { a1: "Client web", a2: "FR" },
          }}
          utm={{
            utmSource: "website",
            utmMedium: "landing",
            utmCampaign: "rdv",
          }}
        />
      </div>
    </div>
  );
}
