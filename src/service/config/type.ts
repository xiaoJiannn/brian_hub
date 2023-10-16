export interface request {
  method: "GET" | "POST" | "DELETE" | "PATCH";
  url: string;
  data?: object;
  headers?: object;
  params?: object;
}
