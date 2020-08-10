export const options = {
  chartOptions: {
    series: [
      {
        type: "treemap",
        allowDrillToNode: true,
        layoutAlgorithm: "squarified",
        data: [
          { id: "1", value: 100 },
          {
            id: "2",
            name: "Service Occupations",
            value: 70,
            parent: "1",
            color: "rgb(255, 181, 99)",
          },
          {
            id: "3",
            name: "Sales & Office Occupations",
            value: 12.4,
            parent: "1",
            color: "rgb(26, 155, 154)",
          },
          {
            id: "4",
            name: "Management, business, science, & arts occipations",
            value: 12.4,
            parent: "1",
            color: "rgb(255, 129, 102)",
          },
          {
            id: "5",
            name: "Production, Transportation, & Material Moving Occupations",
            value: 5,
            parent: "1",
            color: "rgb(73, 65, 142)",
          },
          {
            id: "6",
            name: "Naturla resources, construction, & maintenance occupations",
            value: 0.2,
            parent: "1",
            color: "rgb(51, 106, 129)",
          },
        ],
      },
    ],
    title: {
      text: null,
    },
    credits: {
      enabled: false,
    },
    chart: {
      backgroundColor: null,
      margin: 0,
      height: "35%",
    },
  },
  hoverData: null,
};
