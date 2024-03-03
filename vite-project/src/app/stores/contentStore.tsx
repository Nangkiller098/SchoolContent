import { makeAutoObservable, runInAction } from "mobx";
import { Content } from "../models/Content";
import agent from "../api/agent";
import { v4 as uuid } from "uuid";

export default class ContentStore {
  contentRegistry = new Map<string, Content>();
  selectedContent: Content | undefined = undefined;
  editMode = false;
  loading = false;
  loadingInitial = false;

  constructor() {
    makeAutoObservable(this);
  }
  get contentsByDate() {
    return Array.from(this.contentRegistry.values()).sort(
      (a, b) => Date.parse(b.createAt) - Date.parse(a.createAt)
    );
  }

  loadContents = async () => {
    this.setLoadingInitial(true);
    try {
      const contents = await agent.Content.list();
      runInAction(() => {
        contents.forEach((content: Content) => {
          content.createAt = content.createAt.split("T")[0];
          this.contentRegistry.set(content.id, content);
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
    this.selectedContent = this.contentRegistry.get(id);
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

  createContent = async (content: Content) => {
    this.loading = true;
    content.id = uuid();
    try {
      await agent.Content.create(content);
      runInAction(() => {
        this.contentRegistry.set(content.id, content);
        this.selectedContent = content;
        this.editMode = false;
        this.loading = false;
      });
    } catch (error) {
      console.log(error);
      runInAction(() => {
        this.loading = false;
      });
    }
  };

  updateContent = async (content: Content) => {
    this.loading = true;
    try {
      await agent.Content.update(content);
      runInAction(() => {
        this.contentRegistry.set(content.id, content);
        this.selectedContent = content;
        this.editMode = false;
        this.loading = false;
      });
    } catch (error) {
      console.log(error);
      runInAction(() => {
        this.loading = false;
      });
    }
  };

  deleteContent = async (id: string) => {
    this.loading = true;
    try {
      await agent.Content.delete(id);
      runInAction(() => {
        this.contentRegistry.delete(id);
        if (this.selectedContent?.id === id) this.cancelSelectedContent();
        this.loading = false;
      });
    } catch (error) {
      console.log(error);
      runInAction(() => {
        this.loading = false;
      });
    }
  };
}
