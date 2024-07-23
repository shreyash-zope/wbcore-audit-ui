import {useState} from "react";
import Header from "./Header";
import {Backdrop, CircularProgress} from "@mui/material";
import Error from "./Error";
import SPToolCard from "./SPToolCard";
import SlotNxtOpsCard from "./SlotNxtOpsCard";
import SlotNxtSupportCard from "./SlotNxtSupportCard";

function Logs() {
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
          <div className="loading">
            <div style={{fontSize: "20px"}}>Searching</div>
            <CircularProgress color="inherit" />
          </div>
        </Backdrop>
      ) : error ? (
        <Error message={error} />
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

export default Logs;
