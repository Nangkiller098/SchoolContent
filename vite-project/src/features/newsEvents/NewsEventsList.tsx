/* eslint-disable react-refresh/only-export-components */
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
import { useStore } from "../../app/stores/store";
import { observer } from "mobx-react-lite";

interface Props {
  contents: Content[];
}
const NewsEventsList = ({ contents }: Props) => {
  const { contentStore } = useStore();
  const { selectContent } = contentStore;
  return (
    <>
      <Card
        placeholder={""}
        className="w-96 2xl:w-[100vh]  lg:w-full md:w-[50vh] my-10 shadow-none"
      >
        <List placeholder={""} className=" gap-4">
          {" "}
          {contents.map((content) => (
            <ListItem
              placeholder={""}
              key={content.id}
              className=" text-center items-center flex justify-items-center 2xl:flex-row flex-col w-full lg:flex-row md:flex"
            >
              <div className="w-auto 2xl:w-[100vh] h-full  md:w-auto sm:w-full">
                <ListItemPrefix placeholder={""} className=" px-4">
                  <Avatar
                    placeholder={""}
                    variant="square"
                    alt="candice"
                    src="/image/content.jpg"
                    className="w-auto h-full 2xl:h-auto"
                  />
                </ListItemPrefix>
              </div>
              <div className="text-center items-center justify-center lg:w-[100vh]">
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

export default observer(NewsEventsList);
