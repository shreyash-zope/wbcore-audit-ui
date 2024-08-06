import {Box, Collapse, Divider, Typography} from "@mui/material";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import {useState} from "react";
import IconButton from "@mui/material/IconButton";
import ExpandMoreSharpIcon from "@mui/icons-material/ExpandMoreSharp";
import ExpandLessSharpIcon from "@mui/icons-material/ExpandLessSharp";
import Chip from "@mui/material/Chip";
import DataNotFound from "./DataNotFound";
// import dayjs from "dayjs";

const styles = {
   display: "flex",
   border: "1px solid #bdbdbd",
   borderRadius: "15px",
   backgroundColor: "#f5f5f5",
   boxShadow: 3,
   justifyContent: "space-around",
   flexDirection: "column",
   margin: "15px 20px",
   padding: "20px 20px 0px",
};

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

function SPToolCard({data}) {
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
               <Box sx={styles} key={index}>
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
                           <div>{el.type || "sp_change"}</div>
                        </div>
                        <div style={{display: "flex", justifyContent: "space-between"}}>
                           <div className="field-title">Article Number:</div>
                           <div>{el.payload.articleNumber}</div>
                        </div>
                     </div>
                     <Divider orientation="vertical" flexItem />
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
                           <div className="field-title">FC Code:</div>
                           <div>{el.payload.fcCode}</div>
                        </div>
                        <div style={{display: "flex", justifyContent: "space-between"}}>
                           <div className="field-title">JIT:</div>
                           <div>{el.payload.JIT}</div>
                        </div>
                        <div style={{display: "flex", justifyContent: "space-between"}}>
                           <div className="field-title">FFMplantCode:</div>
                           <div>{el.payload.FFMplantCode || el.payload.fcCode}</div>
                        </div>
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

                        <div
                           style={{
                              justifyContent: "space-evenly",
                              display: "flex",
                              flexDirection: "column",
                              gap: "7px",
                           }}
                        >
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
                     <Collapse in={checked[index]} unmountOnExit>
                        <Divider variant="fullWidth" />
                        <Typography variant="subtitle1" gutterBottom sx={{margin: "5px", padding: "5px"}}>
                           {JSON.stringify(el.payload, null, 2)}
                        </Typography>
                     </Collapse>
                  </div>
               </Box>
            ))
         ) : (
            <DataNotFound />
         )}
      </div>
   );
}

export default SPToolCard;
