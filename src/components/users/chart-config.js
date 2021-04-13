function getTooltip(point) {
  return `
    <b>${point.y}%</b> with total <br/>
    <b>${point.z}</b> users in <b>${point.name}</b> category .
  `;
}

export function usersRadiusPie({ data, width }) {
  return {
    chart: {
      type: 'variablepie',
      width
    },
    legend: {
      enabled: false
    },
    title: {
      text: ''
    },
    tooltip: {
      formatter: function() {
        return getTooltip(this.point);
      }
    },
    plotOptions: {
      pie: {
        allowPointSelect: true,
        cursor: 'pointer',
        dataLabels: {
          enabled: false
        }
      }
    },
    series: [{
      minPointSize: 10,
      innerSize: '20%',
      zMin: 0,
      name: 'countries',
      data,
      dataLabels: [{
        enabled: false
      }]
    }]
  };
}