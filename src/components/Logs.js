import {useState} from "react";
import Header from "./Header";
import {Backdrop, CircularProgress} from "@mui/material";
import Error from "./Error";
import SPToolCard from "./SPToolCard";
import SlotNxtOpsCard from "./SlotNxtOpsCard";
import SlotNxtSupportCard from "./SlotNxtSupportCard";
import Pagination from "@mui/material/Pagination";

function Logs() {
  const [data, setData] = useState();
  const [module, setModule] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [page, setPage] = useState(1);
  const [count, setCount] = useState();

  const handleData = (fetchedData, selectedModule) => {
    setData(fetchedData);
    setModule(selectedModule);
    setIsLoading(false);
  };

  const handlePageChange = (event, value) => {
    setPage(value);
  };
  return (
    <div className="container">
      <Header
        onSearch={handleData}
        setIsLoading={setIsLoading}
        setError={setError}
        page={page}
        setCount={setCount}
        setPage={setPage}
      />

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

      <div
        style={{
          position: "absolute",
          left: "50%",
          margin: "30px 0",
          transform: "translate(-50%, -50%)",
          display: module ? (data.length !== 0 ? (!isLoading ? "" : "none") : "none") : "none",
        }}
      >
        <Pagination
          count={count}
          page={page}
          onChange={handlePageChange}
          color="primary"
          sx={{
            border: "1px solid #bdbdbd",
            borderRadius: "30px",
            backgroundColor: "#f5f5f5",
            boxShadow: 3,
            padding: "10px",
          }}
          size="large"
        />
      </div>
    </div>
  );
}

export default Logs;
