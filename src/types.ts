export interface IData {
  name: string;
  id: string;
  image: string;
  bgColor: string;
  tags: string[];
}

export interface IDataObj {
  [tag: string]: IData[];
}
