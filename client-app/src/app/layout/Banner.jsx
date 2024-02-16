import { Carousel } from "@material-tailwind/react";

const Banner = () => {
  return (
    <div className="h-auto w-full">
      <Carousel loop={true} autoplay={true} className="rounded-xl">
        <img
          src="banner/1.jpg"
          // alt="image 1"
          className="h-full w-full object-cover object-center"
        />
        <img
          src="banner/2.png"
          // alt="image 2"
          className="h-full w-full object-cover object-center"
        />
        <img
          src="banner/4.jpg"
          // alt="image 3"
          className="h-full w-full object-cover object-center"
        />
        {/* <img
          src="banner/5.jpg"
          // alt="image 3"
          className="h-full w-full object-cover object-center"
        /> */}
        {/* <img
          src="banner/6.jpg"
          // alt="image 3"
          className="h-full w-full object-cover object-center"
        /> */}
      </Carousel>
    </div>
  );
};

export default Banner;
