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
      nextStep(value);
    }
  };

  return (
    <div>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DateRangePicker
          localeText={{ start: "Start Date", end: "End Date" }}
        />
        {/* </DemoContainer> */}
      </LocalizationProvider>

      {/* <DateRangePicker
        startText="Start Date"
        endText="End Date"
        value={value}
        onChange={(newValue) => setValue(newValue)}
        renderInput={(startProps, endProps) => (
          <>
            <TextField {...startProps} />
            <TextField {...endProps} />
          </>
        )}
      /> */}
      <Button variant="contained" color="primary" onClick={handleSubmit}>
        Next
      </Button>
    </div>
  );
}
