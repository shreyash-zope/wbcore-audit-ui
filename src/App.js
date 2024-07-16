import "./App.css";
import React, {useState} from "react";
import Header from "./components/Header";
import SPToolCard from "./components/SPToolCard";

function App() {
  const [data, setData] = useState([]);

  const handleData = fetchedData => {
    setData(fetchedData);
  };

  return (
    <div className="container">
      <Header onApplyFilter={handleData} />
      <SPToolCard data={data} />
    </div>
  );
}

export default App;
