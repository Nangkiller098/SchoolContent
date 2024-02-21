import { Card, List } from "@material-tailwind/react";
import { Content } from "../../app/models/Content";
import NewsEventCard from "./NewsEventCard";

interface Props {
  contents: Content[];
}
const NewsEventsList = ({ contents }: Props) => {
  return (
    <>
      <Card placeholder={""} className="w-96">
        <List placeholder={""}>
          {contents.map((content) => (
            <NewsEventCard content={content} />
          ))}
        </List>
      </Card>
    </>
  );
};

export default NewsEventsList;
