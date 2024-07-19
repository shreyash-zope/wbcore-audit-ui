import {Box, Typography} from "@mui/material";

function DataNotFound() {
  return (
    <Box
      sx={{
        border: "2px solid #f44336", // Red border to indicate error
        borderRadius: 8,
        backgroundColor: "#ffebee", // Light red background
        boxShadow: 3, // Subtle shadow for depth
        width: 400,
        height: 200,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        textAlign: "center",
        position: "absolute",
        top: "40%",
        left: "50%",
        transform: "translate(-50%, -50%)",
      }}
    >
      <Typography variant="h6" color="textPrimary">
        No results found
      </Typography>
      <Typography variant="body1" color="textSecondary">
        Please try another search query.
      </Typography>
    </Box>
  );
}

export default DataNotFound;
