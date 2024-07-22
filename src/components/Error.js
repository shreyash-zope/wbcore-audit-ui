import {Box, Typography} from "@mui/material";

function Error({message}) {
  return (
    <Box
      sx={{
        border: "2px solid #f44336",
        borderRadius: 8,
        backgroundColor: "#ffebee",
        boxShadow: 3,
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
        Error &#x1F4A5;
      </Typography>
      <Typography variant="body1" color="textSecondary">
        {message}
      </Typography>
    </Box>
  );
}

export default Error;
