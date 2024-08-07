import {
   Backdrop,
   Box,
   Button,
   Checkbox,
   CircularProgress,
   FormControl,
   IconButton,
   InputLabel,
   ListItemText,
   MenuItem,
   OutlinedInput,
   Select,
   Tooltip,
   Zoom,
} from "@mui/material";
import {LocalizationProvider} from "@mui/x-date-pickers";
import {DesktopDateTimeRangePicker} from "@mui/x-date-pickers-pro";
import {AdapterDayjs} from "@mui/x-date-pickers/AdapterDayjs";
import dayjs from "dayjs";
import {useState} from "react";
import BarChartIcon from "@mui/icons-material/BarChart";
import {BarChart} from "@mui/x-charts";
import Error from "./Error";
import {Link} from "react-router-dom";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import DataNotFound from "./DataNotFound";

const styles = {
   border: "1px solid #bdbdbd",
   borderRadius: "15px",
   backgroundColor: "#f5f5f5",
   boxShadow: 3,
   display: "flex",
   alignItems: "center",
   height: "70px",
   justifyContent: "space-around",
};

const statusArr = ["created", "approved", "committed", "rejected", "originFailed", "underReview", "autoRejected"];

function Charts() {
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
   const [fcId, setFcId] = useState([]);
   const [date, setDate] = useState([dayjs().subtract(6, "days").startOf("day"), dayjs().endOf("day")]);
   const [from, setFrom] = useState(dayjs(date[0]).add(330, "m").toJSON());
   const [to, setTo] = useState(dayjs(date[1]).add(330, "m").toJSON());
   const [error, setError] = useState("");
   const [data, setData] = useState([]);
   const [action, setAction] = useState([]);
   const [resultBy, setResultBy] = useState("date");
   const [isLoading, setIsLoading] = useState(false);
   const [notFound, setNotFound] = useState(false);

   const handleDate = newDate => {
      setDate(newDate);
      setFrom(dayjs(newDate[0]).add(330, "m").toJSON());
      setTo(dayjs(newDate[1]).add(330, "m").toJSON());
   };

   const formatData = data => {
      const result = [];
      let formatedData = {};
      formatedData.xAxis = [];
      formatedData.critical = [];
      formatedData.nonCritical = [];
      if (resultBy === "fc") {
         for (let fc in data) {
            formatedData.xAxis.push(fc);
            formatedData.critical.push(data[fc].criticalTasks);
            formatedData.nonCritical.push(data[fc].nonCriticalTasks);
         }
         formatedData.label = "FC";
         result.push(formatedData);
      } else {
         for (let fc in data) {
            formatedData = {};
            formatedData.xAxis = [];
            formatedData.critical = [];
            formatedData.nonCritical = [];
            for (let date in data[fc]) {
               formatedData.xAxis.push(date);
               formatedData.critical.push(data[fc][date].criticalTasks);
               formatedData.nonCritical.push(data[fc][date].nonCriticalTasks);
            }
            formatedData.label = fc;
            result.push(formatedData);
         }
      }
      return result;
   };

   const handleGenerate = async () => {
      try {
         setIsLoading(true);
         const filters = {from, to, resultBy};
         if (action.length > 0) filters.action = action;
         if (fcId.length > 0) filters.fcId = fcId.toString();
         console.log(filters);
         setError("");
         const queryString = new URLSearchParams(filters).toString();
         const response = await fetch(`http://localhost:3909/core/audits/priority?${queryString}`);
         if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
         }
         const result = await response.json();
         if (Object.keys(result.data).length) {
            setNotFound(false);
            setNotFound(true);
            const data = formatData(result.data);
            setData(data);
         } else setData([]);
         setIsLoading(false);
      } catch (error) {
         setError(error.message);
      }
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
      setAction(typeof value === "string" ? value.split(",") : value);
   };

   return (
      <div className="container">
         <Box sx={styles}>
            <FormControl sx={{width: 90}}>
               <InputLabel id="result-by">Result By</InputLabel>
               <Select
                  labelId="result-by"
                  id="result-by"
                  value={resultBy}
                  onChange={event => setResultBy(event.target.value)}
                  input={<OutlinedInput label="Result By" />}
               >
                  <MenuItem value="date">Date</MenuItem>
                  <MenuItem value="fc">FC</MenuItem>
               </Select>
            </FormControl>

            <LocalizationProvider dateAdapter={AdapterDayjs}>
               <DesktopDateTimeRangePicker
                  localeText={{start: "From", end: "To"}}
                  defaultValue={[dayjs().subtract(6, "days").startOf("day"), dayjs().endOf("day")]}
                  onChange={handleDate}
                  value={date}
                  // sx={{marginLeft: "17%"}}
               />
            </LocalizationProvider>

            <Button
               variant="contained"
               onClick={handleGenerate}
               endIcon={<BarChartIcon />}
               // sx={{marginRight: "auto", marginLeft: "80px"}}
            >
               Generate
            </Button>

            <div style={{display: "flex", gap: "40px"}}>
               <FormControl sx={{width: 250}}>
                  <InputLabel id="select-status">Status</InputLabel>
                  <Select
                     labelId="select-status"
                     id="select-status"
                     multiple
                     value={action}
                     onChange={handleStatusChange}
                     input={<OutlinedInput label="Status" />}
                     renderValue={selected => selected.join(", ")}
                  >
                     {statusArr.map(s => (
                        <MenuItem key={s} value={s}>
                           <Checkbox checked={action.indexOf(s) > -1} />
                           <ListItemText primary={s} />
                        </MenuItem>
                     ))}
                  </Select>
               </FormControl>

               <FormControl sx={{width: 300}}>
                  <InputLabel id="select-fc">FC</InputLabel>
                  <Select
                     labelId="select-fc"
                     id="select-fc"
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
            </div>

            <Tooltip title="Home" TransitionComponent={Zoom}>
               <IconButton component={Link} to="/">
                  <HomeOutlinedIcon fontSize="large" sx={{color: "black"}} />
               </IconButton>
            </Tooltip>
         </Box>
         {isLoading ? (
            <Backdrop sx={{color: "#fff", zIndex: theme => theme.zIndex.drawer + 1}} open={isLoading}>
               <div className="loading">
                  <div style={{fontSize: "20px"}}>Searching</div>
                  <CircularProgress color="inherit" />
               </div>
            </Backdrop>
         ) : error ? (
            <Error message={error} />
         ) : data.length ? (
            data.map((chart, index) => (
               <div style={{display: "flex", justifyContent: "center"}} key={index}>
                  <Box
                     key={index}
                     sx={{
                        border: "2px solid #bdbdbd",
                        borderRadius: 8,
                        backgroundColor: "#f5f5f5",
                        color: "white",
                        boxShadow: 3,
                        width: data.length === 1 ? 1500 : 1300,
                        height: data.length === 1 ? 700 : 550,
                        padding: 3,
                        margin: "15px 20px",
                     }}
                  >
                     <BarChart
                        key={index}
                        series={[
                           {label: "critical", data: chart.critical, highlightScope: {highlight: "item"}},
                           {label: "non-critical", data: chart.nonCritical, highlightScope: {highlight: "item"}},
                        ]}
                        xAxis={[
                           {
                              data: chart.xAxis,
                              scaleType: "band",
                              categoryGapRatio: 0.4,
                              barGapRatio: 0.05,
                              label: chart.label,
                           },
                        ]}
                     />
                  </Box>
               </div>
            ))
         ) : notFound ? (
            <DataNotFound />
         ) : (
            ""
         )}
      </div>
   );
}

export default Charts;
