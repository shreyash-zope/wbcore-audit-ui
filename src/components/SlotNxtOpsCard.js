import {Chip, Collapse, Divider, Typography} from "@mui/material";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import {useState} from "react";
import IconButton from "@mui/material/IconButton";
import ExpandMoreSharpIcon from "@mui/icons-material/ExpandMoreSharp";
import ExpandLessSharpIcon from "@mui/icons-material/ExpandLessSharp";
import DataNotFound from "./DataNotFound";

const table_head = {
  fontWeight: "bold",
  fontSize: "15px",
};

const table_body = {
  fontSize: "15px",
};

const status = {
  committed: "success",
  rejected: "error",
  autoRejected: "error",
  originFailed: "default",
  underReview: "warning",
  created: "primary",
  approved: "primary",
};

function SlotNxtOpsCard({data}) {
  const [checked, setChecked] = useState({});

  const handleChange = index => {
    setChecked(prev => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  return (
    <div>
      {data.length ? (
        data.map((el, index) => (
          <div className="myCard" key={index}>
            <div className="main-card">
              <div
                style={{
                  justifyContent: "center",
                  display: "flex",
                  flexDirection: "column",
                  width: "15%",
                  gap: "25px",
                }}
              >
                <div style={{display: "flex", justifyContent: "space-between"}}>
                  <div className="field-title">Type:</div>
                  <div>{el.activityLog[0].type}</div>
                </div>
                <div style={{display: "flex", justifyContent: "space-between"}}>
                  <div className="field-title">Service Name:</div>
                  <div>{el.serviceName}</div>
                </div>
              </div>
              <Divider orientation="vertical" flexItem />
              <div
                style={{
                  justifyContent: "center",
                  display: "flex",
                  flexDirection: "column",
                  width: "18%",
                  gap: "20px",
                }}
              >
                <div style={{display: "flex", justifyContent: "space-between"}}>
                  <div className="field-title">FC Code:</div>
                  <div>{el.activityLog[0].payload.fcId}</div>
                </div>
                <div
                  style={{
                    display: el.activityLog[0].payload.shipMode ? "flex" : "none",
                    justifyContent: "space-between",
                  }}
                >
                  <div className="field-title">Ship Mode:</div>
                  <div>{el.activityLog[0].payload.shipMode}</div>
                </div>
                {Object.keys(el.activityLog[0].payload.slots[0]).map((ele, index) => (
                  <div style={{display: ele === "uid" ? "none" : "flex", justifyContent: "space-between"}} key={index}>
                    <div className="field-title"> {ele}: </div>
                    <div>{el.activityLog[0].payload.slots[0][ele]}</div>
                  </div>
                ))}
              </div>

              <Divider orientation="vertical" flexItem />
              <div>
                <div className="field-title">Activity logs :</div>
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
              <Divider orientation="vertical" flexItem />
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  alignItems: "start",
                  padding: "20px 0",
                }}
              >
                <Chip
                  label={el.activityLog[0].action}
                  color={status[el.activityLog[0].action]}
                  variant="outlined"
                  sx={{fontSize: "16px", padding: "10px", fontWeight: "bold"}}
                />

                <div style={{justifyContent: "space-evenly", display: "flex", flexDirection: "column", gap: "7px"}}>
                  <div className="field-title">Created At:</div>
                  <div style={{fontSize: "15px"}}>{el.createdAt}</div>
                </div>
              </div>
            </div>
            <div className="more-details">
              <div style={{display: "flex", justifyContent: "center"}}>
                <IconButton aria-label="expand" onClick={() => handleChange(index)}>
                  {checked[index] ? <ExpandLessSharpIcon /> : <ExpandMoreSharpIcon />}
                </IconButton>
              </div>
              <Collapse in={checked[index]}>
                <Divider />
                <Typography variant="subtitle1" gutterBottom sx={{margin: "5px", padding: "5px"}}>
                  {JSON.stringify(el.activityLog[0].payload, null, 2)}
                </Typography>
              </Collapse>
            </div>
          </div>
        ))
      ) : (
        <DataNotFound />
      )}
    </div>
  );
}

export default SlotNxtOpsCard;
