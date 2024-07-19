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
import {Backdrop, CircularProgress} from "@mui/material";
import Error from "./components/Error";

function App() {
  const [data, setData] = useState();
  const [module, setModule] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const handleData = (fetchedData, selectedModule) => {
    setData(fetchedData);
    setModule(selectedModule);
    setIsLoading(false);
  };

  return (
    <div className="container">
      <Header onSearch={handleData} setIsLoading={setIsLoading} setError={setError} />

      {isLoading ? (
        <Backdrop sx={{color: "#fff", zIndex: theme => theme.zIndex.drawer + 1}} open={isLoading}>
          <CircularProgress color="inherit" />
        </Backdrop>
      ) : error ? (
        <Error message={error} setError={setError} />
      ) : module === "spupdate" || module === "batchflip" ? (
        <SPToolCard data={data} error={error} />
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
