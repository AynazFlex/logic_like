import { FC, PropsWithChildren } from "react";
import style from "./LayoutContainer.module.scss";

const LayoutContainer: FC<PropsWithChildren> = ({ children }) => {
  return <div className={style.container}>{children}</div>;
};

export default LayoutContainer;
