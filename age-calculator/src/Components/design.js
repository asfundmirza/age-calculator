import * as React from "react";

import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { useState } from "react";
import {
  CssBaseline,
  Box,
  ThemeProvider,
  createTheme,
  Button,
  Typography,
} from "@mui/material";
import Grid from "@mui/material/Grid";
import Divider from "@mui/material/Divider";
import {
  differenceInYears,
  parse,
  differenceInMonths,
  differenceInDays,
  setYear,
} from "date-fns";

const defaultTheme = createTheme({
  palette: {
    background: {
      default: "#263238",
    },
  },
});

const AgeCalculator = () => {
  const [value, setValue] = useState(null);
  const [years, setYears] = useState("");
  const [months, setMonths] = useState("");
  const [days, setDays] = useState("");

  const calculateHandler = () => {
    const currentDate = new Date();

    const dobDate = new Date(value.$d);
    const years = differenceInYears(currentDate, dobDate);
    setYears(years);
    const months = differenceInMonths(currentDate, dobDate);
    setMonths(months);
    const days = differenceInDays(currentDate, dobDate);
    setDays(days);
    console.log(`Age: ${years} years, ${months} months, ${days} days`);
  };
  const clearHandler = () => {
    setValue(null);
    setYears(null);
    setMonths(null);
    setDays(null);
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <CssBaseline />

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          flexWrap: "wrap",

          mt: 9,
        }}
      >
        <Grid container justifyContent="center" spacing={2}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              flexWrap: "wrap",
              maxWidth: "100%",
            }}
          >
            <Grid item xs={12}>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-around",
                  flexWrap: "wrap",
                  width: "500px",
                  mb: 7,
                  ml: 2,
                }}
              >
                <Typography variant="h3" color="#cfd8dc">
                  Age Calculator
                </Typography>
              </Box>

              <Box
                sx={{
                  display: "flex",
                  width: "500px",
                  backgroundColor: "#cfd8dc",
                  flexWrap: "wrap",
                  padding: "30px",
                  m: 2,
                  borderRadius: "8px",
                  boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
                }}
              >
                <Box
                  sx={{
                    width: "100%",
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                    flexWrap: "wrap",
                  }}
                >
                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DemoContainer components={["DatePicker"]}>
                      <DatePicker
                        value={value}
                        onChange={(newValue) => setValue(newValue)}
                      />
                    </DemoContainer>
                  </LocalizationProvider>
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      mt: -1,
                    }}
                  >
                    <Button
                      variant="contained"
                      size="medium"
                      onClick={calculateHandler}
                      sx={{
                        backgroundColor: "#e57373",
                        m: 0.9,
                        "&:hover": {
                          backgroundColor: "#c62828",
                        },
                      }}
                    >
                      Calculate
                    </Button>
                    <Button
                      variant="contained"
                      size="medium"
                      onClick={clearHandler}
                      sx={{ m: 0.9, mb: -0.7 }}
                    >
                      Clear
                    </Button>
                  </Box>
                </Box>
              </Box>
            </Grid>
          </Box>
        </Grid>
        <Grid container justifyContent="center" spacing={2}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              flexWrap: "wrap",
              maxWidth: "100%",
              mt: 10,
            }}
          >
            <Grid item xs={12}>
              <Box
                sx={{
                  display: "flex",
                  width: "500px",
                  backgroundColor: "#cfd8dc",
                  flexWrap: "wrap",
                  padding: "33px",
                  m: 2,
                  borderRadius: "8px",
                  boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
                }}
              >
                <Box
                  sx={{
                    width: "100%",
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                    flexWrap: "wrap",
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      alignContent: "center",
                      alignItems: "center",
                      justifyContent: "center",
                      ml: 3,
                    }}
                  >
                    <Typography variant="h4">{days ? days : "-"}</Typography>
                    <Typography variant="h6">Days</Typography>
                  </Box>

                  <Divider
                    orientation="vertical"
                    sx={{ backgroundColor: "black", height: "100px" }}
                    flexItem
                  />
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      alignContent: "center",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Typography variant="h4">
                      {months ? months : "-"}
                    </Typography>
                    <Typography variant="h6">Months</Typography>
                  </Box>
                  <Divider
                    orientation="vertical"
                    sx={{ backgroundColor: "black", height: "100px" }}
                    flexItem
                  />
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      alignContent: "center",
                      alignItems: "center",
                      justifyContent: "center",
                      mr: 3,
                    }}
                  >
                    <Typography variant="h4">{years ? years : "-"}</Typography>
                    <Typography variant="h6">Years</Typography>
                  </Box>
                </Box>
              </Box>
            </Grid>
          </Box>
        </Grid>
      </Box>
    </ThemeProvider>
  );
};

export default AgeCalculator;
