import React, { useState } from 'react';

const AgeCalculator = () => {
  const [day, setDay] = useState('');
  const [month, setMonth] = useState('');
  const [year, setYear] = useState('');
  const [ageYears, setAgeYears] = useState(null);
  const [ageMonths, setAgeMonths] = useState(null);
  const [ageWeeks, setAgeWeeks] = useState(null);
  const [ageDays, setAgeDays] = useState(null);
  const [ageHours, setAgeHours] = useState(null);
  const [ageMinutes, setAgeMinutes] = useState(null);
  const [ageSeconds, setAgeSeconds] = useState(null);

  const daysInMonth = Array.from({ length: 31 }, (_, i) => i + 1);

  const months = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  const years = Array.from({ length: 100 }, (_, i) => new Date().getFullYear() - i);

  const calculateAge = () => {
    // Validate inputs
    if (!day || !month || !year) {
      alert('Please enter a valid date.');
      return;
    }

    // Parse input values to integers
    const dayValue = parseInt(day, 10);
    const monthValue = parseInt(month, 10);
    const yearValue = parseInt(year, 10);

    // Validate date components
    if (
      isNaN(dayValue) ||
      isNaN(monthValue) ||
      isNaN(yearValue) ||
      dayValue <= 0 ||
      monthValue <= 0 ||
      yearValue <= 0
    ) {
      alert('Please enter valid numbers for day, month, and year.');
      return;
    }

    // Create Date object from input values
    const birthdateDate = new Date(yearValue, monthValue - 1, dayValue);

    // Get the current date
    const currentDate = new Date();

    // Calculate age in years
    const ageDifference = currentDate.getFullYear() - birthdateDate.getFullYear();
    setAgeYears(ageDifference);

    // Calculate age in months
    const monthsDifference = (currentDate.getMonth() + 12 * currentDate.getFullYear()) -
                            (birthdateDate.getMonth() + 12 * birthdateDate.getFullYear());
    setAgeMonths(monthsDifference);

    // Calculate age in weeks, days, hours, minutes, and seconds
    const ageInMilliseconds = currentDate - birthdateDate;
    setAgeWeeks(Math.floor(ageInMilliseconds / (7 * 24 * 60 * 60 * 1000)));
    setAgeDays(Math.floor(ageInMilliseconds / (24 * 60 * 60 * 1000)));
    setAgeHours(Math.floor(ageInMilliseconds / (60 * 60 * 1000)));
    setAgeMinutes(Math.floor(ageInMilliseconds / (60 * 1000)));
    setAgeSeconds(Math.floor(ageInMilliseconds / 1000));
  };

  return (
    <div>
      <h1>Age Calculator</h1>
      <label>
        Day:
        <select value={day} onChange={(e) => setDay(e.target.value)}>
          <option value="">Select Day</option>
          {daysInMonth.map((d) => (
            <option key={d} value={d}>{d}</option>
          ))}
        </select>
      </label>
      <label>
        Month:
        <select value={month} onChange={(e) => setMonth(e.target.value)}>
          <option value="">Select Month</option>
          {months.map((m, index) => (
            <option key={index + 1} value={index + 1}>{m}</option>
          ))}
        </select>
      </label>
      <label>
        Year:
        <select value={year} onChange={(e) => setYear(e.target.value)}>
          <option value="">Select Year</option>
          {years.map((y) => (
            <option key={y} value={y}>{y}</option>
          ))}
        </select>
      </label>
      <button onClick={calculateAge}>Calculate Age</button>
      {ageYears !== null && ageMonths !== null && (
        <p>Your age is: {ageYears} years, {ageMonths} months, {ageWeeks} weeks, {ageDays} days,
          {ageHours} hours, {ageMinutes} minutes, and {ageSeconds} seconds.</p>
      )}
    </div>
  );
};

export default AgeCalculator;
