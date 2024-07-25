import {
  Box,
  Button,
  Checkbox,
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

const styles = {
  border: "1px solid #bdbdbd",
  borderRadius: "15px",
  backgroundColor: "#f5f5f5",
  boxShadow: 3,
  display: "flex",
  alignItems: "center",
  height: "70px",
  gap: "80px",
  padding: "0 40px",
};

function Charts() {
  const FC = {
    AAA0: "Kanjur",
    AAB0: "Mulund",
    AAC0: "Panvel",
    AAD0: "Kalyan",
    AAE0: "MiraRoad",
    AAF0: "Belapur",
  };
  const [fcId, setFcId] = useState([]);
  const [date, setDate] = useState([dayjs().subtract(6, "days").startOf("day"), dayjs().endOf("day")]);
  const [from, setFrom] = useState(dayjs(date[0]).add(330, "m").toJSON());
  const [to, setTo] = useState(dayjs(date[1]).add(330, "m").toJSON());
  const [error, setError] = useState("");
  const [data, setData] = useState({});

  const handleDate = newDate => {
    setDate(newDate);
    setFrom(dayjs(newDate[0]).add(330, "m").toJSON());
    setTo(dayjs(newDate[1]).add(330, "m").toJSON());
  };

  const formatData = data => {
    const formatedData = {};
    formatedData.xAxis = [];
    formatedData.critical = [];
    formatedData.nonCritical = [];
    for (let el in data) {
      formatedData.xAxis.push(el);
      formatedData.critical.push(data[el].criticalTasks);
      formatedData.nonCritical.push(data[el].nonCriticalTasks);
    }
    return formatedData;
  };

  const handleGenerate = async () => {
    try {
      const filters = {from, to, fcId: fcId.toString()};
      setError("");
      const queryString = new URLSearchParams(filters).toString();
      const response = await fetch(`http://localhost:3909/core/audits/priority?${queryString}`);
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const result = await response.json();
      console.log(formatData(result.data));

      setData(formatData(result.data));
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
  return (
    <div className="container">
      <Box sx={styles}>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DesktopDateTimeRangePicker
            localeText={{start: "From", end: "To"}}
            defaultValue={[dayjs().subtract(6, "days").startOf("day"), dayjs().endOf("day")]}
            onChange={handleDate}
            value={date}
            sx={{marginLeft: "17%"}}
          />
        </LocalizationProvider>

        <Button
          variant="contained"
          onClick={handleGenerate}
          endIcon={<BarChartIcon />}
          sx={{marginRight: "auto", marginLeft: "80px"}}
        >
          Generate
        </Button>

        <FormControl sx={{m: 1, width: 300}}>
          <InputLabel id="demo-multiple-checkbox-label">FC</InputLabel>
          <Select
            labelId="demo-multiple-checkbox-label"
            id="demo-multiple-checkbox"
            multiple
            value={fcId}
            onChange={handleFcChange}
            input={<OutlinedInput label="FC" />}
            renderValue={selected => selected.join(", ")}
          >
            {Object.keys(FC).map(fc => (
              <MenuItem key={fc} value={fc}>
                <Checkbox checked={fcId.indexOf(fc) > -1} />
                <ListItemText primary={`${fc} - ${FC[fc]}`} />
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        <Tooltip title="Home" TransitionComponent={Zoom}>
          <IconButton component={Link} to="/">
            <HomeOutlinedIcon fontSize="large" sx={{color: "black"}} />
          </IconButton>
        </Tooltip>
      </Box>
      {error ? (
        <Error message={error} />
      ) : Object.keys(data).length !== 0 ? (
        <Box
          sx={{
            border: "2px solid #bdbdbd",
            borderRadius: 8,
            backgroundColor: "#f5f5f5",
            color: "white",
            boxShadow: 3,
            width: "70%",
            height: "60%",
            padding: 5,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            position: "absolute",
            top: "48%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
        >
          <BarChart
            series={[
              {label: "critical", data: data.critical, highlightScope: {highlight: "item"}},
              {label: "non-critical", data: data.nonCritical, highlightScope: {highlight: "item"}},
            ]}
            xAxis={[
              {
                data: data.xAxis,
                scaleType: "band",
                categoryGapRatio: 0.4,
                barGapRatio: 0.05,
                labelStyle: {
                  color: "blue",
                },
              },
            ]}
            height={600}
            width={1200}
          />
        </Box>
      ) : (
        ""
      )}
    </div>
  );
}

export default Charts;
