import * as React from "react";
import { Box, Stack, Typography } from "@mui/material/";
import { BlueFont } from "../Theme";
import Footer from "../../Footer";

const Content = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
      }}
      // paddingBottom={4}
      paddingTop={15}
    >
      <Stack
        direction="column"
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <br />
        <Typography
          sx={{
            fontStyle: "italic",
            // paddingLeft: 6,
            // marginTop: 5,
            fontWeight: "bold",
          }}
        >
          <BlueFont>
            <h1>Course Content</h1>
          </BlueFont>
        </Typography>

        <Box
          // height={1000}
          maxWidth={1200}
          // maxWidth={1000}
          // maxHeight={500}
          alignItems="center"
          justifyContent={"center"}
          // margin="auto"
          // marginTop={1}
          padding={2}
          // borderRadius={5}
          // boxShadow="5px 5px 10px #ccc"
          // sx={{
          //   ":hover": {
          //     boxShadow: "10px 10px 20px #ccc",
          //   },
          //   // backgroundColor: "white",
          // }}
        >
          <Typography
            sx={{
              fontSize: 20,
            }}
          >
            <b>P3/4 Writing & Oral</b>
            <p>
              Covers: (i) Two composition theme per month; (ii) one oral theme
              per month
              <br />
              Sills specific to writing, reading and speaking will be taught
              during every lesson.
              <br />
              Duration: 1.5 hours
              <br />
              Fee per lesson: $62.50
            </p>
            <b>P3/4 English</b>
            <p>
              Covers: Paper 1 (Writing), Paper 2 (Grammar, Vocabulary, Cloze and
              Comprehension) + Paper 4 (Oral Communication)
              <br />
              Duration: 1.5 hours
              <br />
              Fee per lesson: $62.50
            </p>
            <b>P5 English</b>
            <p>
              Covers: Paper 1 (Writing), Paper 2 (Grammar, Vocabulary, Cloze and
              Comprehension) + Paper 4 (Oral Communication)
              <br />
              Duration: 2 hours
              <br />
              Fee per lesson: $72.50
            </p>
            <b>P6 English</b>
            <p>
              Covers: Paper 1 (Writing), Paper 2 (Grammar, Vocabulary, Cloze and
              Comprehension) + Paper 4 (Oral Communication)
              <br />
              Duration: 2 hours
              <br />
              Fee per lesson: $72.50
            </p>
            <b>PSLE Writing</b>
            <p>
              Covers both sections of Paper 1 (Continuous writing, 40 marks;
              Situational writing, 15 marks) + narrative writing skills which
              enhanc students' expressive abilities
              <br />
              Monthly practice on two examinable composition themes
              <br /> Once a month practice on different situational writing
              question types
              <br />
              Duration: 2 hours
              <br />
              Fee per lesson: $72.50
            </p>

            <p>
              <b>Monthly material fee:</b> $8
              <br />
              Fees are collected monthly between 25th - 27th day of the previous
              calendar month (i.e in advance)
            </p>
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            // alignItems:"center",

            // maxWidth: 600,
            // maxHeight: 10,
            // padding: 3,
            // marginTop: 10,
          }}
        >
          {/* <Box
            component="img"
            alt="Logo"
            src="assets/fee/fee.JPG"
            // paddingLeft={2}
            // paddingTop={2}
            paddingBottom={4}
            paddingTop={15}
            maxWidth={800}
            margin="auto"
          /> */}
        </Box>
        <Footer />
      </Stack>
    </Box>
  );
};

export default Content;
