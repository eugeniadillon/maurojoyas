import { useState } from "react";
import { PhotoIcon } from "@heroicons/react/24/solid";
import ThanksMail from "../../molecules/ThanksMail";
import Alert from "../../molecules/Alert";

export const FormCotizar = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    whatsapp: "",
    descripcion: "",
    files: [],
  });
  const [dragging, setDragging] = useState(false);

  const [sendState, setSendState] = useState("form");

  const handleChange = (e) => {
    const { name, value, files } = e.target;

    if (name === "whatsapp") {
      if (/^\d*$/.test(value)) {
        setFormData({ ...formData, [name]: value });
      }
    } else if (files) {
      setFormData({
        ...formData,
        files: [...formData.files, ...files],
      });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    setDragging(true);
  };

  const handleDragLeave = () => {
    setDragging(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setDragging(false);
    const droppedFiles = Array.from(e.dataTransfer.files);
    setFormData({
      ...formData,
      files: [...formData.files, ...droppedFiles],
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSendState("loading");

    const form = new FormData();
    form.append("name", formData.name);
    form.append("email", formData.email);
    form.append("whatsapp", formData.whatsapp);
    form.append("descripcion", formData.descripcion);
    formData.files.forEach((file) => {
      form.append("files", file);
    });

    try {
      const response = await fetch("/api/send", {
        method: "POST",
        body: form,
      });

      if (response.ok) {
        setSendState("success");
        setFormData({
          name: "",
          email: "",
          whatsapp: "",
          descripcion: "",
          files: [],
        });
      } else {
        setSendState("error");
      }
    } catch (error) {
      console.error("Error:", error);
      setSendState("error");
    }
  };

  const removeFile = (index) => {
    setFormData({
      ...formData,
      files: formData.files.filter((_, i) => i !== index),
    });
  };

  const isFormValid =
    formData.name &&
    formData.email &&
    formData.whatsapp &&
    formData.descripcion &&
    formData.files.length > 0;

  return (
    <>
      {sendState === "form" && (
        <form
          onSubmit={handleSubmit}
          className="flex w-full justify-center flex-col items-center"
        >
          <div className="flex flex-col w-full max-w-[750px]">
            <div className="">
              <h2 className="text-3xl font-semibold text-[#ffcc00] pt-12">
                Completar formulario
              </h2>
              <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                {/* Inputs de texto */}
                <div className="sm:col-span-6">
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-[#ffcc00]"
                  >
                    Nombre
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="ej. Juan Pérez"
                    className="mt-2 block w-full rounded-md bg-white/5 px-3 py-1.5 text-base text-white placeholder:text-gray-500 outline outline-1 focus:outline-[#ffcc00]"
                  />

                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-[#ffcc00] mt-6"
                  >
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="ej. mail@mail.com"
                    className="mt-2 block w-full rounded-md bg-white/5 px-3 py-1.5 text-base text-white placeholder:text-gray-500 outline outline-1 focus:outline-[#ffcc00]"
                  />

                  <label
                    htmlFor="whatsApp"
                    className="block text-sm font-medium text-[#ffcc00] mt-6"
                  >
                    WhatsApp
                  </label>
                  <input
                    id="whatsApp"
                    name="whatsapp"
                    type="text"
                    value={formData.whatsapp}
                    onChange={handleChange}
                    placeholder="ej. 123456789"
                    className="mt-2 block w-full rounded-md bg-white/5 px-3 py-1.5 text-base text-white placeholder:text-gray-500 outline outline-1 focus:outline-[#ffcc00]"
                  />
                </div>

                <div className="col-span-full">
                  <label
                    htmlFor="descripcion"
                    className="block text-sm font-medium text-[#ffcc00]"
                  >
                    Descripción
                  </label>
                  <textarea
                    id="descripcion"
                    name="descripcion"
                    rows={3}
                    value={formData.descripcion}
                    onChange={handleChange}
                    placeholder="Envianos toda la información disponible de la pieza."
                    className="mt-2 block w-full rounded-md bg-white/5 px-3 py-1.5 text-base text-white placeholder:text-gray-500 outline outline-1 focus:outline-[#ffcc00]"
                  />
                </div>

                {/* Subir archivos */}
                <div
                  className={`col-span-full mt-4 flex justify-center items-center rounded-lg border ${
                    dragging ? "border-[#ffcc00]" : "border-white/25"
                  } px-6 py-10`}
                  onDragOver={handleDragOver}
                  onDragLeave={handleDragLeave}
                  onDrop={handleDrop}
                  onClick={() => document.getElementById("file-upload").click()}
                >
                  <div className="text-center">
                    <PhotoIcon className="mx-auto size-12 text-gray-500" />
                    <p className="text-sm text-gray-400">
                      Arrastra y suelta o{" "}
                      <span className="text-[#ffcc00] cursor-pointer hover:underline">
                        selecciona
                      </span>{" "}
                      varias imágenes
                    </p>
                    <input
                      id="file-upload"
                      name="file"
                      type="file"
                      multiple
                      onChange={handleChange}
                      className="hidden"
                    />
                  </div>
                </div>

                <div className="col-span-full mt-0">
                  {formData.files.map((file, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between p-2 border-b border-white/25"
                    >
                      <p className="text-sm text-white">{file.name}</p>
                      <button
                        type="button"
                        onClick={() => removeFile(index)}
                        className="text-sm text-red-500 hover:underline"
                      >
                        Quitar
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="flex w-full justify-end max-w-[750px]">
            <button
              type="submit"
              disabled={!isFormValid}
              className={`mt-6 rounded-md px-3 py-2 text-sm font-semibold shadow-sm ${
                isFormValid
                  ? "bg-[#ffcc00] text-black hover:bg-[#e6b800]"
                  : "bg-gray-400 text-gray-700 cursor-not-allowed"
              }`}
            >
              Enviar
            </button>
          </div>
        </form>
      )}
      {sendState === "loading" && (
        <>
          <div className="w-full justify-center items-center h-[650px] flex">
            <div className="loader"></div>
          </div>
        </>
      )}
      {sendState === "success" && (
        <ThanksMail handleClick={() => setSendState("form")} />
      )}
      {sendState === "error" && (
        <Alert handleClick={() => setSendState("form")} />
      )}
    </>
  );
};

export default FormCotizar;
