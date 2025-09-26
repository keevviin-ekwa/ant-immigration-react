import { PopupWidget } from "react-calendly";

export default function CalendlyPopup() {
  return (
    <>
      {/* Ton contenu */}
      <PopupWidget
        url="https://calendly.com/TON_ORGANISATION/TON_EVENT_TYPE"
        rootElement={document.getElementById("root")}
        text="Prendre rendez-vous"
        color="#0d6efd"
      />
    </>
  );
}
