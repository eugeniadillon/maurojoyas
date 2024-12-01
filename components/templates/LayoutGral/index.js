import MenuApp from "../../organisms/Menu";
import Footer from "../../organisms/Footer";

export const LayoutGral = ({ children }) => {
  return (
    <>
      <MenuApp />
      <div className="mt-[64px]">{children}</div>
      <Footer />
    </>
  );
};

export default LayoutGral;
