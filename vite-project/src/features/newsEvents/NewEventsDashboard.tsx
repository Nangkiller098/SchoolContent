/* eslint-disable react-refresh/only-export-components */
import { observer } from "mobx-react-lite";
import { Content } from "../../app/models/Content";
import { useStore } from "../../app/stores/store";
import NewsEventsList from "./NewsEventsList";
import NewEventDetails from "./details/NewEventDetails";
import NewsEventForm from "./form/NewsEventForm";

interface Props {
  contents: Content[];
  createOrEdit: (content: Content) => void;
  deleteContent: (id: string) => void;
  submitting: boolean;
}
const NewEventsDashboard = ({
  contents,
  createOrEdit,
  deleteContent,
  submitting,
}: Props) => {
  const { contentStore } = useStore();
  const { selectedContent, editMode } = contentStore;
  return (
    <div className="flex justify-center">
      <NewsEventsList contents={contents} />
      {selectedContent && !editMode && <NewEventDetails />}
      {editMode && (
        <NewsEventForm
          submitting={submitting}
          createOrEdit={createOrEdit}
          deleteContent={deleteContent}
        />
      )}
    </div>
  );
};

export default observer(NewEventsDashboard);
