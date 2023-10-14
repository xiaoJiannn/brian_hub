import { ElLoading, LoadingOptions } from "element-plus";

export const baseURL = "http://127.0.0.1";
export const port = 8000;
export const timeout = 500000;

export const option = {
  fullscreen: true,
  text: "loading",
};

export class loading {
  loading: any;
  fullscreen: boolean | any;
  text: string | any;
  constructor(opt: LoadingOptions) {
    this.fullscreen = opt.fullscreen;
    this.text = opt.text;
  }
  showloading() {
    this.loading = ElLoading.service({
      fullscreen: this.fullscreen,
      text: this.text,
    });
  }
  close() {
    this.loading.close();
  }
}
