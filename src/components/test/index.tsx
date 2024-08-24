import React from "react";
import { Button } from "antd";
import style from "./style.module.less";

export default React.memo(() => {
  const handler = () => {
    console.log("handler...");
  };
  const throwError = () => {
    throw "this is an error!";
  };
  return (
    <div className={style.test}>
      <Button type="primary" onClick={handler}>
        Primary
      </Button>
      <Button type="primary" danger onClick={throwError}>
        throwError
      </Button>
    </div>
  );
});
