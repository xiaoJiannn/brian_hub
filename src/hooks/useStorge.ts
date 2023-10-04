class Storge {
  setItem(title: string, variable: string) {
    window.localStorage.setItem(title, variable);
  }
  getItem(title: string) {
    const result = window.localStorage.getItem(title);
    return result;
  }
}

export const useStorge = new Storge();
