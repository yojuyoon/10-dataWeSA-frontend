export const options = () => {
  return {
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
        var table =
          "<table class='tooltip-table' style='width: 100%; font-size: 16px; color: grey;'>";
        table += `<tr>
                    <td class='title' style='text-align: left'>${series.name}</td>
                    <td class='data' style='text-align: right'></td>
                  </tr>`;
        table += `<br><tr>
                    <td class='title' style='text-align: left'>${
                      series.chart.series[this.point.colorIndex].userOptions.title
                    }</td>
                    <td class='data' style='text-align: right'>${
                      series.chart.series[this.point.colorIndex].data[this.point.index].y
                    }</td>
                  </tr>`;
        table += "</table>";
        return table;
      },
    },
    xAxis: {
      labels: {
        formatter: function () {
          return "July" + (this.value + 1).toString();
        },
      },
    },
    yAxis: {
      title: {
        text: "",
      },
    },
    legend: {
      enabled: false,
    },
    series: [],
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
};
