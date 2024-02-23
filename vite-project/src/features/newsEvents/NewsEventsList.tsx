import { Card, List } from "@material-tailwind/react";
import { Content } from "../../app/models/Content";
import NewsEventCard from "./NewsEventCard";

interface Props {
  contents: Content[];
}
const NewsEventsList = ({ contents }: Props) => {
  return (
    <>
      <Card
        placeholder={""}
        className="w-96 2xl:w-[1000px] lg:w-full md:w-full my-10"
      >
        <List placeholder={""} className="">
          {contents.map((content) => (
            <NewsEventCard key={content.id} content={content} />
          ))}
        </List>
      </Card>
    </>
  );
};

export default NewsEventsList;
