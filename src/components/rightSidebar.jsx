import * as React from "react"
import { Box } from "@mui/material";

const RightSidebar = ({ className }) => {
  return (
    <Box className={className} sx={{ display: { xs: 'none', sm: 'none', md: 'block' }, borderRadius: '20px 0 0 20px' }}>
      <Box></Box>
    </Box>
  )
}

export default RightSidebar
