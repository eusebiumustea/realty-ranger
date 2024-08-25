import { atom } from "recoil";
import { PropertiesListProps } from "./types";

export const propertiesListState = atom<PropertiesListProps>({
  key: "properties-list",
  default: { loading: true, data: [], error: null },
});
