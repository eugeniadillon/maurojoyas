import CotizarPage from "../components/organisms/CotizarPage";
import { FormCotizar } from "@/components";
import SeoCotizacionOnline from "@/seo/cotizar";

export default function Cotizar() {
  return (
    <>
      <SeoCotizacionOnline />
      <CotizarPage />
      <FormCotizar />
    </>
  );
}
