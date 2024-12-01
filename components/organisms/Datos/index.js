const datos = [
  {
    name: "Seguridad y respaldo",
    imageUrl: "/item01.webp",
  },
  {
    name: "Tasadores calificados",
    imageUrl: "/item02.webp",
  },
  {
    name: "Transparencia avalada",
    imageUrl: "/item03.webp",
  },
  {
    name: "Lun a vie 10 a 18hs.",
    imageUrl: "/item04.webp",
  },
  {
    name: "Mejor cotización",
    imageUrl: "/item05.webp",
  },
  {
    name: "Efectivo en el acto",
    imageUrl: "/item06.webp",
  },
];

export const Datos = () => {
  return (
    <div className="bg-gradient-to-b from-black via-[#111111] to-[#FFCC00]/20 py-24 sm:py-32 text-white flex flex-col items-center">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
        <h2
          className="text-4xl font-semibold tracking-tight text-[#FFCC00] sm:text-5xl"
          data-aos="fade-up"
        >
          Nuestros Compromisos
        </h2>
        <p className="mt-6 text-lg text-white" data-aos="fade-up">
          En Mauro Joyas garantizamos confianza, profesionalismo y el mejor
          servicio para ti.
        </p>
      </div>
      <ul
        role="list"
        className="mt-20 grid max-w-4xl grid-cols-2 gap-x-8 gap-y-16 text-center sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6"
      >
        {datos.map((item) => (
          <li key={item.name} data-aos="zoom-in">
            <img
              alt=""
              src={item.imageUrl}
              className="mx-auto h-24 w-24 rounded-full"
            />
            <h3 className="mt-6 text-base font-semibold tracking-tight text-white">
              {item.name}
            </h3>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Datos;
