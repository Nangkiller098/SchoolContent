/* eslint-disable no-irregular-whitespace */
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Content } from "../../app/models/Content";
import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Typography,
} from "@material-tailwind/react";
import agent from "../../app/api/agent";

const NewEventDetails = () => {
  const { id } = useParams<{ id: string }>();
  const [content, setContent] = useState<Content | null>(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    id &&
      agent.Content.details(parseInt(id))
        .then((res) => setContent(res))
        .catch((err) => console.log(err))
        .finally(() => setLoading(false));
  }, [id]);
  if (loading) return <h3>Loading...</h3>;
  if (!content) return <h3>Content Not Found</h3>;
  return (
    <>
      <div>
        <img
          className="h-96 w-full object-cover object-center"
          src="../banners.svg"
          alt="nature image"
        />
      </div>
      <div className="2xl:mx-96 text-justify">
        <Card placeholder={undefined} className="w-full mt-10 justify-center">
          <CardHeader
            placeholder={undefined}
            floated={false}
            shadow={false}
            color="transparent"
          >
            <Typography
              variant="h5"
              color="blue-gray"
              placeholder={undefined}
              className="w-full"
            >
              {content.title}
            </Typography>
          </CardHeader>
          <CardBody placeholder={undefined}>
            <Typography
              placeholder={undefined}
              variant="paragraph"
              color="gray"
              className="mt-3 font-normal"
            >
              {content.description}
            </Typography>
          </CardBody>
          <CardFooter
            placeholder={undefined}
            className="flex items-center justify-between"
          >
            <div className="w-full">
              <img
                src="https://www.bbu.edu.kh/photos/article/2024-02-08 10.05.49.jpg"
                alt="ui/ux review check"
              />
            </div>
          </CardFooter>
        </Card>
      </div>
    </>
  );
};

export default NewEventDetails;
