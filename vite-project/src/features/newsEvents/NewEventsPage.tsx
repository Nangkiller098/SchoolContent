import { useEffect, useState } from "react";
import { Content } from "../../app/models/Content";
import NewsEventsList from "./NewsEventsList";
import axios from "axios";

const NewEventsPage = () => {
  const [contents, setContents] = useState<Content[]>([]);
  useEffect(() => {
    axios.get("http://localhost:5000/api/Content").then((response) => {
      setContents(response.data);
    });
  }, []);
  return (
    <div className="flex justify-center">
      <NewsEventsList contents={contents} />
    </div>
  );
};

export default NewEventsPage;
