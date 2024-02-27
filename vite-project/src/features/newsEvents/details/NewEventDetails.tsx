import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Typography,
} from "@material-tailwind/react";
import { Content } from "../../../app/models/Content";

interface Props {
  content: Content;
  cancelSelectContent: () => void;
  openForm: (id: string) => void;
}
const NewEventDetails = ({ content, cancelSelectContent, openForm }: Props) => {
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
            <div className="w-full">
              <img
                src="https://www.bbu.edu.kh/photos/article/2024-02-08 10.05.49.jpg"
                alt="ui/ux review check"
              />
            </div>
          </CardBody>
          <CardFooter
            placeholder={undefined}
            className="flex items-center justify-between"
          >
            <Button
              onClick={() => openForm(content.id)}
              placeholder={undefined}
            >
              Edit
            </Button>
            <Button onClick={cancelSelectContent} placeholder={undefined}>
              Cancel
            </Button>
          </CardFooter>
        </Card>
      </div>
    </>
  );
};

export default NewEventDetails;
