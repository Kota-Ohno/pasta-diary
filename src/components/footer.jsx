import * as React from "react"
import { Box } from "@mui/material";

const Footer = ({ className }) => {
  return (
    <Box
      component="footer"
      sx={{
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '0rem 1.25rem',
      }}
      className={className}
    ></Box>
  );
}

export default Footer
