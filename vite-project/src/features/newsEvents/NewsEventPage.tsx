import { useEffect, useState } from "react";
import { Content } from "../../app/models/Content";
import agent from "../../app/api/agent";
import NewEventsDashboard from "./NewEventsDashboard";

const NewsEventPage = () => {
  const [contents, setContents] = useState<Content[]>([]);
  const [selectedContent, setSelectedContent] = useState<Content | undefined>(
    undefined
  );
  const [editMode, setEditMode] = useState(false);

  useEffect(() => {
    agent.Content.list().then((contents) => setContents(contents));
  }, []);

  function handleSelectedContent(id: string) {
    setSelectedContent(contents.find((x) => x.id === id));
  }

  function handleCancelSelectContent() {
    setSelectedContent(undefined);
  }

  function handleFormOpen(id?: string) {
    id ? handleSelectedContent(id) : handleCancelSelectContent();
    setEditMode(true);
  }

  function handleFormClose() {
    setEditMode(false);
  }

  function handleCandEContent(content: Content) {
    content.id
      ? setContents([...contents.filter((x) => x.id !== content.id), content])
      : setContents([...contents, content]);
    setEditMode(false);
    setSelectedContent(content);
  }

  function handleDeleteContent(id: string) {
    setContents([...contents.filter((x) => x.id !== id)]);
    handleFormClose();
  }

  return (
    <>
      <NewEventsDashboard
        contents={contents}
        selectedContent={selectedContent}
        selectContent={handleSelectedContent}
        cancelSelectContent={handleCancelSelectContent}
        editMode={editMode}
        openForm={handleFormOpen}
        closeForm={handleFormClose}
        createOrEdit={handleCandEContent}
        deleteContent={handleDeleteContent}
      />
    </>
  );
};

export default NewsEventPage;
