import mapDataUSA from "../../mapDataUSA.json";

const mapOptions = {
  title: {
    text: "ICU Beds per 1,000 Population",
  },

  chart: {
    map: "countries/us/us-all",
    backgroundColor: "#efefef",
  },

  colorAxis: {
    dataClasses: [
      {
        from: 0.03,
        to: 0.2,
        color: "rgb(176, 205, 225)",
        name: "0.03 - 0.2",
      },
      {
        from: 0.2,
        to: 0.27,
        color: "rgb(144, 186, 216)",
        name: "0.2 - 0.27",
      },
      {
        from: 0.27,
        to: 0.34,
        color: "rgb(76, 150, 203)",
        name: "0.27 - 0.34",
      },
      {
        from: 0.34,
        to: 0.45,
        color: "rgb(49, 130, 189)",
        name: "0.34 - 0.45",
      },
      {
        from: 0.45,
        to: 0.46,
        color: "rgb(0, 67, 116)",
        name: "0.45 - 0.46",
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
      //   data: outputData, 테스트가 필요하므로 주석
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
      keys: ["id", "years", "value", "count"],
      tooltip: {
        headerFormat: "",
        pointFormatter: function () {
          return `<h1>${this.id}</h1>
            <hr/>
            <b>Year :                               ${this.years}</b>
            <hr/>
            <b>ICU Beds per 1,000 Residents :       ${this.value}</b>
            <hr/>
            <b>ICU Beds :                           ${this.count}</b>`;
        },
      },
    },
  ],
};

export default mapOptions;
