import "@/styles/globals.css";
import "@/styles/whatsApp.css";
import LayoutGral from "@/components/templates/LayoutGral";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
config.autoAddCss = false;
import Aos from "aos";
import { FloatingWhatsApp } from "@/components";

export default function App({ Component, pageProps }) {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <>
      <LayoutGral>
        <Component {...pageProps} />
        <FloatingWhatsApp />
      </LayoutGral>
    </>
  );
}
