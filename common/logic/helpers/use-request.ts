import axios, { AxiosRequestConfig, AxiosResponse } from "axios";

export function useRequest() {
  return <T = any, R = AxiosResponse<T>, D = any>(
    config: AxiosRequestConfig<D>
  ) =>
    axios.request<T, R, D>({ ...config, url: `localhost:8080/${config.url}` });
}
