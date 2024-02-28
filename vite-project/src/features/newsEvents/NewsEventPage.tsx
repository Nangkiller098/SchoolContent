import { Content } from "../../app/models/Content";
import NewEventsDashboard from "./NewEventsDashboard";

interface Props {
  contents: Content[];
  selectedContent: Content | undefined;
  selectContent: (id: string) => void;
  cancelSelectContent: () => void;
  editMode: boolean;
  openForm: (id: string) => void;
  closeForm: () => void;
  createOrEdit: (content: Content) => void;
  deleteContent: (id: string) => void;
  submitting: boolean;
}
const NewsEventPage = ({
  contents,
  selectContent,
  selectedContent,
  cancelSelectContent,
  editMode,
  openForm,
  closeForm,
  createOrEdit,
  deleteContent,
  submitting,
}: Props) => {
  return (
    <>
      <NewEventsDashboard
        contents={contents}
        selectedContent={selectedContent}
        selectContent={selectContent}
        cancelSelectContent={cancelSelectContent}
        editMode={editMode}
        openForm={openForm}
        closeForm={closeForm}
        createOrEdit={createOrEdit}
        deleteContent={deleteContent}
        submitting={submitting}
      />
    </>
  );
};

export default NewsEventPage;
