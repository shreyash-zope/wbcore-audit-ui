import {Collapse, Divider, Typography} from "@mui/material";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import {useState} from "react";
import IconButton from "@mui/material/IconButton";
import ExpandMoreSharpIcon from "@mui/icons-material/ExpandMoreSharp";
import ExpandLessSharpIcon from "@mui/icons-material/ExpandLessSharp";
// import dayjs from "dayjs";

const table_head = {
  fontWeight: "bold",
  fontSize: "15px",
};

const table_body = {
  fontSize: "15px",
};

function SPToolCard({data}) {
  const [checked, setChecked] = useState({});

  const handleChange = index => {
    setChecked(prev => ({
      ...prev,
      [index]: !prev[index], // Toggle the collapse state for the specific card
    }));
  };

  return (
    <div>
      {data.map((el, index) => (
        <div className="myCard" key={index}>
          <div className="main-card">
            <div
              style={{
                justifyContent: "space-evenly",
                display: "flex",
                flexDirection: "column",
                width: "15%",
                gap: "25px",
              }}
            >
              <div style={{display: "flex", justifyContent: "space-between"}}>
                <div>Type</div>
                <div>{el.type || "sp_change"}</div>
              </div>
              <div style={{display: "flex", justifyContent: "space-between"}}>
                <div>Article Number</div>
                <div>{el.payload.articleNumber}</div>
              </div>
            </div>
            <Divider orientation="vertical" variant="middle" flexItem />
            <div
              style={{
                justifyContent: "space-evenly",
                display: "flex",
                flexDirection: "column",
                width: "18%",
                gap: "20px",
              }}
            >
              <div style={{display: "flex", justifyContent: "space-between"}}>
                <div>FC Code</div>
                <div>{el.payload.fcCode}</div>
              </div>
              <div style={{display: "flex", justifyContent: "space-between"}}>
                <div>JIT</div>
                <div>{el.payload.JIT}</div>
              </div>
              <div style={{display: "flex", justifyContent: "space-between"}}>
                <div>FFMplantCode</div>
                <div>{el.payload.FFMplantCode || el.payload.fcCode}</div>
              </div>
            </div>

            <Divider orientation="vertical" variant="middle" flexItem />
            <div>
              <div>Activity logs :</div>
              <Table sx={{minWidth: 650}} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell sx={table_head}>Action</TableCell>
                    <TableCell sx={table_head} align="center">
                      User Id
                    </TableCell>
                    <TableCell sx={table_head} align="center">
                      User Role
                    </TableCell>
                    <TableCell sx={table_head} align="center">
                      Action at
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {el.activityLog.map((log, logIndex) => (
                    <TableRow key={logIndex} sx={{"&:last-child td, &:last-child th": {border: 0}}}>
                      <TableCell sx={table_body} component="th" scope="row">
                        {log.action}
                      </TableCell>
                      <TableCell sx={table_body} align="center">
                        {log.userId}
                      </TableCell>
                      <TableCell sx={table_body} align="center">
                        {log.userRole}
                      </TableCell>
                      <TableCell sx={table_body} align="center">
                        {log.createdAt}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
            <Divider orientation="vertical" variant="middle" flexItem />
            <div style={{justifyContent: "space-evenly", display: "flex", flexDirection: "column", gap: "7px"}}>
              <div>Created At</div>
              <div style={{fontSize: "15px"}}>{el.createdAt}</div>
            </div>
          </div>
          {/* <Divider orientation="horizontal" variant="fullWidth" flexItem /> */}
          <div className="more-details">
            <div style={{display: "flex", justifyContent: "center"}}>
              {/* <Button onClick={() => handleChange(index)} color="inherit" variant="outlined">
                More Info
              </Button> */}
              <IconButton aria-label="expand" onClick={() => handleChange(index)}>
                {checked[index] ? <ExpandLessSharpIcon /> : <ExpandMoreSharpIcon />}
              </IconButton>
            </div>
            <Collapse in={checked[index]}>
              <Divider variant="fullWidth" />
              <Typography variant="subtitle1" gutterBottom sx={{margin: "5px", padding: "5px"}}>
                {JSON.stringify(el.payload, null, 2)}
              </Typography>
            </Collapse>
          </div>
        </div>
      ))}
    </div>
  );
}

export default SPToolCard;
