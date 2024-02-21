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
    <>
      <NewsEventsList contents={contents} />
    </>
  );
};

export default NewEventsPage;
