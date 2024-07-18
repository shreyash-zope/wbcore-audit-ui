import "./App.css";
import React, {useState} from "react";
import Header from "./components/Header";
import SPToolCard from "./components/SPToolCard";
import SlotNxtOpsCard from "./components/SlotNxtOpsCard";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import SlotNxtSupportCard from "./components/SlotNxtSupportCard";

function App() {
  const [data, setData] = useState([]);
  const [module, setModule] = useState();

  const handleData = (fetchedData, selectedModule) => {
    setData(fetchedData);
    setModule(selectedModule);
  };

  return (
    <div className="container">
      <Header onSearch={handleData} />
      {module === "spupdate" || module === "batchflip" ? (
        <SPToolCard data={data} />
      ) : module === "slotnxtops" ? (
        <SlotNxtOpsCard data={data} />
      ) : module === "slotnxtsupport" ? (
        <SlotNxtSupportCard data={data} />
      ) : (
        ""
      )}
    </div>
  );
}

export default App;
