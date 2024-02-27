import { Content } from "../../app/models/Content";
import NewsEventsList from "./NewsEventsList";
import NewEventDetails from "./details/NewEventDetails";
import NewsEventForm from "./form/NewsEventForm";

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
}
const NewEventsDashboard = ({
  contents,
  selectContent,
  selectedContent,
  cancelSelectContent,
  editMode,
  openForm,
  closeForm,
  createOrEdit,
  deleteContent,
}: Props) => {
  return (
    <div className="flex justify-center">
      <NewsEventsList contents={contents} selectContent={selectContent} />
      {selectedContent && !editMode && (
        <NewEventDetails
          content={selectedContent}
          cancelSelectContent={cancelSelectContent}
          openForm={openForm}
        />
      )}
      {editMode && (
        <NewsEventForm
          closeForm={closeForm}
          content={selectedContent}
          createOrEdit={createOrEdit}
          deleteContent={deleteContent}
        />
      )}
    </div>
  );
};

export default NewEventsDashboard;
