"use client";

import { useEffect, useState } from "react";
import Script from "next/script";

export default function TrackingScripts() {
  const [consent, setConsent] = useState(null);

  useEffect(() => {
    try {
      const value = localStorage.getItem("cookie_consent");
      setConsent(value);
    } catch (e) {
      setConsent(null);
    }

    // Atualizar quando o modal de consentimento emitir o evento
    function onConsentUpdate() {
      try {
        const v = localStorage.getItem("cookie_consent");
        setConsent(v);
      } catch {
        // ignore
      }
    }
    if (typeof window !== "undefined") {
      window.addEventListener("cookie-consent", onConsentUpdate);
    }

    return () => {
      if (typeof window !== "undefined") {
        window.removeEventListener("cookie-consent", onConsentUpdate);
      }
    };
  }, []);

  if (consent !== "aceito") return null;

  return (
    <>
      {/* Google Analytics */}
      <Script src="https://www.googletagmanager.com/gtag/js?id=G-1QTM69VDTQ" strategy="afterInteractive" />
      <Script id="ga-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);} 
          gtag('js', new Date());
          gtag('config', 'G-1QTM69VDTQ', { page_path: window.location.pathname });
        `}
      </Script>

      {/* Microsoft Clarity */}
      <Script id="microsoft-clarity" strategy="afterInteractive">
        {`
          (function(c,l,a,r,i,t,y){
              c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
              t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
              y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
          })(window, document, "clarity", "script", "tqlmagzqxk");
        `}
      </Script>

      {/* Meta Pixel */}
      <Script id="fb-pixel" strategy="afterInteractive">
        {`
          !function(f,b,e,v,n,t,s){
            if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)
          }(window, document,'script','https://connect.facebook.net/en_US/fbevents.js');
          fbq('init', 'FB_PIXEL_ID');
          fbq('track', 'PageView');
        `}
      </Script>
      <noscript>
        <img
          height="1"
          width="1"
          style={{ display: "none" }}
          src="https://www.facebook.com/tr?id=FB_PIXEL_ID&ev=PageView&noscript=1"
          alt=""
        />
      </noscript>
    </>
  );
}