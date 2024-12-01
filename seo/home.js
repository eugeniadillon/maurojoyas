import Head from "next/head";

const SeoHome = () => {
  return (
    <Head>
      <title>Mauro Joyas | Cotización Online</title>
      <meta
        name="description"
        content="Cotizá tus joyas de manera rápida y segura con Mauro Joyas. Completa el formulario en línea y recibe una cotización preliminar por parte de nuestros expertos."
      />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="robots" content="index,follow" />
      <link rel="icon" href="/favicon.ico" />
      <link rel="canonical" href="https://www.maurojoyas.com.ar" />

      <meta property="og:locale" content="es_ES" />
      <meta property="og:type" content="article" />
      <meta property="og:site_name" content="Mauro Joyas" />
      <meta property="og:title" content="Mauro Joyas | Cotización Online" />
      <meta
        property="og:description"
        content="Cotizá tus joyas de manera rápida y segura con Mauro Joyas. Completa el formulario en línea y recibe una cotización preliminar por parte de nuestros expertos."
      />
      <meta property="og:url" content="https://www.maurojoyas.com.ar" />
      <meta
        property="og:image"
        content="https://www.maurojoyas.com.ar/maurojoyas.png"
      />
      <meta name="title" content="Mauro Joyas | Cotización Online" />
      <meta
        name="keywords"
        content="joyas, cotización de joyas, tasación de joyas, oro, plata, diamantes, valor de joyas, venta de joyas, expertos en joyería, Mauro Joyas, tasación online, cotización segura"
      />
      <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
      <meta name="language" content="Spanish" />
      <meta name="author" content="Mauro Joyas" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Mauro Joyas | Cotización Online" />
      <meta
        name="twitter:description"
        content="Cotizá tus joyas de manera rápida y segura con Mauro Joyas. Completa el formulario en línea y recibe una cotización preliminar por parte de nuestros expertos."
      />
      <meta
        name="twitter:image"
        content="https://www.maurojoyas.com.ar/maurojoyas.png"
      />

      {/* Schema Markup */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org/",
          "@type": "Organization",
          name: "Mauro Joyas",
          description:
            "Cotizá tus joyas de manera rápida y segura con Mauro Joyas. Completa el formulario en línea y recibe una cotización preliminar por parte de nuestros expertos.",
          url: "https://www.maurojoyas.com.ar",
          logo: "https://www.maurojoyas.com.ar/maurojoyas.png",
          sameAs: [
            "https://www.instagram.com/maurojoyas/",
            "https://www.facebook.com/maurojoyas",
          ],
          contactPoint: {
            "@type": "ContactPoint",
            telephone: "+54-11-1234-5678",
            contactType: "Customer Service",
          },
        })}
      </script>
    </Head>
  );
};

export default SeoHome;
