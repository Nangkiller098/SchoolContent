import { useEffect, useState } from "react";
import { Content } from "../../app/models/Content";
import NewsEventsList from "./NewsEventsList";
import agent from "../../app/api/agent";

const NewEventsPage = () => {
  const [contents, setContents] = useState<Content[]>([]);
  useEffect(() => {
    agent.Content.list().then((contents) => setContents(contents));
  }, []);
  return (
    <div className="flex justify-center">
      <NewsEventsList contents={contents} />
    </div>
  );
};

export default NewEventsPage;
