import {useState} from "react";
// import result from "../data/slotnxtsupport";

import ModuleSelect from "./ModuleSelect";
import Filter from "./Filter";
import {DesktopDateTimeRangePicker, LocalizationProvider} from "@mui/x-date-pickers-pro";
import {AdapterDayjs} from "@mui/x-date-pickers-pro/AdapterDayjs";
import {Button} from "@mui/material";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import dayjs from "dayjs";
import timezone from "dayjs/plugin/timezone";
import utc from "dayjs/plugin/utc";
dayjs.extend(timezone);
dayjs.extend(utc);

function Header({onSearch, setIsLoading, setError}) {
  const [module, setModule] = useState("");
  const [date, setDate] = useState([dayjs().subtract(6, "days").startOf("day"), dayjs().endOf("day")]);
  const [from, setFrom] = useState(dayjs(date[0]).add(330, "m").toJSON());
  const [to, setTo] = useState(dayjs(date[1]).add(330, "m").toJSON());

  // console.log("from => ", from);
  // console.log("to => ", to);
  const handleDate = newDate => {
    setDate(newDate);
    setFrom(dayjs(newDate[0]).add(330, "m").toJSON());
    setTo(dayjs(newDate[1]).add(330, "m").toJSON());
  };

  const fetchData = async (filters, selectedModule) => {
    try {
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

  const handleSearch = selectedModule => {
    const filters = {module: selectedModule, from, to};
    fetchData(filters, selectedModule);
  };

  return (
    <div>
      <header className="header">
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

        <Filter />
      </header>
    </div>
  );
}

export default Header;
