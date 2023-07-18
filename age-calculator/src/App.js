import logo from "./logo.svg";
import "./App.css";
import * as React from "react";

import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import Design from "./Components/design";
function App() {
  return <Design></Design>;
}

export default App;
