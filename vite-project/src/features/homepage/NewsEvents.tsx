/* eslint-disable react-refresh/only-export-components */
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import { useStore } from "../../app/stores/store";
import { observer } from "mobx-react-lite";
import { format } from "date-fns";

export default observer(function NewsEvents() {
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
  const { contentStore } = useStore();
  const { contentsByDate, loading } = contentStore;

  return (
    <>
      <div className="bg-yellow-600 p-5 text-white font-bold text-lg w-full h-full">
        <h1 className="uppercase text-center mt-0">
          <Link to={"/content"}>NEWS &amp; EVENTS</Link>
        </h1>
      </div>

      <div className="slider-container 2xl:px-[15vh] lg:pb-2 text-start">
        <Slider {...settings}>
          {contentsByDate.map((content) => (
            <Card placeholder={""} key={content.id} className="h-full w-full">
              <CardHeader
                placeholder={""}
                floated={false}
                shadow={false}
                color="transparent"
                className="rounded-sm "
              >
                <img
                  src={"/image/content.jpg"}
                  alt="ui/ux review check"
                  className="w-full h-full object-fill object-center"
                />
              </CardHeader>
              <CardBody placeholder={""}>
                <Typography
                  placeholder={""}
                  variant="h6"
                  color="blue-gray"
                  className="mb-2 w-full h-full"
                >
                  {content.title}
                </Typography>
                <Typography placeholder={""}>
                  {format(content.createAt!, "dd MMM yyy h:mm aa")}
                </Typography>
                <Typography placeholder={""} variant="paragraph">
                  {content.description}
                </Typography>
              </CardBody>
              <CardFooter placeholder={""} className="pt-0">
                <Link to={`/content/${content.id}`}>
                  {" "}
                  <Button
                    loading={loading}
                    placeholder={""}
                    className="bg-green-600"
                  >
                    Read More
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          ))}
        </Slider>
      </div>
    </>
  );
});
