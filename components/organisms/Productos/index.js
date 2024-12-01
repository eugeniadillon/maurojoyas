const item = [
  {
    name: "Monedas",
    role: "Compramos monedas de oro y plata. Tenemos un mercado de coleccionistas interesados en adquirir monedas de oro y plata fina, muchos de ellos atraídos por su valor comercial y otros por su valor histórico.",
    imageUrl: "/categoria01.webp",
  },
  {
    name: "Alhajas",
    role: "Compramos toda clase de alhajas: anillos, pulseras, aros, cadenas, broches, joyas, prendedores, y objetos de metales nobles, sin importar el estado en el que se encuentre la pieza. Nuestras tasaciones no tienen mínimo.",
    imageUrl: "/categoria02.webp",
  },
  {
    name: "Lingos",
    role: "Compramos lingotes de Oro Cast (Lingotes Fundidos con Molde), Lingotes de Oro Minted (Lingotes Acuñados), Lingotes de Oro Nacionales y Lingotes de Oro Suizo entre otros. La mejor cotización del mercado en lingos.",
    imageUrl: "/categoria03.webp",
  },
  {
    name: "Brillantería",
    role: "Compramos todo tipo de brillantes de distintos colores, quilates y niveles de pureza, ya sean sueltos o incorporados en una joya. No dejes de consultarnos para que podamos ofrecerte el mejor valor.",
    imageUrl: "/categoria04.webp",
  },
  {
    name: "Relojería",
    role: "Compramos relojes modernos y antiguos de primeras marcas: Rolex, Patek Philippe, Vacheron Constantin, Tag Heuer, Cartier, Longines, Audemars Piguet, Hublot, Omega, entre otros.",
    imageUrl: "/categoria05.webp",
  },
  {
    name: "Platería",
    role: "Compramos  cubiertos , vajillas , bandejas, juegos de té y antigüedades de plata. El valor de su platería se determina en base al tipo de objetos, su país de origen, diseño, si es un set completo o no y su estado de conservación",
    imageUrl: "/categoria06.webp",
  },
];

export const Productos = () => {
  return (
    <div className="bg-gradient-to-b from-black via-black to-[#FFCC00]/10 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 text-center lg:px-8">
        <div className="mx-auto max-w-2xl" data-aos="fade-up">
          <h2 className="text-balance text-4xl font-semibold tracking-tight text-[#FFCC00] sm:text-5xl">
            Categorías
          </h2>
          <p className="mt-6 text-lg/8 text-white">COMPRA & VENTA</p>
        </div>
        <ul
          role="list"
          className="mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-6 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-8"
        >
          {item.map((items) => (
            <li
              key={items.name}
              className="rounded-2xl bg-black border border-[#FFCC00] px-8 py-10"
              data-aos="fade-right"
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

export default Productos;
