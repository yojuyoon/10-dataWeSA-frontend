import Highcharts from "highcharts";
import mapOptionFun from "./mapOptionFun";

const mapOptions = (id, outputData) => {
  {
    if (outputData.length === 0) return;

    let dataClassTemp = [];
    let outputKeys = [];
    let title = "";
    let highData = [];

    Highcharts.maps[
      "countries/us/us-all"
    ] = require(`@highcharts/map-collection/countries/us/us-all.geo.json`);

    let data = Highcharts.geojson(Highcharts.maps["countries/us/us-all"]),
      separators = Highcharts.geojson(
        Highcharts.maps["countries/us/us-all"],
        "mapline"
      );

    data.forEach((el, i) => {
      el.drilldown = el.properties["hc-key"];
      el.id = outputData[i].id;
      el.year = outputData[i].years;
      el.value = outputData[i].value;
      if (id !== 1) el.total = outputData[i].total;
    });

    switch (id) {
      case 1:
        dataClassTemp = mapOptionFun.dataClassTempBed;
        outputKeys = ["id", "year", "value"];
        title = "Hospital Beds per 1,000 Population";
        break;

      case 2:
        dataClassTemp = mapOptionFun.dataClassTempICU;
        outputKeys = ["id", "year", "value", "count"];
        title = "ICU Beds per 1,000 Population";
        break;

      case 3:
        dataClassTemp = mapOptionFun.dataClassTempPys;
        outputKeys = ["id", "year", "value", "count"];
        title = "Physicians and Surgeons per 1,000 Population";
        break;

      case 4:
        dataClassTemp = mapOptionFun.dataClassTempReg;
        outputKeys = ["id", "year", "value", "count"];
        title = "Registered Nurses per 1,000 Population";
        break;

      default:
        break;
    }

    let resultData = {
      title: {
        text: title,
      },

      chart: {
        backgroundColor: "#EFEFEF",
        events: {
          drilldown: function (e) {
            if (!e.seriesOptions) {
              let chart = this;
              let mapKey = "countries/us/" + e.point.drilldown + "-all";

              Highcharts.maps[
                mapKey
              ] = require(`@highcharts/map-collection/${mapKey}.geo.json`);

              let fail = setTimeout(function () {
                if (!Highcharts.maps[mapKey]) {
                  chart.showLoading(
                    '<i class="icon-frown"></i> Failed loading ' + e.point.name
                  );

                  fail = setTimeout(function () {
                    chart.hideLoading();
                  }, 1000);
                }
              }, 3000);

              chart.showLoading(
                '<i class="icon-spinner icon-spin icon-3x"></i>'
              );

              highData = Highcharts.geojson(Highcharts.maps[mapKey]);
              chart.hideLoading();
              clearTimeout(fail);

              chart.addSeriesAsDrilldown(e.point, {
                name: e.point.name,
                data: highData,
                dataLabels: {
                  enabled: true,
                  format: "{point.name}",
                },
              });
            }

            this.setTitle(null, { text: e.point.name });
          },

          drillup: function () {
            this.setTitle(null, { text: "" });
          },
        },
      },

      colorAxis: {
        dataClasses: dataClassTemp,
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

      plotOptions: {
        map: {
          states: {
            hover: {
              color: "#EEDD66",
            },
          },
        },
      },

      series: [
        {
          data: data,
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

          keys: outputKeys,

          tooltip: {
            headerFormat: "",
            pointFormatter: function () {
              switch (id) {
                case 1:
                  return mapOptionFun.pointFormatterFuncBed(this);
                  break;

                case 2:
                  return mapOptionFun.pointFormatterFuncICU(this);
                  break;

                case 3:
                  return mapOptionFun.pointFormatterFuncPhy(this);
                  break;

                case 4:
                  return mapOptionFun.pointFormatterFuncReg(this);
                  break;

                default:
                  break;
              }
            },
          },
        },
        {
          type: "mapline",
          data: separators,
          color: "silver",
          enableMouseTracking: false,
          animation: {
            duration: 500,
          },
        },
      ],

      drilldown: {
        activeDataLabelStyle: {
          color: "#FFFFFF",
          textDecoration: "none",
          textOutline: "1px #000000",
        },
        drillUpButton: {
          relativeTo: "spacingBox",
          position: {
            x: 0,
            y: 60,
          },
        },
      },
    };
    return resultData;
  }
};

export default mapOptions;
