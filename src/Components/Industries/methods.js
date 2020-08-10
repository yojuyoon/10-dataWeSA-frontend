export const methods = {
  groupBy: ["group", "name"],
  data: [],
  size: (d) => d.value,
  tooltipConfig: {
    title: function (d) {
      var txt = d.name;
      return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    },
    body: function (d) {
      var table = "<table class='tooltip-table' style='width: 100%; text-align: right;'>";
      table +=
        "<tr><td class='title' style='text-align: left'>Year:</td><td class='data' style='text-align: right'>" +
        d.year +
        "</td></tr>";
      table +=
        "<tr><td class='title' style='text-align: left'>People in Workforce:</td><td class='data' style='text-align: right'>" +
        Number(d.people).toLocaleString() +
        "</td></tr>";
      table +=
        "<tr><td class='title' style='text-align: left'>Average Salary:</td><td class='data' style='text-align: right'>" +
        Number(d.average_wage).toLocaleString() +
        "</td></tr>";
      table += "</table>";
      return table;
    },
  },
};
