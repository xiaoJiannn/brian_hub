class Storge {
  setItem(title: any, variable: any) {
    window.localStorage.setItem(title, variable);
  }
  getItem(title: any) {
    const result = window.localStorage.getItem(title);
    return result;
  }
}

export const useStorge = new Storge();
