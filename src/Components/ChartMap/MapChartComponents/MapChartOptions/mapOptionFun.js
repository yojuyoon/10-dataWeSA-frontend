const mapOptionFun = {
  dataClassTempBed: [
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
  dataClassTempICU: [
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
  dataClassTempPys: [
    {
      from: 4.09,
      to: 7.56,
      color: "rgb(176, 205, 225)",
      name: "4.09 - 7.56",
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
  dataClassTempReg: [
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

  pointFormatterFuncBed: (data) => {
    return `<h1>${data.id}</h1>
            <hr/>
            <b>year :                     ${data.year}</b>
            <hr/>
            <b>Beds Per Resident :        ${data.value}</b>`;
  },

  pointFormatterFuncICU: (data) => {
    return `<h1>${data.id}</h1>
            <hr/>
            <b>year :                               ${data.year}</b>
            <hr/>
            <b>ICU Beds per 1,000 Resident :        ${data.total}k</b>
            <hr/>
            <b>ICU Beds :                           ${data.value}</b>`;
  },

  pointFormatterFuncPhy: (data) => {
    return `<h1>${data.id}</h1>
            <hr/>
            <b>year :                               ${data.year}</b>
            <hr/>
            <b>Physicians and Surgeons :            ${data.total}k</b>
            <hr/>
            <b>Per 1,000 Population :               ${data.value}</b>`;
  },

  pointFormatterFuncReg: (data) => {
    return `<h1>${data.id}</h1>
            <hr/>
            <b>year :                               ${data.year}</b>
            <hr/>
            <b>Registered Nurses :                  ${data.total}k</b>
            <hr/>
            <b>Per 1,000 Population :               ${data.value}</b>`;
  },
};

export default mapOptionFun;
