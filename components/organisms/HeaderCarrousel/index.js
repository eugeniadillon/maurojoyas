import ImageCarousel from "../../molecules/ImageCarousel";

const HeaderCarrousel = () => {
  const images = [
    "/banner01.png",
    "/banner02.png",
    "/banner03.png",
    "/banner04.png",
  ];

  return (
    <div className="mt-[80px]">
      <ImageCarousel images={images} />
    </div>
  );
};

export default HeaderCarrousel;
