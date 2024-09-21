import React, { useState, useEffect, useRef } from "react";
// import Chart from "react-apexcharts";

const TempGraph = ({ selectedTemp, temperDate }) => {
  const [selectedTempData, setSelectedTempData] = useState([]);
  const [showTempHour, setShowTempHour] = useState(new Set());
  const hasMounted = useRef(false);

  useEffect(() => {
    const handleSelectedTemp = () => {
      // const df = temperDate?.hourly?.[15]?.dt;
      // const dg = new Date(df * 1000).toLocaleTimeString();
      // console.log(dg);
      // const dates = new Date(selectedTemp?.dt * 1000).toLocaleString();
      // console.log("selected", dates);
      // const dated = new Date(selectedTemp?.dt * 1000).date.toLocaleString();
      // console.log("selected", dated);
      // console.log(selectedTemp?.dt);
      for (let data in temperDate?.daily) {
        try {
          if (selectedTemp?.dt === temperDate?.daily[data]?.dt) {
            setSelectedTempData(temperDate);
          }
        } catch (error) {
          console.log("data not fetch", error.message);
        }
      }
    };

    handleSelectedTemp();
  }, [selectedTemp, temperDate]);

  useEffect(() => {
    // Only update showTempHour if the component has mounted before
    if (hasMounted.current) {
      const hourlyData = selectedTempData?.hourly || [];
      const uniqueHourlyData = new Set([...showTempHour, ...hourlyData]);
      setShowTempHour(uniqueHourlyData);
    } else {
      // If it's the initial render, set the ref to true
      hasMounted.current = true;
    }
  }, [selectedTempData]);

  const uniqueHourlyArray = [...showTempHour];

  const options = {
    chart: {
      type: "area",
    },
    yaxis: {
      show: false,
    },
    xaxis: {
      title: {
        text: "Temperature (°C)",
      },
      dataLabels: {
        enabled: false,
      },
    },
    fill: {
      type: "gradient",
      gradient: {
        shade: "dark",
        gradientToColors: ["#FDD835"],
        shadeIntensity: 1,
        type: "horizontal",
        opacityFrom: 1,
        opacityTo: 1,
        stops: [0, 100, 100, 100],
      },
    },
  };

  uniqueHourlyArray.map((data) => <p>{data}</p>);

  return <div></div>;
};

export default TempGraph;
