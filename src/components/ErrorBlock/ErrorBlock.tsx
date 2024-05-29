import { FC } from "react";
import LayoutContainer from "../LayoutContainer/LayoutContainer";
import style from "./ErrorBlock.module.scss";

interface IProps {
  message: string;
  resetError: () => void;
}

const ErrorBlock: FC<IProps> = ({ message, resetError }) => {
  return (
    <LayoutContainer>
      <div className={style.wrapper}>
        <div className={style.message} onClick={resetError}>
          {message}
        </div>
        <button className={style.good} onClick={resetError}>
          Хорошо
        </button>
      </div>
    </LayoutContainer>
  );
};

export default ErrorBlock;
