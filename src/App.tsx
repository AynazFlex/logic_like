import { FC, useEffect, useState } from "react";
import style from "./App.module.scss";
import Cards from "./components/Cards/Cards";
import Tags from "./components/Tags/Tags";
import { fetchData } from "./api";
import { IDataObj } from "./types";
import ErrorBlock from "./components/ErrorBlock/ErrorBlock";
import NotData from "./components/NotDataBlock/NotDataBlock";
import LoadBlock from "./components/LoadBlock/LoadBlock";

const App: FC = () => {
  const [data, setData] = useState<IDataObj>();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [tag, setTag] = useState("Все темы");

  useEffect(() => {
    setIsLoading(true);

    fetchData()
      .then((result) => {
        const data = result.reduce<IDataObj>(
          (resObj, item) => {
            item.tags.forEach((tag) => {
              resObj[tag] ? resObj[tag]?.push(item) : (resObj[tag] = [item]);
            });

            return resObj;
          },
          { "Все темы": result }
        );

        setData(data);
      })
      .catch((error) => {
        setError(error instanceof Error ? error.message : "some error");
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    return <LoadBlock />;
  }

  if (error) {
    return <ErrorBlock message={error} resetError={() => setError("")} />;
  }

  if (!data) {
    return <NotData />;
  }

  return (
    <div className={style.app}>
      <Tags tags={Object.keys(data)} tag={tag} setTag={setTag} />
      <Cards data={data[tag]} />
    </div>
  );
};

export default App;
