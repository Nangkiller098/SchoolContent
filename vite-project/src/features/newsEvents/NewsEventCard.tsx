import {
  Avatar,
  Button,
  ListItem,
  ListItemPrefix,
  Typography,
} from "@material-tailwind/react";
import { Content } from "../../app/models/Content";
import { Link } from "react-router-dom";
interface Props {
  content: Content;
}
const NewsEventCard = ({ content }: Props) => {
  return (
    <Link to={`${content.id}`}>
      <ListItem
        placeholder={""}
        key={content.id}
        className=" text-start items-center flex justify-center 2xl:flex-row flex-col w-full lg:flex-row md:flex-row"
      > 
        <div className="w-96 h-full">
          <ListItemPrefix placeholder={""} className=" px-4">
            <Avatar
              placeholder={""}
              variant="square"
              alt="candice"
              src="https://www.bbu.edu.kh/photos/article/2024-02-08 10.05.49.jpg"
              className="w-full h-full"
            />
          </ListItemPrefix>
        </div>
        <div className="">
          <Typography
            placeholder={""}
            variant="h6"
            color="blue-gray"
            className="w-full"
          >
            {content.title}
          </Typography>
          <Typography
            placeholder={""}
            variant="small"
            color="gray"
            className="font-normal"
          >
            {content.description}
          </Typography>
          <div className="">
            <Button placeholder="" className="bg-green-600   ">
              Read More
            </Button>
          </div>
        </div>
      </ListItem>
    </Link>
  );
};

export default NewsEventCard;
