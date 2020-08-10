const tableOption = (tableData) => {
  if (!tableData) return;

  const resultOption = {
    chart: {
      type: "column",
      width: 880,
      height: 400,
      backgroundColor: "#E9E9E9",
    },

    title: {
      text: "",
    },

    xAxis: {
      categories: [
        "Coaches and Scouts",
        "Athletes and sports",
        "Other managers",
        "Umpires, referees officials",
        "Customer service",
      ],

      title: {
        text: null,
      },
    },

    yAxis: {
      min: 0,
      title: {
        text: "AVERAGE SALARY",
        align: "middle",
      },

      labels: {
        overflow: "justify",
      },
    },

    plotOptions: {
      bar: {
        dataLabels: {
          enabled: true,
        },
      },
    },

    legend: {
      layout: "vertical",
      align: "right",
      verticalAlign: "top",
      borderWidth: 1,
      width: 100,
      shadow: true,
    },

    credits: {
      enabled: false,
    },

    tooltip: {
      valueSuffix: "$ Avg",
    },

    series: tableData.map((data) => {
      return { name: data.name, data: data.data };
    }),
  };
  return resultOption;
};

export default tableOption;
