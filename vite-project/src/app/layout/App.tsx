import { Footer } from "./Footer";
import Logo from "./Logo";
import { NavbarSimple } from "./Navbar";
import NewsEventPage from "../../features/newsEvents/NewsEventPage";
import { useEffect, useState } from "react";
import { Content } from "../../app/models/Content";
import agent from "../../app/api/agent";
import { LoadingComponent } from "./LoadingComponent";

function App() {
  const [contents, setContents] = useState<Content[]>([]);
  const [selectedContent, setSelectedContent] = useState<Content | undefined>(
    undefined
  );
  const [editMode, setEditMode] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    agent.Content.list().then((response) => {
      const contents: Content[] = [];
      response.forEach((content: Content) => {
        content.createAt = content.createAt.split("T")[0];
        contents.push(content);
      });
      setContents(contents);
      setLoading(false);
    });
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

  if (loading) return <LoadingComponent />;

  return (
    <div className=" overflow-hidden">
      <Logo />
      <NavbarSimple />
      {/* <Outlet /> */}
      <NewsEventPage
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
      <Footer />
    </div>
  );
}

export default App;
