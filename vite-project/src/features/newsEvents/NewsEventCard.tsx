import {
  Avatar,
  ListItem,
  ListItemPrefix,
  Typography,
} from "@material-tailwind/react";
import { Content } from "../../app/models/Content";
interface Props {
  content: Content;
}
const NewsEventCard = ({ content }: Props) => {
  return (
    <ListItem placeholder={""} key={content.id}>
      <ListItemPrefix placeholder={""}>
        <Avatar
          placeholder={""}
          variant="circular"
          alt="candice"
          src="https://www.bbu.edu.kh/photos/article/2024-02-08 10.05.49.jpg"
        />
      </ListItemPrefix>
      <div>
        <Typography placeholder={""} variant="h6" color="blue-gray">
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
      </div>
    </ListItem>
  );
};

export default NewsEventCard;
