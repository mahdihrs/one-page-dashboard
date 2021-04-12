export function usersRadiusPie({ width }) {
  return {
    chart: {
      type: 'variablepie',
      width: 250
    },
    legend: {
      enabled: false
    },
    title: {
      text: ''
    },
    tooltip: {
      headerFormat: '',
      pointFormat: '<span style="color:{point.color}">\u25CF</span> <b> {point.name}</b><br/>' +
        'Area (square km): <b>{point.y}</b><br/>' +
        'Population density (people per square km): <b>{point.z}</b><br/>'
    },
    plotOptions: {
      pie: {
        allowPointSelect: true,
        cursor: 'pointer',
        dataLabels: {
          enabled: false,
        }
      }
    },
    series: [{
      minPointSize: 10,
      innerSize: '20%',
      zMin: 0,
      name: 'countries',
      data: [{
        name: 'conservative',
        y: 521,
        z: 92.9
      }, {
        name: 'moderate',
        y: 726,
        z: 118.7
      }, {
        name: 'risk_averse',
        y: 308,
        z: 124.6
      }, {
        name: 'risk_taker',
        y: 767,
        z: 137.5
      }],
      dataLabels: [{
        enabled: false
      }]
    }]
  };
}