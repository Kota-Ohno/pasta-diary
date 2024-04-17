import * as React from "react"
import { Box } from "@mui/material"
import { heading, main, mainContent, mainBackground } from "./main.module.css"

const Main = ({ className, pageTitle, children }) => {
  return (
    <Box className={`${className} ${main}`}>
      <Box className={mainBackground}></Box>
      <Box className={mainContent}>
        <Box className={heading}>
          {pageTitle}
        </Box>
        {children}
      </Box>
    </Box>
  )
}

export default Main