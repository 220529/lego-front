import React from "react";
import Header from "@/components/header";
import Test from "@/components/test";

const App: React.FC = () => {
  return (
    <div className="App">
      <Header />
      <span>home</span>
      <Test />
    </div>
  );
};

export default React.memo(App);
