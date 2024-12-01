export const QuienesSomos = () => {
  return (
    <div className="overflow-hidden bg-black py-32">
      <div className="mx-auto max-w-7xl px-6 lg:flex lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-12 gap-y-16 lg:mx-0 lg:min-w-full lg:max-w-none lg:flex-none lg:gap-y-8">
          <div className="lg:col-end-1 lg:w-full lg:max-w-lg lg:pb-8">
            <h2 className="text-4xl font-playfair font-semibold tracking-tight text-[#FFCC00] sm:text-5xl">
              Mauro Joyas
            </h2>
            <p className="mt-6 text-xl/8 text-white">
              Con más de 50 años de experiencia, ofrecemos a nuestros clientes
              la máxima seguridad y el mejor precio del mercado.
            </p>
            <p className="mt-6 text-base/7 text-white">
              Contamos con un equipo de expertos examinará y cotizará a precios
              internacionales sus objetos de valor.
            </p>
            <p className="mt-6 text-base/7 text-white">
              Ubicados en CABA, Lugones 218, en el barrio de Belgrano puede
              enviarnos un mensaje para realizarnos su consulta.
            </p>
            <div className="mt-10 flex">
              <a
                href="https://wa.me/541158959823"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-md bg-black px-3.5 py-2.5 text-sm font-semibold text-[#FFCC00] shadow-sm border border-[#FFCC00] hover:bg-[#FFCC00] hover:text-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Contacto
              </a>
            </div>
          </div>
          <div className="flex flex-wrap items-start justify-end gap-6 sm:gap-8 lg:contents">
            <div
              className="w-0 flex-auto lg:ml-auto lg:w-auto lg:flex-none lg:self-end"
              data-aos="fade-up"
            >
              <img
                alt="joya01"
                src="/joya01.webp"
                className="aspect-[7/5] w-[37rem] max-w-none rounded-2xl bg-gray-50 object-cover"
              />
            </div>
            <div className="contents lg:col-span-2 lg:col-end-2 lg:ml-auto lg:flex lg:w-[37rem] lg:items-start lg:justify-end lg:gap-x-8">
              <div
                className="order-first flex w-64 flex-none justify-end self-end lg:w-auto"
                data-aos="fade-up"
              >
                <img
                  alt="joya02"
                  src="/joya02.webp"
                  className="aspect-[4/3] w-[24rem] max-w-none flex-none rounded-2xl bg-gray-50 object-cover"
                />
              </div>
              <div
                className="flex w-96 flex-auto justify-end lg:w-auto lg:flex-none"
                data-aos="fade-up"
              >
                <img
                  alt="joya03"
                  src="/joya03.png"
                  className="aspect-[7/5] w-[37rem] max-w-none flex-none rounded-2xl bg-gray-50 object-cover"
                />
              </div>
              <div
                className="hidden sm:block sm:w-0 sm:flex-auto lg:w-auto lg:flex-none"
                data-aos="fade-up"
              >
                <img
                  alt="joya04"
                  src="joya04.png"
                  className="aspect-[4/3] w-[24rem] max-w-none rounded-2xl bg-gray-50 object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuienesSomos;
