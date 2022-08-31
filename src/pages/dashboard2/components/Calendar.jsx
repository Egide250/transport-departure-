import React from 'react'
import  { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

export default function CalendarGfg() {
    const [value, onChange] = useState(new Date());
  return (
    <>
      <h1>Calendar - Super Admin</h1>
      <Calendar
        onChange={onChange}
        value={value}
      />
    </>
  )
}
