import {Box, Button, Modal} from "@mui/material";
import {useState} from "react";
import FilterListRoundedIcon from "@mui/icons-material/FilterListRounded";
// import data from "../data";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

function Header({onApplyFilter}) {
  const modules = ["slotnxtops", "slotnxtsupport", "spupdate", "batchflip"];

  const [open, setOpen] = useState(true);
  const [filterApplied, setFilterApplied] = useState(false);
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [module, setModule] = useState("");

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const applyFilter = async e => {
    setFilterApplied(true);
    handleClose();

    const newFilters = {from, to, module};

    try {
      const queryString = new URLSearchParams(newFilters).toString();
      const response = await fetch(`http://localhost:3909/core/audits?${queryString}`);

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();

      onApplyFilter(data.data);
    } catch (error) {
      console.error("Error fetching data:", error.message);
    }
  };
  return (
    <header className="header">
      <div className="icon-container">
        <Button onClick={handleOpen} variant="contained" startIcon={<FilterListRoundedIcon />}>
          filter
        </Button>
        <Modal
          open={open}
          onClose={filterApplied ? handleClose : () => {}}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <form
              onSubmit={e => {
                e.preventDefault(); // Prevent default form submission
                applyFilter(e); // Call applyFilter if validation passes
              }}
            >
              <div>
                <label htmlFor="start-date">Start Date:</label>
                <input
                  type="date"
                  id="start-date"
                  name="start-date"
                  value={from}
                  onChange={e => setFrom(e.target.value)}
                  required
                />
              </div>
              <div>
                <label htmlFor="end-date">End Date:</label>
                <input
                  type="date"
                  id="end-date"
                  name="end-date"
                  value={to}
                  onChange={e => setTo(e.target.value)}
                  required
                />
              </div>
              <div>
                <label htmlFor="module-select">Select Module:</label>
                <select id="module-select" value={module} onChange={e => setModule(e.target.value)} required>
                  <option value="">--Please choose an option--</option>
                  {modules.map(module => (
                    <option key={module} value={module}>
                      {module}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <button type="submit">Apply Filters</button>
              </div>
            </form>
          </Box>
        </Modal>
      </div>
      <div className="title-container"> {module} </div>
      <div></div>
    </header>
  );
}

export default Header;
