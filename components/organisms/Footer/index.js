import { useRouter } from "next/router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faXTwitter,
  faInstagram,
  faSquareFacebook,
  faSquareYoutube,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { faMapMarkerAlt, faClock } from "@fortawesome/free-solid-svg-icons";

export const Footer = () => {
  const router = useRouter();

  return (
    <>
      <footer className="bg-gradient-to-tr from-black via-black to-[#f9d80a]">
        <div className="mx-auto max-w-7xl overflow-hidden px-6 py-10 sm:py-12 lg:px-8">
          <p
            className="mb-2 font-playfair font-semibold tracking-tight text-white text-[24px]"
            data-aos="zoom-in"
          >
            MAURO JOYAS
          </p>
          <div className="flex items-center text-sm text-white mb-2 w-full justify-center">
            <span data-aos="zoom-in-right">
              <FontAwesomeIcon
                icon={faMapMarkerAlt}
                className="text-[#fff] mr-2"
              />
            </span>
            <span data-aos="zoom-in-left">Lugones 218 - Belgrano - CABA</span>
          </div>
          <div className="flex items-center text-sm text-white mb-6 w-full justify-center">
            <span data-aos="zoom-in-right">
              <FontAwesomeIcon icon={faClock} className="text-[#fff] mr-2" />
            </span>
            <span data-aos="zoom-in-left">Lun a Vie 10 a 18hs. </span>
          </div>
          <div className="flex w-full justify-center" data-aos="zoom-in">
            <div className="w-[350px] h-64 overflow-hidden rounded-lg mb-6">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d26255.055939212794!2d-58.447510939550785!3d-34.5631861251939!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcb59f5f123abc%3A0x59e1b7428c1f6bc!2sLugones%20218%2C%20Belgrano%2C%20CABA%2C%20Argentina!5e0!3m2!1sen!2s!4v1699907583672!5m2!1sen!2s"
                width="350px"
                height="100%"
                allowFullScreen=""
                loading="lazy"
                className="border-0"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>

          <nav
            className="-mb-6 columns-2 flex justify-center sm:space-x-12 items-center w-full"
            aria-label="Footer"
          >
            <div className="pb-6 flex items-center">
              <span
                onClick={() => router.push("/")}
                className="text-lg leading-6 text-white hover:text-[#f9d80a] cursor-pointer mx-[24px]"
                data-aos="zoom-in-right"
              >
                Home
              </span>
              <span
                onClick={() => router.push("/cotizar")}
                className="text-lg leading-6 text-white hover:text-[#f9d80a] cursor-pointer mx-[24px]"
                data-aos="zoom-in-left"
              >
                Cotizar
              </span>
            </div>
          </nav>
          <div className="mt-10 flex justify-center space-x-10">
            <div className="flex flex-shrink-0 items-center">
              <div className="flex w-full items-center">
                <p
                  onClick={() =>
                    window.open(
                      "https://www.youtube.com/@MuzzioClara",
                      "_blank"
                    )
                  }
                  data-aos="zoom-in-right"
                  data-aos-delay="700"
                >
                  <FontAwesomeIcon
                    icon={faSquareYoutube}
                    className="cardMini"
                  />
                </p>
                <p
                  onClick={() =>
                    window.open("https://twitter.com/claramuzzio", "_blank")
                  }
                  data-aos="zoom-in-right"
                >
                  <FontAwesomeIcon icon={faXTwitter} className="cardMini" />
                </p>
                <p
                  onClick={() =>
                    window.open(
                      "https://www.instagram.com/clara.muzzio/",
                      "_blank"
                    )
                  }
                  data-aos="zoom-in-up"
                >
                  <FontAwesomeIcon icon={faInstagram} className="cardMini" />
                </p>
                <p
                  onClick={() =>
                    window.open(
                      "https://www.facebook.com/claramuzzio",
                      "_blank"
                    )
                  }
                  data-aos="zoom-in-left"
                >
                  <FontAwesomeIcon
                    icon={faSquareFacebook}
                    className="cardMini"
                  />
                </p>
                <p
                  onClick={() =>
                    window.open(
                      "https://www.linkedin.com/in/claramuzzio",
                      "_blank"
                    )
                  }
                  data-aos="zoom-in-left"
                  data-aos-delay="700"
                >
                  <FontAwesomeIcon icon={faLinkedin} className="cardMini" />
                </p>
              </div>
            </div>
          </div>
          <p
            className="mt-10 text-center text-base leading-5 text-[#fff] flex flex-col"
            data-aos="zoom-out-up"
            data-aos-delay="300"
            data-aos-duration="2000"
          >
            &copy; 2024 Mauro Joyas, todos los derechos reservados.
          </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
