import nodemailer from "nodemailer";
import multer from "multer";
import nextConnect from "next-connect";
import fs from "fs";

const mail = process.env.EMAIL;
const pass = process.env.EMAIL_PASS;
const to = process.env.EMAIL_TO;

const upload = multer({ dest: "uploads/" });

const apiRoute = nextConnect({
  onError(error, req, res) {
    res.status(500).json({ error: `Something went wrong! ${error.message}` });
  },
  onNoMatch(req, res) {
    res.status(405).json({ error: `Method ${req.method} Not Allowed` });
  },
});

// Cambia a `array` para aceptar múltiples archivos
apiRoute.use(upload.array("files"));

apiRoute.post(async (req, res) => {
  const { name, email, whatsapp, descripcion } = req.body;
  const files = req.files; // Múltiples archivos

  try {
    // Configuración del transporte de correo
    const transporter = nodemailer.createTransport({
      service: "Gmail",
      auth: {
        user: mail,
        pass: pass,
      },
    });

    // Crear lista de adjuntos
    const attachments = files
      ? files.map((file) => ({
          filename: file.originalname,
          path: file.path,
        }))
      : [];

    // Configuración del correo electrónico
    const mailOptions = {
      from: "mauro.vale.oro@gmail.com",
      to: to,
      subject: "Solicitud de Cotización",
      html: `
        <h3>Solicitud de Cotización</h3>
        <p><strong>Nombre:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>WhatsApp:</strong> ${whatsapp}</p>
        <p><strong>Descripción:</strong> ${descripcion}</p>
      `,
      attachments,
    };

    // Enviar el correo
    await transporter.sendMail(mailOptions);

    // Eliminar los archivos después de enviarlos
    if (files) {
      files.forEach((file) => fs.unlinkSync(file.path));
    }

    res.status(200).json({ message: "Correo enviado con éxito." });
  } catch (error) {
    console.error("Error al enviar el correo:", error);
    res.status(500).json({ error: "Error al enviar el correo." });
  }
});

export default apiRoute;

export const config = {
  api: {
    bodyParser: false,
  },
};
