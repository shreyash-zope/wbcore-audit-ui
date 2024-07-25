import {Button} from "@mui/material";
import {Link} from "react-router-dom";
import ListAltIcon from "@mui/icons-material/ListAlt";
import BarChartIcon from "@mui/icons-material/BarChart";

const style = {
  width: 200,
  height: 120,
  borderRadius: 6,
  backgroundColor: "#f5f5f5",
  boxShadow: 3,
  color: "black",
  fontSize: "20px",
  display: "flex",
  gap: "10px",
};

function Home() {
  return (
    <div
      className="container"
      style={{display: "flex", gap: "50px", width: "100%", justifyContent: "center", marginTop: "50px"}}
    >
      <Button component={Link} to="/logs" variant="contained" sx={style}>
        <ListAltIcon fontSize="large" />
        Logs
      </Button>
      <Button component={Link} to="/charts" variant="contained" sx={style}>
        <BarChartIcon fontSize="large" />
        Charts
      </Button>
    </div>
  );
}

export default Home;
