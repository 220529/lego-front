import React, { useEffect, useState } from "react";
import { Button } from "antd";
import style from "./style.module.less";

export default React.memo(() => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (count === 1) {
      throw new Error("Error in useEffect");
    }
  }, [count]);
  const ErrorBoundary = () => {
    setCount(count + 1);
  };
  const throwError = () => {
    throw new Error("this is an throwError!");
  };
  const setTimeoutError = () => {
    setTimeout(() => {
      throw new Error("this is an setTimeoutError!");
    }, 1000);
  };
  const rejectError = () => {
    // 模拟一个异步操作并且故意不处理错误
    new Promise((_, reject) => {
      setTimeout(() => {
        reject("this is an unhandled error in a Promise!");
      }, 1000);
    });
  };
  const tryCatchError = () => {
    try {
      throw new Error("Error in click handler");
    } catch (error) {
      console.error("Error caught in event handler:", error);
    }
  };
  const increase = () => {
    // @ts-ignore
    console.log("increase", abc);
  };
  return (
    <div className={style.test}>
      <Button type="primary" danger onClick={ErrorBoundary}>
        ErrorBoundary
      </Button>
      <Button type="primary" danger onClick={tryCatchError}>
        tryCatchError
      </Button>
      <Button type="primary" danger onClick={throwError}>
        throwError
      </Button>
      <Button type="primary" danger onClick={setTimeoutError}>
        setTimeoutError
      </Button>
      <Button type="primary" danger onClick={rejectError}>
        rejectError
      </Button>
      {/* @ts-ignore */}
      <Button danger onClick={increase}>
        Break the world
      </Button>
      ;{/* 故意加载一个不存在的图片资源以触发错误 */}
      <img src="https://example.com/nonexistent-image.jpg" alt="Example" />
      {/* 故意加载一个不存在的脚本资源以触发错误 */}
      <script src="https://example.com/nonexistent-script.js" />
    </div>
  );
});
