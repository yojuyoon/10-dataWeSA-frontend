import mapDataUSA from "../../mapDataUSA.json";

const mapOptions = {
  title: {
    text: "Physicians and Surgeons per 1,000 Population",
  },

  chart: {
    map: "countries/us/us-all",
    backgroundColor: "#efefef",
  },

  colorAxis: {
    dataClasses: [
      {
        from: 1.21,
        to: 2.06,
        color: "rgb(176, 205, 225)",
        name: "1.21 - 2.06",
      },
      {
        from: 2.06,
        to: 2.93,
        color: "rgb(144, 186, 216)",
        name: "2.06 - 2.93",
      },
      {
        from: 2.93,
        to: 3.85,
        color: "rgb(76, 150, 203)",
        name: "2.93 - 3.85",
      },
      {
        from: 3.85,
        to: 5.43,
        color: "rgb(49, 130, 189)",
        name: "3.85 - 5.43",
      },
      {
        from: 5.43,
        to: 6.75,
        color: "rgb(0, 67, 116)",
        name: "5.43 - 6.75",
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
            <b>Year :                           ${this.years}</b>
            <hr/>
            <b>Physicians and Surgeons :        ${this.value}</b>
            <hr/>
            <b>Per 1,000 Population :           ${this.count}</b>`;
        },
      },
    },
  ],
};

export default mapOptions;
