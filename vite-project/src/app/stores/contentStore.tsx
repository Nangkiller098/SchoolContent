import { makeAutoObservable, runInAction } from "mobx";
import { Content } from "../models/Content";
import agent from "../api/agent";

export default class ContentStore {
  contents: Content[] = [];
  selectedContent: Content | undefined = undefined;
  editMode = false;
  loading = false;
  loadingInitial = false;

  constructor() {
    makeAutoObservable(this);
  }

  loadContents = async () => {
    this.setLoadingInitial(true);
    try {
      const contents = await agent.Content.list();
      runInAction(() => {
        contents.forEach((content: Content) => {
          content.createAt = content.createAt.split("T")[0];
          this.contents.push(content);
        });
        this.setLoadingInitial(false);
      });
    } catch (error) {
      console.log(error);
      runInAction(() => {
        this.setLoadingInitial(false);
      });
    }
  };

  setLoadingInitial = (state: boolean) => {
    this.loadingInitial = state;
  };

  selectContent = (id: string) => {
    this.selectedContent = this.contents.find((a) => a.id === id);
  };

  cancelSelectedContent = () => {
    this.selectedContent = undefined;
  };

  openForm = (id?: string) => {
    id ? this.selectContent(id) : this.cancelSelectedContent();
    this.editMode = true;
  };

  closeForm = () => {
    this.editMode = false;
  };
}
