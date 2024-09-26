import React from "react";
import { Button } from "antd";
import Header from "@/components/header";

const App: React.FC = () => {
  return (
    <div className="App">
      <Header />
      <span>home</span>
      {/* @ts-ignore */}
      <Button danger onClick={() => methodDoesNotExist()}>
        Break the world
      </Button>
    </div>
  );
};

export default React.memo(App);
