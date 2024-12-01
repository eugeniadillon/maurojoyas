import { XCircleIcon } from "../../atoms/Icons";

export const Alert = ({ handleClick }) => {
  return (
    <div className="flex w-full flex-col items-center py-24" data-aos="zoom-in">
      <div className="flex-shrink-0">
        <XCircleIcon className="w-[150px] text-[#ffcc00]" aria-hidden="true" />
      </div>
      <h1 className="text-[#ffcc00] mt-10 text-3xl text-center">
        Error al enviar su solicitud
      </h1>
      <p className="text-white mt-4 text-xl text-center">
        Error al enviar su consulta, por favor intenta nuevamente.
      </p>
      <div className="flex w-full justify-center mt-8">
        <button
          type="button"
          onClick={handleClick}
          className="-m-2.5 rounded-md py-2.5 px-6 text-[#000] mt-6 bg-[#ffcc00] w-fit hover:opacity-90"
        >
          Intentar nuevamente
        </button>
      </div>
    </div>
  );
};

export default Alert;
