import Head from "next/head"; // Si estás usando Next.js

export default function Home() {
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Compra y Vende Joyas | MAURO JOYAS</title>
        <link rel="stylesheet" href="styles.css" />
      </Head>

      <header>
        <h1> VALE ORO </h1>
        <h2>Compra y Vende oro</h2>
        <h3>Transforma tus joyas de calidad en efectivo</h3>
      </header>

      <section className="galeria">
        <h3>Nuestras Joyas</h3>
        <div className="imagenes">
          <img src="joya1.jpg" alt="Joya 1" />
          <img
            src="https://www.google.com/imgres?imgurl=https://orocash.ec/wp-content/uploads/2024/05/12-scaled.jpg&imgrefurl=https://orocash.ec/&h=2560&w=2560&tbnid=zQSswbkTavezIM&source=sa.im&tbnh=225&tbnw=225&usg=AI4_-kSDtO1QDywP8T02TIzNWh4CydPddw&vet=1&docid=oLON5tSRbk6WiM"
            alt="Joya 2"
          />
          <img src="joya3.jpg" alt="Joya 3" />
        </div>
      </section>

      <section className="descripcion">
        <p>
          En MAURO JOYAS, Compramos al mejor precio y de manera segura. Ya sea
          que desees vender una pieza antigua o actualizar tu colección, estamos
          aquí para ayudarte.
        </p>
      </section>

      <section className="contacto">
        <h3>¿Tienes Joyas que Vender?</h3>
        <p>
          Llámanos al: <strong>[+54 9 11 5899-3547]</strong>
        </p>
        <button onClick={() => (window.location.href = "tel:+5491158993547")}>
          Contáctanos Ahora
        </button>

        <form action="enviar_formulario.php" method="POST">
          <label htmlFor="nombre">Nombre:</label>
          <input type="text" id="nombre" name="nombre" required />

          <label htmlFor="email">Correo Electrónico:</label>
          <input type="email" id="email" name="email" required />

          <label htmlFor="telefono">Teléfono:</label>
          <input type="tel" id="telefono" name="telefono" required />

          <label htmlFor="descripcion">
            Descripción de la Joya (opcional):
          </label>
          <textarea id="descripcion" name="descripcion"></textarea>

          <button type="submit">Enviar</button>
        </form>
      </section>

      <section className="testimonios">
        <h3>Lo que dicen nuestros clientes</h3>
        <blockquote>
          "Servicio excepcional y atención al cliente. ¡Altamente recomendado!"
        </blockquote>
        <blockquote>
          "Valoraciones justas y un proceso muy transparente."
        </blockquote>
      </section>

      <footer>
        <p>Síguenos en nuestras redes sociales:</p>
        <a href="[enlace a Facebook]">Facebook</a>
        <a href="[enlace a Instagram]">Instagram</a>
        {/* Agrega más enlaces de redes sociales */}
        <p>&copy; 2024 [MAURO JOYAS]. Todos los derechos reservados.</p>
      </footer>
    </>
  );
}
