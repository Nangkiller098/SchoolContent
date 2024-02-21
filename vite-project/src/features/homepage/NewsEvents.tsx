import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
import { useEffect, useState } from "react";
import Slider from "react-slick";
import axios from "axios";
import { Content } from "../../app/models/Content";


export function NewsEvents() {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  const [contents, setContents] = useState<Content[]>([]);
  useEffect(() => {
    axios.get("http://localhost:5000/api/Content").then((response) => {
      setContents(response.data);
    });
  }, []);
  return (
    <>
      <div className="bg-yellow-600 p-5 text-white font-bold text-lg w-full h-full">
        <h1 className="uppercase text-center mt-0">
          <a href="">NEWS &amp; EVENTS</a>
        </h1>
      </div>

      <div className="slider-container 2xl:px-[40vh] lg:pb-2">
        <Slider {...settings}>
          {contents.map((content) => (
            <Card placeholder={""} key={content.id} className="h-full w-full">
              <CardHeader
                placeholder={""}
                floated={false}
                shadow={false}
                color="transparent"
                className="rounded-sm "
              >
                <img
                  src={
                    "https://www.bbu.edu.kh/photos/article/2024-02-08 10.05.49.jpg"
                  }
                  alt="ui/ux review check"
                  className="w-full h-full"
                />
              </CardHeader>
              <CardBody placeholder={""}>
                <Typography
                  placeholder={""}
                  variant="h6"
                  color="blue-gray"
                  className="mb-2 w-full h-full "
                >
                  {content.title}
                </Typography>
                <Typography placeholder={""}>{content.description}</Typography>
              </CardBody>
              <CardFooter placeholder={""} className="pt-0">
                <Button placeholder={""} className=" bg-green-600">
                  Read More
                </Button>
              </CardFooter>
            </Card>
          ))}
        </Slider>
      </div>
    </>
  );
}
