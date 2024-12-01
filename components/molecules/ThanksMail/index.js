export const ThanksMail = ({ handleClick }) => {
  return (
    <div className="flex w-full flex-col items-center py-24" data-aos="zoom-in">
      <img src="/mail-sent.svg" alt="mail" className="w-[150px]" />
      <h1 className="text-[#ffcc00] mt-10 text-3xl text-center">
        Gracias por tu mensaje
      </h1>
      <p className="text-white mt-4 text-xl text-center">
        Tu solicitud ha sido recibido y te responderemos a la mayor brevedad
        posible.
      </p>
      <div className="flex w-full justify-center mt-8">
        <button
          type="button"
          onClick={handleClick}
          className="-m-2.5 rounded-md py-2.5 px-6 text-[#000] mt-6 bg-[#ffcc00] w-fit hover:opacity-90"
        >
          Enviar otro mensaje
        </button>
      </div>
    </div>
  );
};

export default ThanksMail;
