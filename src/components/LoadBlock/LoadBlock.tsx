import { FC } from "react";
import LayoutContainer from "../LayoutContainer/LayoutContainer";
import style from "./LoadBlock.module.scss";

const LoadBlock: FC = () => {
  return (
    <LayoutContainer>
      <div className={style.load}>Loading...</div>
    </LayoutContainer>
  );
};

export default LoadBlock;
