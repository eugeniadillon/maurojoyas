import HeaderCarrousel from "../components/organisms/HeaderCarrousel";
import {
  QuienesSomos,
  Datos,
  Productos,
  Testimonios,
} from "../components/organisms";
import SeoHome from "@/seo/home";

export default function Home() {
  return (
    <>
      <SeoHome />
      <HeaderCarrousel />
      <QuienesSomos />
      <Datos />
      <Productos />
      <Testimonios />
    </>
  );
}
