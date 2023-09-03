import React from "react";
import { Box, useMediaQuery, useTheme } from "@mui/material";
import { Vertical, images_v } from "./vertical";
import { Horizontal, images_h } from "./horizontal";

const Lessons = (props) => {
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <>
      <Box>
        {isMatch ? (
          <Vertical links={images_v} />
        ) : (
          <Horizontal links={images_h} />
        )}
      </Box>
    </>
  );
};

export default Lessons;
