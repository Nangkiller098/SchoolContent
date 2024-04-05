/* eslint-disable react-refresh/only-export-components */
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Typography,
} from "@material-tailwind/react";
import { useStore } from "../../app/stores/store";
import { observer } from "mobx-react-lite";
import { Link } from "react-router-dom";
import { format } from "date-fns";

const NewsEventsList = () => {
  const { contentStore } = useStore();
  const { contentsByDate, loading } = contentStore;

  function truncate(str: string | undefined) {
    if (str) {
      return str.length > 40 ? str.substring(0, 37) + "..." : str;
    }
  }
  return (
    <>
      <div className="flex flex-col w-96 2xl:w-[130vh]  lg:w-full md:w-[70vh] my-10 ">
        {contentsByDate.map((content) => (
          <Card
            placeholder={""}
            key={content.id}
            className="h-full w-full flex 2xl:flex-row md:w-full lg:flex-row lg:w-full md:flex-row"
          >
            <div>
              <CardHeader
                placeholder={""}
                floated={false}
                shadow={false}
                color="transparent"
                className="rounded-sm 2xl:w-80 2xl:h-56 lg:w-96 md:w-80"
              >
                <img
                  src={"/image/content.jpg"}
                  alt="ui/ux review check"
                  className="2xl:w-full 2xl:h-full object-fill object-center"
                />
              </CardHeader>
            </div>
            <div>
              <CardBody placeholder={""} className="2xl:w-full">
                <Typography placeholder={""} variant="h6" color="blue-gray">
                  <Link to={`${content.id}`} className=" hover:text-green-500">
                    {" "}
                    {content.title}
                  </Link>
                </Typography>
                <Typography placeholder={""}>
                  {format(content.createAt!, "dd MMM yyy h:mm aa")}
                </Typography>
                <Typography placeholder={""} variant="paragraph">
                  {truncate(content.description)}
                </Typography>
              </CardBody>
              <CardFooter placeholder={""} className="pt-0">
                <Link to={`${content.id}`}>
                  {" "}
                  <Button
                    loading={loading}
                    placeholder=""
                    className="bg-green-600"
                  >
                    Read More
                  </Button>
                </Link>
              </CardFooter>
            </div>
          </Card>
        ))}
      </div>
    </>
  );
};

export default observer(NewsEventsList);
