import { Carousel } from "@material-tailwind/react";

const Banner = () => {
  return (
    <div className="h-auto w-full object-fill object-center">
      <Carousel
        placeholder=""
        loop={true}
        autoplay={true}
        className="rounded-xl"
      >
        <img src="banner/1.jpg" className="h-full w-full" />
        <img src="banner/2.png" className="h-full w-full" />
        <img src="banner/4.jpg" className="h-full w-full" />
      </Carousel>
    </div>
  );
};

export default Banner;
