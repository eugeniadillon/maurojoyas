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
  return (
    <Disclosure
      as="nav"
      className="bg-[#8c138c] shadow fixed top-0 z-40 w-full"
    >
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 bg-[#8c138c]">
            <div className="relative flex h-16 justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button */}
                <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-[#fff] hover:opacity-50 hover:text-[#fff] focus:outline-none">
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
                  <div className="flex w-full items-center">
                    <span
                      onClick={() =>
                        window.open("https://twitter.com/claramuzzio", "_blank")
                      }
                    >
                      <FontAwesomeIcon
                        icon={faXTwitter}
                        className="cardMiniWP"
                      />
                    </span>
                    <span
                      onClick={() =>
                        window.open(
                          "https://www.instagram.com/clara.muzzio/",
                          "_blank"
                        )
                      }
                    >
                      <FontAwesomeIcon
                        icon={faInstagram}
                        className="cardMiniWP"
                      />
                    </span>
                    <span
                      onClick={() =>
                        window.open(
                          "https://www.facebook.com/claramuzzio",
                          "_blank"
                        )
                      }
                    >
                      <FontAwesomeIcon
                        icon={faSquareFacebook}
                        className="cardMiniWP"
                      />
                    </span>
                    <span
                      onClick={() =>
                        window.open(
                          "https://www.youtube.com/@MuzzioClara",
                          "_blank"
                        )
                      }
                    >
                      <FontAwesomeIcon
                        icon={faSquareYoutube}
                        className="cardMiniWP"
                      />
                    </span>
                    <span
                      onClick={() =>
                        window.open(
                          "https://www.linkedin.com/in/claramuzzio",
                          "_blank"
                        )
                      }
                    >
                      <FontAwesomeIcon
                        icon={faLinkedin}
                        className="cardMiniWP"
                      />
                    </span>
                  </div>
                </div>
                <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
                  <span
                    onClick={() => router.push("/")}
                    className="inline-flex items-center border-b-4 border-transparent px-1 pt-1 text-base font-medium text-white hover:border-[#f9d80a] hover:border-b-4 hover:text-[#f9d80a] cursor-pointer"
                  >
                    Home
                  </span>
                  <span
                    onClick={() => router.push("/cotizar")}
                    className="inline-flex items-center border-b-4 border-transparent px-1 pt-1 text-base font-medium text-white hover:border-[#f9d80a] hover:border-b-4 hover:text-[#f9d80a] cursor-pointer"
                  >
                    Cotizar
                  </span>
                </div>
              </div>
            </div>
          </div>
          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 pb-4 pt-2">
              <Disclosure.Button
                as="a"
                onClick={() => router.push("/")}
                className="block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-semibold text-[#fff] hover:border-gray-300 hover:bg-[#f9d80a] hover:text-[#3c3c3c] cursor-pointer"
              >
                Home
              </Disclosure.Button>
              <Disclosure.Button
                as="a"
                onClick={() => router.push("/mi-bio")}
                className="block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-semibold text-[#fff] hover:border-gray-300 hover:bg-[#f9d80a] hover:text-[#3c3c3c] cursor-pointer"
              >
                Bio
              </Disclosure.Button>
              <Disclosure.Button
                as="a"
                onClick={() => router.push("/noticias")}
                className="block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-semibold text-[#fff] hover:border-gray-300 hover:bg-[#f9d80a] hover:text-[#3c3c3c] cursor-pointer"
              >
                Noticias
              </Disclosure.Button>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
};

export default MenuApp;
