import { Carousel } from "@material-tailwind/react";

const Banner = () => {
  return (
    <div className="h-auto w-full">
      <Carousel loop={true} autoplay={true} className="rounded-xl">
        <img
          src="banner/1.jpg"
          className="h-full w-full object-cover object-center"
        />
        <img
          src="banner/2.png"
          className="h-full w-full object-cover object-center"
        />
        <img
          src="banner/4.jpg"
          className="h-full w-full object-cover object-center"
        />
      </Carousel>
    </div>
  );
};

export default Banner;
