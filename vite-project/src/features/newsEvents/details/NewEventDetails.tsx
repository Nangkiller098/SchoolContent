/* eslint-disable react-refresh/only-export-components */
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Typography,
} from "@material-tailwind/react";
import { useStore } from "../../../app/stores/store";
import { LoadingComponent } from "../../../app/layout/LoadingComponent";
import { observer } from "mobx-react-lite";
import { Link, useParams } from "react-router-dom";
import { useEffect } from "react";

const NewEventDetails = () => {
  const { contentStore } = useStore();
  const {
    selectedContent: content,
    loadContent,
    loadingInitial,
  } = contentStore;
  const { id } = useParams();

  useEffect(() => {
    if (id) loadContent(id);
  }, [id, loadContent]);

  if (loadingInitial || !content) return <LoadingComponent />;

  return (
    <>
      <div>
        <img
          className="h-96 w-full object-cover object-center"
          src="../banners.svg"
          alt="nature image"
        />
      </div>
      <div className="2xl:mx-[10vh] text-justify">
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
            <div className="w-full justify-center items-center ">
              <img
                src="/image/content.jpg"
                alt="ui/ux review check"
                className="object-fit object-center w-[100vh]"
              />
            </div>
          </CardBody>
          <CardFooter
            placeholder={undefined}
            className="flex items-center justify-between"
          >
            <Link to={`/manageContent/${content.id}`}>
              {" "}
              <Button placeholder={undefined}>Edit</Button>
            </Link>
            <Link to={`/content`}>
              {" "}
              <Button placeholder={undefined}>Cancel</Button>
            </Link>
          </CardFooter>
        </Card>
      </div>
    </>
  );
};

export default observer(NewEventDetails);
