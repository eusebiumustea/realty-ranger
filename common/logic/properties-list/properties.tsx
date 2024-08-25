import React from "react";
import { ViewLogic } from "../types";
import { PropertiesListProps } from "./types";
import { useRecoilState } from "recoil";
import { propertiesListState } from "./atom";
import { useRequest } from "../helpers/use-request";
export function PropertiesListProvider({
  view: ViewComponent,
}: ViewLogic<PropertiesListProps>) {
  const [state, setState] = useRecoilState(propertiesListState);
  const request = useRequest();
  React.useEffect(() => {
    request({ method: "get", url: "/properties" })
      .then((res) => {
        if (res.status != 200) {
          setState((prev) => ({
            ...prev,
            loading: false,
            error: res.statusText,
          }));
          return;
        }
        setState((prev) => ({
          ...prev,
          loading: false,
          data: res.data,
          error: null,
        }));
      })
      .catch((reason) =>
        setState((prev) => ({ ...prev, loading: false, error: String(reason) }))
      );
  }, []);
  return <ViewComponent {...state} />;
}
