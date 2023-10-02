export interface wjRequestConfig {
  url: string;
  data?: object;
  method: "GET" | "POST" | "DELETE" | "PATCH";
}

export interface request extends wjRequestConfig {
  url: string;
}
