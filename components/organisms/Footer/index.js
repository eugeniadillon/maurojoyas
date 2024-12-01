import { useRouter } from "next/router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faXTwitter,
  faInstagram,
  faSquareFacebook,
  faSquareYoutube,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

export const Footer = () => {
  const router = useRouter();

  return (
    <>
      <footer className="bg-gradient-to-tr from-[#f08372] to-[#8c138c] ">
        <div className="mx-auto max-w-7xl overflow-hidden px-6 py-20 sm:py-24 lg:px-8">
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
                data-aos="zoom-in-down"
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
