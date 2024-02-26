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
}
const NewEventsDashboard = ({
  contents,
  selectContent,
  selectedContent,
  cancelSelectContent,
  editMode,
  openForm,
  closeForm,
}: Props) => {
  return (
    <div className="flex justify-center">
      <NewsEventsList contents={contents} selectContent={selectContent} />
      {selectedContent && (
        <NewEventDetails
          content={selectedContent}
          cancelSelectContent={cancelSelectContent}
          openForm={openForm}
        />
      )}
      {editMode &&  <NewsEventForm closeForm={closeForm} content={selectedContent}}
      />
    </div>
  );
};

export default NewEventsDashboard;
