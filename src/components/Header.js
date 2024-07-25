import {useState} from "react";
// import result from "../data/sptool";

import ModuleSelect from "./ModuleSelect";
import SPToolFilter from "./SPToolFilter";
import {DesktopDateTimeRangePicker, LocalizationProvider} from "@mui/x-date-pickers-pro";
import {AdapterDayjs} from "@mui/x-date-pickers-pro/AdapterDayjs";
import {Box, Button, IconButton, Tooltip} from "@mui/material";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import dayjs from "dayjs";
import timezone from "dayjs/plugin/timezone";
import utc from "dayjs/plugin/utc";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import Zoom from "@mui/material/Zoom";
import {Link} from "react-router-dom";
import FilterListRoundedIcon from "@mui/icons-material/FilterListRounded";
dayjs.extend(timezone);
dayjs.extend(utc);

const styles = {
  border: "1px solid #bdbdbd",
  borderRadius: "15px",
  backgroundColor: "#f5f5f5",
  boxShadow: 3,
  display: "flex",
  alignItems: "center",
  height: "70px",
  gap: "30px",
  justifyContent: "center",
  padding: "0 30px",
};

function Header({onSearch, setIsLoading, setError}) {
  const [module, setModule] = useState("");
  const [date, setDate] = useState([dayjs().subtract(6, "days").startOf("day"), dayjs().endOf("day")]);
  const [from, setFrom] = useState(dayjs(date[0]).add(330, "m").toJSON());
  const [to, setTo] = useState(dayjs(date[1]).add(330, "m").toJSON());
  const [extraFilter, setExtraFilter] = useState({});

  const handleDate = newDate => {
    setDate(newDate);
    setFrom(dayjs(newDate[0]).add(330, "m").toJSON());
    setTo(dayjs(newDate[1]).add(330, "m").toJSON());
  };

  const fetchData = async (filters, selectedModule) => {
    try {
      setError("");
      const queryString = new URLSearchParams(filters).toString();
      setIsLoading(true);
      const response = await fetch(`http://localhost:3909/core/audits?${queryString}`);
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const result = await response.json();
      onSearch(result.data, selectedModule);
    } catch (error) {
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  const handleFilter = extraFilters => {
    setExtraFilter(extraFilters);
  };

  const handleSearch = selectedModule => {
    const filters = {module: selectedModule, from, to};
    Object.assign(filters, extraFilter);
    fetchData(filters, selectedModule);
  };

  return (
    <div>
      <Box sx={styles}>
        <ModuleSelect setModule={setModule} module={module} handleSearch={handleSearch} />

        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DesktopDateTimeRangePicker
            localeText={{start: "From", end: "To"}}
            defaultValue={[dayjs().subtract(6, "days").startOf("day"), dayjs().endOf("day")]}
            onChange={handleDate}
            value={date}
          />
        </LocalizationProvider>

        <Button onClick={() => handleSearch(module)} variant="contained" startIcon={<SearchRoundedIcon />}>
          search
        </Button>

        {module === "spupdate" ? (
          <SPToolFilter appliedFilters={handleFilter} />
        ) : (
          <div style={{marginRight: "20px", marginLeft: "auto"}}>
            <Button variant="contained" startIcon={<FilterListRoundedIcon />}>
              filter
            </Button>
          </div>
        )}

        <Tooltip title="Home" TransitionComponent={Zoom}>
          <IconButton component={Link} to="/">
            <HomeOutlinedIcon fontSize="large" sx={{color: "black"}} />
          </IconButton>
        </Tooltip>
      </Box>
    </div>
  );
}

export default Header;
