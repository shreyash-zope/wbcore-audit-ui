import {
   Box,
   Button,
   Divider,
   Drawer,
   FormControlLabel,
   FormLabel,
   IconButton,
   Radio,
   RadioGroup,
   Typography,
} from "@mui/material";
import React, {useState} from "react";
import FilterListRoundedIcon from "@mui/icons-material/FilterListRounded";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import {
   Checkbox,
   FormControl,
   InputLabel,
   ListItemText,
   MenuItem,
   OutlinedInput,
   Select,
   TextField,
} from "@mui/material";

function SPToolFilter({appliedFilters, fetchData, initialFilter, setPage}) {
   const [open, setOpen] = useState(false);

   const toggleDrawer = newOpen => () => {
      setOpen(newOpen);
   };

   const FC = [
      {
         fcName: "Kanjur",
         fcId: "AAA0",
      },
      {
         fcName: "Kalyan",
         fcId: "AAD0",
      },
      {
         fcName: "Mulund",
         fcId: "AAB0",
      },
      {
         fcName: "MiraRoad",
         fcId: "AAE0",
      },
      {
         fcName: "Kiwale",
         fcId: "AAG0",
      },
      {
         fcName: "Belapur",
         fcId: "AAF0",
      },
      {
         fcName: "Kushaiguda",
         fcId: "CAD0",
      },
      {
         fcName: "CK Palya",
         fcId: "DAB0",
      },
      {
         fcName: "Nava Naroda",
         fcId: "FAA0",
      },
      {
         fcName: "Jahangirpura",
         fcId: "FAC0",
      },
      {
         fcName: "Sardar Nagar",
         fcId: "FAB0",
      },
      {
         fcName: "Kanadia Road",
         fcId: "IAA0",
      },
      {
         fcName: "Ayodhya Bypass",
         fcId: "IAB0",
      },
      {
         fcName: "Hennur",
         fcId: "DAA0",
      },
      {
         fcName: "Gachibowli",
         fcId: "UCA0",
      },
      {
         fcName: "Panvel",
         fcId: "AAC0",
      },
      {
         fcName: "Dombivali",
         fcId: "AAH0",
      },
      {
         fcName: "Kolhapur",
         fcId: "AAL0",
      },
      {
         fcName: "Hingna",
         fcId: "AAK0",
      },
      {
         fcName: "Gajuwaka",
         fcId: "EAA0",
      },
      {
         fcName: "Pedda Amberpet",
         fcId: "CAC0",
      },
      {
         fcName: "Thane Cadbury",
         fcId: "AAI0",
      },
      {
         fcName: "NH 6, Bhilai FC",
         fcId: "PAB0",
      },
      {
         fcName: "Belgaum",
         fcId: "DAD0",
      },
      {
         fcName: "Vijayawada",
         fcId: "EAB0",
      },
      {
         fcName: "Karamsad, Anand",
         fcId: "FAE0",
      },
      {
         fcName: "Ring Road, Raipur",
         fcId: "PAA0",
      },
      {
         fcId: "FAD0",
         fcName: "Sanand",
      },
      {
         fcId: "GAA0",
         fcName: "Malviya Nagar, Jaipur",
      },
      {
         fcId: "QAA0",
         fcName: "Ghaziabad",
      },
      {
         fcId: "MNA0",
         fcName: "Peer Muchalla",
      },
      {
         fcId: "AAM0",
         fcName: "Vasai",
      },
      {
         fcId: "KAA0",
         fcName: "Grand Mall, Chennai - DGR",
      },
      {
         fcId: "CAF0",
         fcName: "Karkhana",
      },
      {
         fcId: "AAO0",
         fcName: "Wagholi",
      },
      {
         fcId: "KAB0",
         fcName: "Perungudi",
      },
      {
         fcId: "FC01",
         fcName: "testingFC",
      },
      {
         fcId: "FC00",
         fcName: "Testing FC",
      },
      {
         fcId: "AA00",
         fcName: "Thane IFC",
      },
      {
         fcId: "AAP0",
         fcName: "Goregaon FC",
      },
      {
         fcId: "AB00",
         fcName: "Sumeet Bhiwandi",
      },
   ];
   const priceType = ["spupdate", "inclusion", "exclusion", "batchflip", "articleMapping"];
   const statusArr = ["created", "approved", "committed", "rejected", "originFailed", "underReview", "autoRejected"];
   const [fcId, setFcId] = useState([]);
   const [articleNumber, setArticleNumber] = useState("");
   const [type, setType] = useState([]);
   const [status, setStatus] = useState([]);
   const [userId, setUserId] = useState("");
   const [sortType, setSortType] = useState("desc");
   const [onHold, setOnHold] = useState("false");

   const handleFcChange = event => {
      event.preventDefault();
      const {
         target: {value},
      } = event;
      setFcId(typeof value === "string" ? value.split(",") : value);
   };

   const handleTypeChange = event => {
      const {
         target: {value},
      } = event;
      setType(typeof value === "string" ? value.split(",") : value);
   };

   const handleStatusChange = event => {
      const {
         target: {value},
      } = event;
      setStatus(typeof value === "string" ? value.split(",") : value);
   };

   const handleApply = () => {
      setOpen(false);
      const filter = {};
      if (fcId.length > 0) filter.fcId = fcId.toString();
      if (articleNumber) filter.articleNumber = articleNumber.replaceAll(" ", "");
      if (type.length > 0) filter.type = type.toString();
      if (status.length > 0) filter.status = status.toString();
      if (userId) filter.userId = userId.replaceAll(" ", "");
      if (type.length === 1 && ["spupdate", "inclusion", "batchflip"].includes(type[0])) filter.onHold = onHold;
      filter.sortBy = "createdAt";
      filter.sortType = sortType;
      setPage(1);
      appliedFilters(filter);
      fetchData(Object.assign(filter, initialFilter));
   };

   return (
      <div>
         <Button onClick={toggleDrawer(true)} variant="contained" startIcon={<FilterListRoundedIcon />}>
            filter
         </Button>
         <Drawer open={open} anchor="right">
            <Box sx={{width: 450, height: "100%", backgroundColor: "#f5f5f5"}} role="presentation">
               <div
                  style={{
                     padding: "30px",
                     display: "flex",
                     flexDirection: "column",
                     height: "100%",
                  }}
               >
                  <div style={{display: "flex", justifyContent: "space-between", alignItems: "center"}}>
                     <Typography variant="h4" color="textPrimary">
                        Filters
                     </Typography>
                     <IconButton onClick={toggleDrawer(false)}>
                        <CloseRoundedIcon fontSize="large" />
                     </IconButton>
                  </div>
                  <Divider />
                  <div style={{margin: "40px 20px", display: "flex", flexDirection: "column", gap: "20px"}}>
                     <FormControl>
                        <InputLabel id="fc-select">FC</InputLabel>
                        <Select
                           labelId="fc-select"
                           id="fc-select"
                           multiple
                           value={fcId}
                           onChange={handleFcChange}
                           input={<OutlinedInput label="FC" />}
                           renderValue={selected => selected.join(", ")}
                        >
                           {FC.map(fc => (
                              <MenuItem key={fc.fcId} value={fc.fcId}>
                                 <Checkbox checked={fcId.indexOf(fc.fcId) > -1} />
                                 <ListItemText primary={`${fc.fcId} - ${fc.fcName}`} />
                              </MenuItem>
                           ))}
                        </Select>
                     </FormControl>
                     <TextField
                        id="article-number"
                        label="Article Number"
                        value={articleNumber}
                        onChange={event => setArticleNumber(event.target.value)}
                     />
                     <FormControl>
                        <InputLabel id="select-type">Type</InputLabel>
                        <Select
                           labelId="select-type"
                           id="select-type"
                           multiple
                           value={type}
                           onChange={handleTypeChange}
                           input={<OutlinedInput label="Type" />}
                           renderValue={selected => selected.join(", ")}
                        >
                           {priceType.map(t => (
                              <MenuItem key={t} value={t}>
                                 <Checkbox checked={type.indexOf(t) > -1} />
                                 <ListItemText primary={t} />
                              </MenuItem>
                           ))}
                        </Select>
                     </FormControl>
                     <FormControl
                        sx={{
                           display:
                              type.length === 1 && ["spupdate", "inclusion", "batchflip"].includes(type[0])
                                 ? ""
                                 : "none",
                        }}
                     >
                        <FormLabel id="on-hold">On Hold</FormLabel>
                        <RadioGroup
                           row
                           aria-labelledby="on-hold"
                           name="on-hold"
                           value={onHold}
                           onChange={event => setOnHold(event.target.value)}
                        >
                           <FormControlLabel value="true" control={<Radio />} label="True" />
                           <FormControlLabel value="false" control={<Radio />} label="False" />
                        </RadioGroup>
                     </FormControl>
                     <FormControl>
                        <InputLabel id="select-status">Status</InputLabel>
                        <Select
                           labelId="select-status"
                           id="select-status"
                           multiple
                           value={status}
                           onChange={handleStatusChange}
                           input={<OutlinedInput label="Status" />}
                           renderValue={selected => selected.join(", ")}
                        >
                           {statusArr.map(s => (
                              <MenuItem key={s} value={s}>
                                 <Checkbox checked={status.indexOf(s) > -1} />
                                 <ListItemText primary={s} />
                              </MenuItem>
                           ))}
                        </Select>
                     </FormControl>
                     <TextField
                        id="user-id"
                        label="User Id"
                        value={userId}
                        onChange={event => setUserId(event.target.value)}
                     />
                     <TextField disabled id="sortBY" label="Sort By" defaultValue="createdAt" color="primary" />
                     <FormControl>
                        <FormLabel id="sort-type">Sort Type</FormLabel>
                        <RadioGroup
                           row
                           aria-labelledby="sort-type"
                           name="sort-type"
                           value={sortType}
                           onChange={event => setSortType(event.target.value)}
                        >
                           <FormControlLabel value="desc" control={<Radio />} label="desc" />
                           <FormControlLabel value="asc" control={<Radio />} label="asc" />
                        </RadioGroup>
                     </FormControl>
                  </div>
                  <div style={{display: "flex", justifyContent: "center"}}>
                     <Button onClick={handleApply} variant="contained" endIcon={<FilterListRoundedIcon />}>
                        apply
                     </Button>
                  </div>
               </div>
            </Box>
         </Drawer>
      </div>
   );
}

export default SPToolFilter;
