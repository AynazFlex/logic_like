import { FC } from "react";
import style from "./Cards.module.scss";
import { IData } from "../../types";

interface IProps {
  data: IData[];
}

const Cards: FC<IProps> = ({ data }) => {
  return (
    <div className={style.cards}>
      {data.map((item) => (
        <div className={style.card} key={item.id}>
          <div style={{ background: item.bgColor }} className={style.container}>
            <img className={style.image} src={item.image} alt={item.name} />
          </div>
          <h3 className={style.title}>{item.name}</h3>
        </div>
      ))}
    </div>
  );
};

export default Cards;
