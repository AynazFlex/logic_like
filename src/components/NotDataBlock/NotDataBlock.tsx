import { FC } from "react";
import LayoutContainer from "../LayoutContainer/LayoutContainer";
import style from "./NotDataBlock.module.scss";

const NotData: FC = () => {
  return (
    <LayoutContainer>
      <div className={style.not_data}>Not Data</div>
    </LayoutContainer>
  );
};

export default NotData;
