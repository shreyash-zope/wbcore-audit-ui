import {Box, Button, FormControl, FormHelperText, InputLabel, MenuItem, Modal, Select, Typography} from "@mui/material";
import {useState} from "react";
import ViewModuleRoundedIcon from "@mui/icons-material/ViewModuleRounded";

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

function ModuleSelect({setModule, module, handleSearch}) {
  const modules = ["slotnxtops", "slotnxtsupport", "spupdate", "batchflip"];

  const [open, setOpen] = useState(true);
  const [filterApplied, setFilterApplied] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleModule = event => {
    setModule(event.target.value);
    setFilterApplied(true);
    handleClose();
    handleSearch(event.target.value);
  };

  return (
    <div className="icon-container">
      <Button onClick={handleOpen} variant="contained" startIcon={<ViewModuleRoundedIcon />}>
        {module ? module : "* Module *"}
      </Button>
      <Modal
        open={open}
        onClose={filterApplied ? handleClose : () => {}}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography variant="button" display="block" gutterBottom sx={{textAlign: "center"}}>
            Select Module
          </Typography>
          <FormControl required sx={{m: 2, minWidth: 60, display: "flex"}}>
            <InputLabel id="demo-simple-select-required-label">Module</InputLabel>
            <Select
              labelId="demo-simple-select-required-label"
              id="demo-simple-select-required"
              value={module}
              label="Module *"
              onChange={event => handleModule(event)}
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              {modules.map((module, index) => (
                <MenuItem value={module} key={index}>
                  {module}
                </MenuItem>
              ))}
            </Select>
            <FormHelperText>Required</FormHelperText>
          </FormControl>
        </Box>
      </Modal>
    </div>
  );
}

export default ModuleSelect;
