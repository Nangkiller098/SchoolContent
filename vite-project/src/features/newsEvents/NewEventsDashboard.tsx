/* eslint-disable react-refresh/only-export-components */
import { observer } from "mobx-react-lite";
import NewsEventsList from "./NewsEventsList";

const NewEventsDashboard = () => {
  return (
    <div className="flex justify-center">
      <NewsEventsList />
    </div>
  );
};

export default observer(NewEventsDashboard);
