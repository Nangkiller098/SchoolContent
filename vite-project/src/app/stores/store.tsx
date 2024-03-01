/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext } from "react";
import ContentStore from "./contentStore";

interface Store {
  contentStore: ContentStore;
}

export const store: Store = {
  contentStore: new ContentStore(),
};

export const StoreContext = createContext(store);

export function useStore() {
  return useContext(StoreContext);
}
