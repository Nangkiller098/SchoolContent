/* eslint-disable react-refresh/only-export-components */
import { Footer } from "./Footer";
import Logo from "./Logo";
import { NavbarSimple } from "./Navbar";
import { useEffect, useState } from "react";
import { Content } from "../../app/models/Content";
import agent from "../../app/api/agent";
import { LoadingComponent } from "./LoadingComponent";
import { v4 as uuid } from "uuid";
import { useStore } from "../stores/store";
import { observer } from "mobx-react-lite";
import NewEventsDashboard from "../../features/newsEvents/NewEventsDashboard";

function App() {
  const { contentStore } = useStore();
  const [contents, setContents] = useState<Content[]>([]);
  const [selectedContent, setSelectedContent] = useState<Content | undefined>(
    undefined
  );
  const [editMode, setEditMode] = useState(false);

  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    contentStore.loadContents();
  }, [contentStore]);

  function handleCandEContent(content: Content) {
    setSubmitting(true);
    content.id = uuid();
    if (content.id) {
      agent.Content.update(content).then(() => {
        setContents([...contents.filter((x) => x.id !== content.id), content]);
        setSelectedContent(content);
        setEditMode(false);
        setSubmitting(false);
      });
    } else {
      agent.Content.create(content).then(() => {});
      setContents([...contents, content]);
      setSelectedContent(content);
      setEditMode(false);
      setSubmitting(false);
    }
  }

  function handleDeleteContent(id: string) {
    setContents([...contents.filter((x) => x.id !== id)]);
    // handleFormClose();
  }

  if (contentStore.loadingInitial) return <LoadingComponent />;

  return (
    <div className=" overflow-hidden">
      <Logo />
      <NavbarSimple />
      {/* <Outlet /> */}
      <NewEventsDashboard
        contents={contentStore.contents}
        createOrEdit={handleCandEContent}
        deleteContent={handleDeleteContent}
        submitting={submitting}
      />
      <Footer />
    </div>
  );
}

export default observer(App);
