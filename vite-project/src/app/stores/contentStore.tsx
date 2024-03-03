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
          this.setContent(content);
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

  //load content detail if not have in the cach load using api
  loadContent = async (id: string) => {
    let content = this.getContent(id);
    //use in cache
    if (content) {
      this.selectedContent = content;
      return content;
    } else {
      this.setLoadingInitial(true);
      try {
        //loading with api
        content = await agent.Content.details(id);
        this.setContent(content!);
        runInAction(() => {
          this.selectedContent = content;
        });
        this.setLoadingInitial(false);
        return content;
      } catch (error) {
        console.log(error);
        runInAction(() => {
          this.setLoadingInitial(false);
        });
      }
    }
  };

  private setContent = (content: Content) => {
    content.createAt = content.createAt.split("T")[0];
    this.contentRegistry.set(content.id, content);
  };

  private getContent = (id: string) => {
    return this.contentRegistry.get(id);
  };

  setLoadingInitial = (state: boolean) => {
    this.loadingInitial = state;
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
