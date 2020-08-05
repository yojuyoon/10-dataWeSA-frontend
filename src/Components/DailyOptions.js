export const options = {
  chart: {
    type: "spline",
    height: "41.5%",
    backgroundColor: "#EFEFEF",
  },
  title: {
    text: "",
  },
  tooltip: {
    formatter: function () {
      const { series } = this;
      return `<div><span style="color:grey; font-size: 17px; text-decoration: underline">${series.name}</span></div>`;
    },
  },
  xAxis: {
    categories: [
      "July 1",
      "July 3",
      "July 6",
      "July 9",
      "July 12",
      "July 15",
      "July 18",
      "July 21",
      "July 24",
      "July 27",
      "July 30",
    ],
  },
  yAxis: {
    title: {
      text: "",
    },
  },
  legend: {
    enabled: false,
  },
  series: [
    {
      name: "Alabama",
      data: [1, 2, 1, 4, 3, 6, 5, 7, 4, 2, 3],
    },
    {
      name: "Hawai",
      data: [5, 7, 2, 8, 5, 2, 5, 6, 8, 4, 2],
    },
    {
      name: "Colorado",
      data: [13, 5, 8, 1, 7, 9, 5, 1, 8, 9, 5],
    },
  ],
  credits: {
    enabled: false,
  },
  plotOptions: {
    series: {
      marker: {
        enabled: false,
        states: {
          hover: {
            enabled: false,
          },
        },
      },
      dataLabels: {
        enabled: true,
        crop: false,
        overflow: "none",
        align: "left",
        verticalAlign: "middle",
        formatter: function () {
          const { series, point } = this;
          const last = series.data[series.data.length - 1];
          if (point.category === last.category) {
            return `<span style="color: ${series.color}"> ${series.name} </span>`;
          }
          return "";
        },
      },
    },
  },
};
