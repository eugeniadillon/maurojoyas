import Head from "next/head";

const SeoCotizacionOnline = () => {
  return (
    <Head>
      <title>Cotización Online | Mauro Joyas</title>
      <meta
        name="description"
        content="Solicitá la cotización de tus joyas de forma rápida y online. Subí tus fotos, describí tus piezas y recibí una cotización preliminar. Mauro Joyas, expertos en tasación."
      />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="robots" content="index,follow" />
      <link rel="icon" href="/favicon.ico" />
      <link rel="canonical" href="https://www.maurojoyas.com.ar/cotizacion" />

      <meta property="og:locale" content="es_ES" />
      <meta property="og:type" content="article" />
      <meta property="og:site_name" content="Mauro Joyas" />
      <meta property="og:title" content="Cotización Online | Mauro Joyas" />
      <meta
        property="og:description"
        content="Solicitá la cotización de tus joyas de forma rápida y online. Subí tus fotos, describí tus piezas y recibí una cotización preliminar. Mauro Joyas, expertos en tasación."
      />
      <meta
        property="og:url"
        content="https://www.maurojoyas.com.ar/cotizacion"
      />
      <meta
        property="og:image"
        content="https://www.maurojoyas.com.ar/cotizacion-online.png"
      />
      <meta name="title" content="Cotización Online | Mauro Joyas" />
      <meta
        name="keywords"
        content="cotización online, tasación de joyas, subí fotos de joyas, describí tus joyas, cotización preliminar, expertos en joyería, Mauro Joyas, venta de joyas, valoración de piezas, tasación segura"
      />
      <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
      <meta name="language" content="Spanish" />
      <meta name="author" content="Mauro Joyas" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Cotización Online | Mauro Joyas" />
      <meta
        name="twitter:description"
        content="Solicitá la cotización de tus joyas de forma rápida y online. Subí tus fotos, describí tus piezas y recibí una cotización preliminar. Mauro Joyas, expertos en tasación."
      />
      <meta
        name="twitter:image"
        content="https://www.maurojoyas.com.ar/cotizacion-online.png"
      />

      {/* Schema Markup */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org/",
          "@type": "WebPage",
          name: "Cotización Online | Mauro Joyas",
          description:
            "Solicitá la cotización de tus joyas de forma rápida y online. Subí tus fotos, describí tus piezas y recibí una cotización preliminar. Mauro Joyas, expertos en tasación.",
          url: "https://www.maurojoyas.com.ar/cotizacion",
          image: "https://www.maurojoyas.com.ar/cotizacion-online.png",
          publisher: {
            "@type": "Organization",
            name: "Mauro Joyas",
            logo: {
              "@type": "ImageObject",
              url: "https://www.maurojoyas.com.ar/maurojoyas.png",
            },
          },
        })}
      </script>
    </Head>
  );
};

export default SeoCotizacionOnline;
