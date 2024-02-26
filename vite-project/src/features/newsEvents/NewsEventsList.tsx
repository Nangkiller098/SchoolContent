import {
  Avatar,
  Button,
  Card,
  List,
  ListItem,
  ListItemPrefix,
  Typography,
} from "@material-tailwind/react";
import { Content } from "../../app/models/Content";

interface Props {
  contents: Content[];
  selectContent: (id: string) => void;
}
const NewsEventsList = ({ contents, selectContent }: Props) => {
  return (
    <>
      <Card
        placeholder={""}
        className="w-96 2xl:w-[1000px] lg:w-full md:w-full my-10"
      >
        <List placeholder={""}>
          {" "}
          {contents.map((content) => (
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
                  <Button
                    onClick={() => selectContent(content.id)}
                    placeholder=""
                    className="bg-green-600"
                  >
                    Read More
                  </Button>
                </div>
              </div>
            </ListItem>
          ))}
        </List>
      </Card>
    </>
  );
};

export default NewsEventsList;
