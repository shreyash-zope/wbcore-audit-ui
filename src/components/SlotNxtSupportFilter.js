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
import {LocalizationProvider, TimeField} from "@mui/x-date-pickers";
import {AdapterDayjs} from "@mui/x-date-pickers/AdapterDayjs";
import dayjs from "dayjs";

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
const slotnxtsupportType = [
   "addSlot",
   "toggleSlot",
   "addPincode",
   "modifyPincode",
   "togglePincode",
   "addPup",
   "modifyPup",
   "togglePup",
   "addPincodeSlots",
   "togglePincodeSlots",
   "addPupSlots",
   "togglePupSlots",
   "updateRange",
];
const statusArr = ["created", "approved", "committed", "rejected", "originFailed", "underReview", "autoRejected"];
const slotTypes = [
   {type: "MTO", description: "Made To Order"},
   {type: "FES", description: "Festival Slot"},
   {type: "FFY", description: "Fresh For You"},
   {type: "HVY", description: "Heavy"},
   {type: "BOG", description: "Order Shipment Trial Slot"},
   {type: "GEN", description: "General Slot"},
   {type: "BIG", description: "Inventory Trial Slot"},
   {type: "EXP", description: "Express Slot"},
];

function SlotNxtSupportFilter({appliedFilters, fetchData, initialFilter, setPage}) {
   const [open, setOpen] = useState(false);

   const toggleDrawer = newOpen => () => {
      setOpen(newOpen);
   };

   const [type, setType] = useState("");
   const [slotStartTime, setSlotStartTime] = useState();
   const [slotEndTime, setSlotEndTime] = useState();
   const [slotType, setSlotType] = useState([]);
   const [operation, setOperation] = useState("");
   const [shipMode, setShipMode] = useState("");
   const [slotId, setSlotId] = useState("");
   const [fcId, setFcId] = useState([]);
   const [pincode, setPincode] = useState("");
   const [pupId, setPupId] = useState("");
   const [city, setCity] = useState("");
   const [state, setState] = useState("");
   const [status, setStatus] = useState([]);
   const [sortType, setSortType] = useState("desc");
   const [userId, setUserId] = useState("");

   const handleSlotTypeChange = event => {
      const {
         target: {value},
      } = event;
      setSlotType(typeof value === "string" ? value.split(",") : value);
   };

   const handleFcChange = event => {
      const {
         target: {value},
      } = event;
      setFcId(typeof value === "string" ? value.split(",") : value);
   };

   const handleStatusChange = event => {
      const {
         target: {value},
      } = event;
      setStatus(typeof value === "string" ? value.split(",") : value);
   };

   const handleType = event => {
      setType(event.target.value);
      setSlotStartTime();
      setSlotEndTime();
      setSlotType([]);
      setOperation("");
      setShipMode("");
      setSlotId("");
      setFcId([]);
      setPincode("");
      setPupId("");
      setCity("");
      setState("");
   };

   const handleApply = () => {
      setOpen(false);
      const filter = {};
      if (type) filter.type = type.replaceAll(" ", "");
      if (slotStartTime) filter.slotStartTime = dayjs(slotStartTime).format("HH:mm:ss");
      if (slotEndTime) filter.slotEndTime = dayjs(slotEndTime).format("HH:mm:ss");
      if (slotType.length > 0) filter.slotType = slotType.toString();
      if (operation) filter.operation = operation;
      if (shipMode && shipMode !== "both") filter.shipMode = shipMode;
      if (slotId) filter.slotId = slotId;
      if (fcId.length > 0) filter.fcId = fcId.toString();
      if (pincode) filter.pincode = pincode.replaceAll(" ", "");
      if (city) filter.city = city.replaceAll(" ", "");
      if (state) filter.state = state.replaceAll(" ", "");
      if (status.length > 0) filter.status = status.toString();
      if (pupId) filter.pupId = pupId.replaceAll(" ", "");
      if (userId) filter.userId = userId.replaceAll(" ", "");
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
                        <InputLabel id="select-type">Type</InputLabel>
                        <Select
                           labelId="select-type"
                           id="select-type"
                           value={type}
                           onChange={handleType}
                           input={<OutlinedInput label="Type" />}
                        >
                           <MenuItem value="">
                              <em>None</em>
                           </MenuItem>
                           {slotnxtsupportType.map(t => (
                              <MenuItem key={t} value={t}>
                                 {t}
                              </MenuItem>
                           ))}
                        </Select>
                     </FormControl>

                     <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <TimeField
                           label="Slot Start Time"
                           format="HH:mm:ss"
                           value={slotStartTime}
                           onChange={newValue => setSlotStartTime(newValue)}
                           sx={{display: type === "addSlot" ? "" : "none"}}
                        />
                     </LocalizationProvider>

                     <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <TimeField
                           label="Slot End Time"
                           format="HH:mm:ss"
                           value={slotEndTime}
                           onChange={newValue => setSlotEndTime(newValue)}
                           sx={{display: type === "addSlot" ? "" : "none"}}
                        />
                     </LocalizationProvider>

                     <FormControl sx={{display: ["addSlot", "updateRange"].includes(type) ? "" : "none"}}>
                        <InputLabel id="slot-type">Slot Type</InputLabel>
                        <Select
                           labelId="slot-type"
                           id="slot-type"
                           multiple
                           value={slotType}
                           onChange={handleSlotTypeChange}
                           input={<OutlinedInput label="Slot Type" />}
                           renderValue={selected => selected.join(", ")}
                        >
                           {slotTypes.map(st => (
                              <MenuItem key={st.type} value={st.type}>
                                 <Checkbox checked={slotType.indexOf(st.type) > -1} />
                                 <ListItemText primary={`${st.type} (${st.description})`} />
                              </MenuItem>
                           ))}
                        </Select>
                     </FormControl>

                     <FormControl
                        sx={{
                           display: [
                              "toggleSlot",
                              "togglePincode",
                              "toggleSlot",
                              "togglePincodeSlots",
                              "togglePupSlots",
                           ].includes(type)
                              ? ""
                              : "none",
                        }}
                     >
                        <InputLabel id="operation">Operation</InputLabel>
                        <Select
                           labelId="operation"
                           id="operation"
                           value={operation}
                           onChange={event => setOperation(event.target.value)}
                           input={<OutlinedInput label="Operation" />}
                        >
                           <MenuItem value="">
                              <em>None</em>
                           </MenuItem>
                           <MenuItem value="enable">Enable</MenuItem>
                           <MenuItem value="disable">Disable</MenuItem>
                        </Select>
                     </FormControl>

                     <FormControl sx={{display: type === "toggleSlot" ? "" : "none"}}>
                        <InputLabel id="ship-mode">Ship Mode</InputLabel>
                        <Select
                           labelId="ship-mode"
                           id="ship-mode"
                           value={shipMode}
                           onChange={event => setShipMode(event.target.value)}
                           input={<OutlinedInput label="Ship Mode" />}
                        >
                           <MenuItem value="">
                              <em>None</em>
                           </MenuItem>
                           <MenuItem value="HD">HD</MenuItem>
                           <MenuItem value="PUP">PUP</MenuItem>
                        </Select>
                     </FormControl>

                     <FormControl
                        sx={{
                           display: [
                              "addPincode",
                              "modifyPincode",
                              "addPup",
                              "modifyPup",
                              "togglePincode",
                              "togglePup",
                              "addPincodeSlots",
                              "addPupSlots",
                              "togglePincodeSlots",
                              "togglePupSlots",
                              "updateRange",
                           ].includes(type)
                              ? ""
                              : "none",
                        }}
                     >
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
                        sx={{
                           display: [
                              "addPincode",
                              "modifyPincode",
                              "addPup",
                              "modifyPup",
                              "togglePincode",
                              "addPincodeSlots",
                              "addPupSlots",
                              "togglePincodeSlots",
                              "togglePupSlots",
                           ].includes(type)
                              ? ""
                              : "none",
                        }}
                        id="pincode"
                        label="Pincode"
                        value={pincode}
                        onChange={event => setPincode(event.target.value)}
                     />

                     <TextField
                        sx={{display: ["addPincode", "modifyPincode"].includes(type) ? "" : "none"}}
                        id="city"
                        label="City"
                        value={city}
                        onChange={event => setCity(event.target.value)}
                     />

                     <TextField
                        sx={{display: ["addPincode", "modifyPincode"].includes(type) ? "" : "none"}}
                        id="state"
                        label="State"
                        value={state}
                        onChange={event => setState(event.target.value)}
                     />

                     <TextField
                        sx={{
                           display: ["addPup", "modifyPup", "togglePup", "addPupSlots", "togglePupSlots"].includes(type)
                              ? ""
                              : "none",
                        }}
                        id="pupId"
                        label="Pup Id"
                        value={pupId}
                        onChange={event => setPupId(event.target.value)}
                     />

                     <TextField
                        sx={{
                           display: [
                              "toggleSlot",
                              "addPincodeSlots",
                              "addPupSlots",
                              "togglePincodeSlots",
                              "togglePupSlots",
                           ].includes(type)
                              ? ""
                              : "none",
                        }}
                        id="slotId"
                        label="Slot Id"
                        value={slotId}
                        onChange={event => setSlotId(event.target.value)}
                     />
                     <Divider />

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

export default SlotNxtSupportFilter;
