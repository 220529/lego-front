import React from "react";
import { Button } from "antd";
import Header from "@/components/header";

const App: React.FC = () => {
  const increase = () => {
    // @ts-ignore
    console.log("increase", abc);
  };
  return (
    <div className="App">
      <Header />
      <span>home</span>
      <Button danger onClick={increase}>
        Break the world
      </Button>
    </div>
  );
};

export default React.memo(App);
