import { useState, useEffect } from "react";
import { Disclosure } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "../../atoms";
import { useRouter } from "next/router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faXTwitter,
  faInstagram,
  faSquareFacebook,
  faSquareYoutube,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export const MenuApp = () => {
  const router = useRouter();
  const [isScrolled, setIsScrolled] = useState(false);

  // Detectar scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <Disclosure
      as="nav"
      className={classNames(
        "fixed top-0 z-40 w-full shadow bg-[#000] transition-all duration-300",
        isScrolled ? "border-b border-[#FFCC00] shadow-xl" : ""
      )}
    >
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 bg-[#000]">
            <div className="relative flex h-16 justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button */}
                <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-[#fff] hover:opacity-50 hover:text-[#fff] focus:outline-none z-10">
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center justify-end sm:items-stretch sm:justify-between">
                <div className="flex flex-shrink-0 items-center">
                  <div className="flex w-full items-center z-10">
                    <span
                      onClick={() =>
                        window.open("https://twitter.com/claramuzzio", "_blank")
                      }
                      data-aos="zoom-in"
                      data-aos-delay="500"
                    >
                      <FontAwesomeIcon
                        icon={faXTwitter}
                        className="cardMiniWP"
                      />
                    </span>
                    <span
                      onClick={() =>
                        window.open(
                          "https://www.instagram.com/mauro.joyas/",
                          "_blank"
                        )
                      }
                      data-aos="zoom-in"
                      data-aos-delay="1000"
                    >
                      <FontAwesomeIcon
                        icon={faInstagram}
                        className="cardMiniWP"
                      />
                    </span>
                    <span
                      onClick={() =>
                        window.open(
                          "https://www.facebook.com/mauro.joyas",
                          "_blank"
                        )
                      }
                      data-aos="zoom-in"
                      data-aos-delay="1500"
                    >
                      <FontAwesomeIcon
                        icon={faSquareFacebook}
                        className="cardMiniWP"
                      />
                    </span>
                    <span
                      onClick={() =>
                        window.open(
                          "https://www.youtube.com/@mauro.joyas",
                          "_blank"
                        )
                      }
                      data-aos="zoom-in"
                      data-aos-delay="2000"
                    >
                      <FontAwesomeIcon
                        icon={faSquareYoutube}
                        className="cardMiniWP"
                      />
                    </span>
                    <span
                      onClick={() =>
                        window.open(
                          "https://www.linkedin.com/in/mauro.joyas",
                          "_blank"
                        )
                      }
                      data-aos="zoom-in"
                      data-aos-delay="2500"
                    >
                      <FontAwesomeIcon
                        icon={faLinkedin}
                        className="cardMiniWP"
                      />
                    </span>
                  </div>
                  <div
                    className="absolute inset-0 flex items-center justify-center z-0"
                    data-aos="zoom-in"
                  >
                    <img
                      src="/maurojoyas2.png"
                      alt="logo"
                      className="hidden sm:flex sm:max-w-[200px] md:max-w-[350px] lg:max-w-[450px] h-auto"
                    />
                  </div>
                </div>
                <div className="hidden sm:ml-6 sm:flex sm:space-x-8 z-10">
                  <span
                    onClick={() => router.push("/")}
                    className="inline-flex items-center border-b-4 border-transparent px-1 pt-1 text-base font-medium text-white hover:border-[#FFCC00] hover:border-b-4 hover:text-[#FFCC00] cursor-pointer"
                    data-aos="zoom-in"
                    data-aos-delay="500"
                  >
                    Home
                  </span>
                  <span
                    onClick={() => router.push("/cotizar")}
                    className="inline-flex items-center border-b-4 border-transparent px-1 pt-1 text-base font-medium text-white hover:border-[#FFCC00] hover:border-b-4 hover:text-[#FFCC00] cursor-pointer"
                    data-aos="zoom-in"
                    data-aos-delay="1000"
                  >
                    Cotizar
                  </span>
                </div>
              </div>
            </div>
          </div>
          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 pb-4 pt-2 z-10">
              <Disclosure.Button
                as="a"
                onClick={() => router.push("/")}
                className="block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-semibold text-[#fff] hover:border-gray-300 hover:bg-[#FFCC00] hover:text-[#3c3c3c] cursor-pointer z-10"
              >
                Home
              </Disclosure.Button>
              <Disclosure.Button
                as="a"
                onClick={() => router.push("/cotizar")}
                className="block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-semibold text-[#fff] hover:border-gray-300 hover:bg-[#FFCC00] hover:text-[#3c3c3c] cursor-pointer"
              >
                Cotizar
              </Disclosure.Button>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
};

export default MenuApp;
