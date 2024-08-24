import React, {useEffect} from "react";
import Header from "@/components/header";

const App: React.FC = () => {
  useEffect(() => {
    console.log("useEffect....0824");
  }, [])
  return (
    <div className="App">
      <Header />
      <span>home</span>
    </div>
  );
};

export default React.memo(App);
