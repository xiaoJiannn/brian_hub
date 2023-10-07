export interface wjRequestConfig {
  url: string;
  data?: object;
  headers?: object;
  method: "GET" | "POST" | "DELETE" | "PATCH";
}

export interface request extends wjRequestConfig {
  headers?: object;
}
