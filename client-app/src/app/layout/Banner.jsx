import { Carousel } from "@material-tailwind/react";

const Banner = () => {
  return (
    <div className=" h-96 w-full">
      <Carousel loop={true} autoplay={true} className="h-full w-full mt-2">
        <img
          src="banner/1.jpg"
          // alt="image 1"
          className="h-full w-full object-cover object-center"
        />
        <img
          src="banner/3.jpg"
          // alt="image 2"
          className="h-full w-full object-cover object-center"
        />
        <img
          src="banner/4.jpg"
          // alt="image 3"
          className="h-full w-full object-cover object-center"
        />
        <img
          src="banner/7.jpg"
          // alt="image 3"
          className="h-full w-full object-cover object-center"
        />
        <img
          src="banner/5.jpg"
          // alt="image 3"
          className="h-full w-full object-cover object-center"
        />
      </Carousel>
    </div>
  );
};

export default Banner;
