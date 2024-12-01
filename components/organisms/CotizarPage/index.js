const item = [
  {
    name: "Subí la foto",
    role: "Sacá las fotos preferentemente con un fondo claro y evitá fotos borrosas o que no se vea la pieza claramente. También recomendamos sacar fotos de frente, atrás y los costados.",
    imageUrl: "/step01.webp",
  },
  {
    name: "Describí tu pieza",
    role: "Envianos toda la información disponible de la pieza como fecha estimada y lugar de compra, sellos o números que no se puedan ver bien en las fotos y valor estimado de venta.",
    imageUrl: "/step02.webp",
  },
  {
    name: "Cotizá seguro",
    role: "Recibí una cotización preliminar de tus piezas. Nuestros expertos te contactarán para concertar una cita y realizar una tasación final que se pagará en el instante.",
    imageUrl: "/step03.webp",
  },
];

export const CotizarPage = () => {
  return (
    <div className="bg-gradient-to-b from-black via-black to-[#FFCC00]/10 py-8 sm:py-10">
      <div className="mx-auto max-w-7xl px-6 text-center lg:px-8">
        <div className="mx-auto max-w-2xl">
          <h2
            className="text-balance text-4xl font-semibold tracking-tight text-[#FFCC00] sm:text-5xl"
            data-aos="zoom-in"
          >
            Cotizar Online
          </h2>
          <p
            className="mt-6 text-lg/8 text-white"
            data-aos="zoom-in"
            data-aos-delay="500"
          >
            Tasamos tus joyas Online
            <br />
            Facilmente sin cargo
            <br />
            Desde la comodidad de tu casa
          </p>
        </div>
        <ul
          role="list"
          className="mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-6 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-8"
        >
          {item.map((items) => (
            <li
              key={items.name}
              className="rounded-2xl bg-black border border-[#FFCC00] px-8 py-10"
              data-aos="zoom-in-up"
            >
              <img
                alt=""
                src={items.imageUrl}
                className="mx-auto w-full h-auto rounded-2xl"
              />
              <h3 className="mt-6 text-base/7 font-semibold tracking-tight text-[#FFCC00]">
                {items.name}
              </h3>
              <p className="text-sm/6 text-white">{items.role}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CotizarPage;
