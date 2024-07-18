import {Box, Button, Drawer} from "@mui/material";
import {useState} from "react";
import FilterListRoundedIcon from "@mui/icons-material/FilterListRounded";

function Filter() {
  const [open, setOpen] = useState(false);

  const toggleDrawer = newOpen => () => {
    setOpen(newOpen);
  };

  const DrawerList = <Box sx={{width: 400}} role="presentation" onClick={toggleDrawer(false)}></Box>;

  return (
    <div style={{marginRight: "20px", marginLeft: "auto"}}>
      <Button onClick={toggleDrawer(true)} variant="contained" startIcon={<FilterListRoundedIcon />}>
        filter
      </Button>
      <Drawer open={open} onClose={toggleDrawer(false)} anchor="right">
        {DrawerList}
      </Drawer>
    </div>
  );
}

export default Filter;
