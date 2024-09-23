import { useState } from "react";
import { Button } from "@mui/material";
import { LocalizationProvider } from "@mui/x-date-pickers-pro/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers-pro/AdapterDayjs";
import { DateRangePicker } from "@mui/x-date-pickers-pro/DateRangePicker";

// eslint-disable-next-line react/prop-types
export default function DateRangeQuestion({ nextStep }) {
  const [value, setValue] = useState([null, null]);

  const handleSubmit = () => {
    if (value[0] && value[1]) {
      nextStep({ startDate: value[0], endDate: value[1] });
    }
  };

  return (
    <div className="text-center">
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DateRangePicker
          value={value} // Bind value to the state
          onChange={(newValue) => setValue(newValue)} // Update state when dates change
          localeText={{ start: "Start Date", end: "End Date" }}
        />
      </LocalizationProvider>

      <Button variant="contained" color="success" onClick={handleSubmit} className="mt-5">
        Submit
      </Button>
    </div>
  );
}
