import * as React from "react";
import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";
import { BlueFont } from "../Theme";

const columns = [
  { field: "id", headerName: "ID", width: 50 },
  {
    field: "day",
    headerName: "Day",
    width: 150,
    editable: true,
  },
  {
    field: "time",
    headerName: "Time",
    width: 150,
    editable: true,
  },
  {
    field: "name",
    headerName: "Name",
    description: "This column has a value getter and is not sortable.",
    sortable: false,
    width: 230,
    valueGetter: (params) =>
      `${params.row.level || ""} ${params.row.type || ""}`,
  },
  {
    field: "for",
    headerName: "For",
    // type: "number",
    width: 160,
    editable: true,
  },
  {
    field: "level",
    headerName: "Level",
    // type: "number",
    width: 150,
    editable: true,
  },
  {
    field: "type",
    headerName: "Type",
    sortable: true,
    width: 170,
    editable: true,
  },
];

const rows = [
  {
    id: 1,
    day: "Monday",
    time: "3.00pm",
    for: "Primary",
    level: "P3/4",
    type: "Writing/Oral",
  },
  {
    id: 2,
    day: "Monday",
    time: "4.30pm",
    for: "Primary",
    level: "P5",
    type: "English",
  },
  {
    id: 3,
    day: "Tuesday",
    time: "3.00pm",
    for: "Primary",
    level: "P3/4",
    type: "English",
  },
  {
    id: 4,
    day: "Tuesday",
    time: "4.30pm",
    for: "Primary",
    level: "P5/6",
    type: "PSLE Writing",
  },
  {
    id: 5,
    day: "Wednesday",
    time: "3.00pm",
    for: "Primary",
    level: "P5",
    type: "English",
  },
  {
    id: 6,
    day: "Thursday",
    time: "3.00pm",
    for: "Primary",
    level: "P3/4",
    type: "Writing/Oral",
  },
  {
    id: 7,
    day: "Thursday",
    time: "4.30pm",
    for: "Primary",
    level: "P6",
    type: "English",
  },
  {
    id: 8,
    day: "Friday",
    time: "3.00pm",
    for: "Primary",
    level: "P5/6",
    type: "PSLE Writing",
  },
  {
    id: 9,
    day: "Friday",
    time: "5.00pm",
    for: "Primary",
    level: "P6",
    type: "English",
  },
  {
    id: 10,
    day: "Saturday",
    time: "9.15am",
    for: "Primary",
    level: "P6",
    type: "English",
  },
  {
    id: 11,
    day: "Saturday",
    time: "11.15am",
    for: "Primary",
    level: "P5/6",
    type: "PSLE Writing",
  },
  {
    id: 12,
    day: "Saturday",
    time: "1.15pm",
    for: "Primary",
    level: "P3/4",
    type: "English",
  },
];

export default function Timetable() {
  return (
    <Box paddingTop={15}>
      <Box
        // height='100vh'
        maxWidth={1200}
        // maxWidth={1000}
        // maxHeight={500}
        // alignItems="center"
        // justifyContent={"center"}
        margin="auto"
        // marginTop={1}
        padding={2}
        borderRadius={5}
        boxShadow="5px 5px 10px #ccc"
        sx={{
          ":hover": {
            boxShadow: "10px 10px 20px #ccc",
          },
          backgroundColor: "white",
        }}
      >
        <BlueFont ml={5}>
          <h1>Lessons Schedule</h1>
        </BlueFont>

        <DataGrid
          rows={rows}
          columns={columns}
          checkboxSelection
          disableSelectionOnClick
          autoHeight={true}
          headerHeight={80}
          // disableColumnMenu={true}
          sx={{
            "& .MuiDataGrid-columnHeaderTitle": {
              textOverflow: "clip",
              whiteSpace: "break-spaces",
              lineHeight: 1,
            },
          }}
          experimentalFeatures={{ newEditingApi: true }}
        />
      </Box>
    </Box>
  );
}
