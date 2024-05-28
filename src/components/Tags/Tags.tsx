import { Dispatch, FC, SetStateAction } from "react";
import style from "./Tags.module.css";

interface IProps {
  tags: string[];
  tag: string;
  setTag: Dispatch<SetStateAction<string>>;
}

const Tags: FC<IProps> = ({ tags, tag, setTag }) => {
  return (
    <div className={style.tags}>
      {tags.map((key) => (
        <button disabled={key === tag} onClick={() => setTag(key)} key={key}>
          {key}
        </button>
      ))}
    </div>
  );
};

export default Tags;
