import React, { useState } from "react";
import { DateRangePicker } from "react-date-range";
import "react-date-range/dist/theme/default.css";
import "react-date-range/dist/styles.css";
import "./DataPicker.css";
import { Button } from "@material-ui/core";
import PeopleIcon from "@material-ui/icons/People";

function DatePicker() {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  const selectionRange = {
    startDate: startDate,
    endDate: endDate,
    key: "selection",
  };

  function handleSelect(ranges) {
    setStartDate(ranges.selection.startDate);
    setEndDate(ranges.selection.endDate);
  }
  return (
    <div className="datePicker">
      <DateRangePicker ranges={[selectionRange]} onChange={handleSelect} />
      <h2>Number of guests</h2>
      <PeopleIcon />
      <input min={0} defaultValue={1} type="number" />
      <Button>Search Airbnb</Button>
    </div>
  );
}

export default DatePicker;
