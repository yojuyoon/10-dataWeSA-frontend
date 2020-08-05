import mapDataUSA from "./mapDataUSA.json";

const mapOptions = {
  title: {
    text: "USA 2018 Presidential Election Results",
  },

  chart: {
    map: "countries/us/us-all",
  },

  colorAxis: {
    dataClasses: [
      {
        from: 1.6,
        to: 2.3,
        color: "rgb(176, 205, 225)",
        name: "1.6 - 2.3",
      },
      {
        from: 2.3,
        to: 2.9,
        color: "rgb(144, 186, 216)",
        name: "2.3 - 2.9",
      },
      {
        from: 2.9,
        to: 3.5,
        color: "rgb(76, 150, 203)",
        name: "2.9 - 3.5",
      },
      {
        from: 3.5,
        to: 4.3,
        color: "rgb(49, 130, 189)",
        name: "3.5 - 4.3",
      },
      {
        from: 4.3,
        to: 4.8,
        color: "rgb(0, 67, 116)",
        name: "4.3 - 4.8",
      },
    ],
  },

  mapNavigation: {
    enabled: true,
    buttonOptions: {
      verticalAlign: "bottom",
    },
  },

  tooltip: {
    useHTML: true,
  },

  series: [
    {
      mapData: mapDataUSA,
      //data: Testdata, 테스트가 필요하므로 주석
      name: "States",
      borderColor: "#FFF",
      joinBy: ["name", "id"],
      dataLabels: {
        enabled: true,
        format: "{point.properties.postal-code}",
      },
      states: {
        hover: {
          color: "#BADA55",
        },
      },
      keys: ["id", "years", "value"],
      tooltip: {
        headerFormat: "",
        pointFormatter: function () {
          return `<h1>${this.id}</h1>
            <hr/>
            <b>year :                     ${this.years}</b>
            <hr/>
            <b>Beds Per Resident :        ${this.value}</b>`;
        },
      },
    },
  ],
};

export default mapOptions;
