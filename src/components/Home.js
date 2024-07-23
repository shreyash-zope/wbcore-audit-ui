import {Box, Button} from "@mui/material";
import {Link} from "react-router-dom";

function Home() {
  return (
    <div className="container" style={{display: "flex", gap: "20px"}}>
      <Button
        component={Link}
        to="/logs"
        variant="contained"
        sx={{
          width: 200,
          height: 100,
          borderRadius: 8,
          backgroundColor: "#f5f5f5",
          boxShadow: 3,
          color: "black",
        }}
      >
        Logs
      </Button>
      <Button
        component={Link}
        to="/charts"
        variant="contained"
        sx={{
          width: 200,
          height: 100,
          borderRadius: 8,
          backgroundColor: "#f5f5f5",
          boxShadow: 3,
          color: "black",
        }}
      >
        Charts
      </Button>
    </div>
  );
}

export default Home;
